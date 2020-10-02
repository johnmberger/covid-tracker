import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import { format } from 'date-fns';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    updating: false,
    error: false,
    positive: 0,
    hospitalized: 0,
    death: 0,
    lastModified: null,
    hospitalizedIncrease: 0,
    deathIncrease: 0,
    positiveIncrease: 0
  },
  actions: {
    async getLatest({ commit }, { initialLoad } = { initialLoad: false }) {
      try {
        if (!initialLoad) {
          commit('setUpdating', true);
          commit('setError', false);
        }
        const latestStats = await api.getLatest();
        const todaysStats = await api.getTodaysStats();
        commit('setStats', latestStats.data.shift());
        commit('setTodaysStats', todaysStats.data);
      } catch (e) {
        commit('setError', true);
      } finally {
        commit('setLoading', false);
        commit('setUpdating', false);
      }
    }
  },
  mutations: {
    setUpdating(state, isUpdating) {
      state.updating = isUpdating;
    },
    setLoading(state, isLoading) {
      state.loading = isLoading;
    },
    setStats(state, { positive, hospitalized, death, lastModified }) {
      state.positive = positive;
      state.hospitalized = hospitalized;
      state.death = death;
      state.lastModified = transformDate(lastModified);
      document.title = `${
        positive ? positive.toLocaleString() : ''
      } Fucking Coronavirus Cases`;
    },
    setTodaysStats(
      state,
      { hospitalizedIncrease, deathIncrease, positiveIncrease }
    ) {
      state.hospitalizedIncrease = hospitalizedIncrease;
      state.deathIncrease = deathIncrease;
      state.positiveIncrease = positiveIncrease;
    },

    setError(state, isError) {
      state.error = isError;
    }
  }
});

function transformDate(date) {
  return format(new Date(date), 'Pp');
}
