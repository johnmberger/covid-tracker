<template>
  <div id="app">
    <div v-if="error">
      Error
    </div>
    <div v-else-if="loading">
      <div class="title">
        <h1>Loading...</h1>
      </div>
    </div>
    <div v-else>
      <h2>In the USA,</h2>
      <stats />
      <corona-bouncing />
    </div>
    <div class="updated">Updated {{ lastModified }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Stats from '@/components/Stats';
import CoronaBouncing from '@/components/CoronaBouncing';

export default {
  name: 'App',
  components: {
    Stats,
    CoronaBouncing
  },
  mounted() {
    this.$store.dispatch('getLatest', { initialLoad: true });
    setInterval(() => {
      this.$store.dispatch('getLatest');
    }, 300000);
  },
  computed: {
    ...mapState(['loading', 'error', 'lastModified'])
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
  max-width: 100vw;
  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    min-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background: black;
  }
}
.updated {
  font-size: 12px;
  text-align: right;
  padding-right: 10px;
  padding-bottom: 10px;
}
</style>
