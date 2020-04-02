<template>
  <div class="stats">
    <div class="stat-node">
      <div class="title">
        <h1 class="title-text">
          There have been<br />
          <span class="cases">{{ formatStat(positive) }}</span
          ><br />
          fucking cases of coronavirus
        </h1>
        <span class="change"
          >(<i class="material-icons md">{{
            positiveIncrease >= 0 ? 'arrow_upward' : 'arrow_downward'
          }}</i>
          {{ percentageIncrease(positive, positiveIncrease) }}% today)</span
        >
      </div>
    </div>
    <div class="stat-node">
      <div class="stat">
        <span>{{ formatStat(death) }}</span> Deaths
      </div>
      <span class="change"
        >(<i class="material-icons md">{{
          deathIncrease >= 0 ? 'arrow_upward' : 'arrow_downward'
        }}</i>
        {{ percentageIncrease(death, deathIncrease) }}% today)</span
      >
    </div>
    <div class="stat-node last">
      <div class="stat">
        <span>{{ formatStat(hospitalized) }}</span> Hospitalizations
      </div>
      <span class="change"
        >(<i class="material-icons md">{{
          hospitalizedIncrease >= 0 ? 'arrow_upward' : 'arrow_downward'
        }}</i>
        {{ percentageIncrease(hospitalized, hospitalizedIncrease) }}%
        today)</span
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
    },
    percentageIncrease(today, increase) {
      return ((increase / (today - increase)) * 100).toFixed(2);
    }
  }
};
</script>

<style scoped lang="scss">
.stats {
  z-index: 2;
  color: white;
  .stat-node {
    margin-bottom: 60px;
    .stat {
      font-size: 48px;
      &.last {
        padding-bottom: 40px;
      }
    }
    .change {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      .md {
        font-size: 24px;
        margin-right: 6px;
      }
    }
  }
}
.title {
  padding-top: 20px;
  font-size: 32px;
  margin-bottom: 40px;
  &-text {
    margin-bottom: 8px;
  }
  .cases {
    font-size: 80px;
  }
}
@media only screen and (max-width: 600px) {
  .title {
    // padding-top: 80px;
    font-size: 16px;
    &-text {
      margin-bottom: 8px;
    }
    .cases {
      font-size: 40px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .stats {
    .stat-node {
      margin-bottom: 60px;
      .stat {
        font-size: 26px;
        &.main {
          margin-top: 50px;
          font-size: 28px;
        }
        &.last {
          padding-bottom: 40px;
        }
      }
      .change {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        .md {
          font-size: 13px;
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
