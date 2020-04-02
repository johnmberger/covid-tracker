<template>
  <div class="stats">
    <div class="stat-node">
      <div class="stat main">
        <span>{{ formatStat(positive) }}</span> Cases
      </div>
      <span class="change"
        >(<i class="material-icons md-18">{{
          positiveIncrease >= 0 ? 'arrow_upward' : 'arrow_downward'
        }}</i>
        {{ formatStat(positiveIncrease) }} today)</span
      >
    </div>
    <div class="stat-node">
      <div class="stat">
        <span>{{ formatStat(death) }}</span> Deaths
      </div>
      <span class="change"
        >(<i class="material-icons md-18">{{
          deathIncrease >= 0 ? 'arrow_upward' : 'arrow_downward'
        }}</i>
        {{ formatStat(deathIncrease) }} today)</span
      >
    </div>
    <div class="stat-node last">
      <div class="stat">
        <span>{{ formatStat(hospitalized) }}</span> Hospitalizations
      </div>
      <span class="change"
        >(<i class="material-icons md-18">{{
          hospitalizedIncrease >= 0 ? 'arrow_upward' : 'arrow_downward'
        }}</i>
        {{ formatStat(hospitalizedIncrease) }} today)</span
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Stats',
  computed: {
    ...mapState([
      'updating',
      'positive',
      'hospitalized',
      'death',
      'lastModified',
      'hospitalizedIncrease',
      'deathIncrease',
      'positiveIncrease'
    ])
  },
  methods: {
    formatStat(num) {
      if (typeof num === 'number') {
        return num.toLocaleString();
      }
      return num;
    }
  }
};
</script>

<style scoped lang="scss">
.stats {
  z-index: 2;
  color: white;
  .stat-node {
    margin-bottom: 40px;
    .stat {
      font-size: 40px;
      &.main {
        font-size: 70px;
      }
      &.last {
        padding-bottom: 60px;
      }
    }
    .change {
      display: flex;
      align-items: center;
      justify-content: center;
      .md-18 {
        font-size: 18px;
        margin-right: 6px;
      }
    }
  }
}
</style>
