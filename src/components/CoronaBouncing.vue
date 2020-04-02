<template>
  <div class="whole-app-container">
    <div class="x" v-for="n in multiplyingCoronaLeft" :key="n + 'left'">
      <img src="@/assets/covid.png" class="y" />
    </div>
    <div class="q" v-for="n in multiplyingCoronaRight" :key="n + 'right'">
      <img src="@/assets/covid.png" class="r" />
    </div>
    <div class="q" v-if="showTrump">
      <img src="@/assets/trump.png" class="r" />
    </div>
    <div class="x" v-if="showKemp">
      <img src="@/assets/kemp.png" class="y kemp" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoronaBouncing',
  data() {
    return {
      multiplyingCoronaLeft: 1,
      multiplyingCoronaRight: 0,
      leftTimeout: null,
      rightTimeout: null,
      showTrump: false,
      showKemp: false
    };
  },
  methods: {
    initializeTimeouts() {
      this.leftTimeout = setInterval(() => {
        this.multiplyingCoronaLeft++;
      }, 11000);
      setInterval(() => {
        this.multiplyingCoronaRight++;
      }, 13000);
      setInterval(() => {
        this.multiplyingCoronaLeft++;
        this.multiplyingCoronaRight++;
      }, 18000);
      setTimeout(() => {
        this.showTrump = true;
      }, 30000);
      setTimeout(() => {
        this.showKemp = true;
      }, 90000);
    }
  },
  mounted() {
    this.initializeTimeouts();
  },
  watch: {
    multiplyingCoronaLeft(val) {
      if (val >= 100) {
        clearInterval(this.leftTimeout);
      }
    },
    multiplyingCoronaRight(val) {
      if (val >= 100) {
        clearInterval(this.rightTimeout);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.whole-app-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}

$size: 50px;

.x,
.y,
.q,
.r {
  position: absolute;
  width: $size;
  height: $size;
  z-index: 0;
  &.kemp {
    height: 50px;
    width: 35px;
  }
}

.x {
  top: 0;
  animation: x 13s linear infinite alternate;
}

.y {
  top: 0;
  animation: y 7s linear infinite alternate;
}

.q {
  top: 0;
  animation: q 11s linear infinite alternate;
}

.r {
  top: 0;
  animation: r 4s linear infinite alternate;
}

@keyframes x {
  100% {
    transform: translateX(calc(100vw - #{$size}));
  }
}

@keyframes y {
  100% {
    transform: translateY(calc(100vh - #{$size}));
  }
}

@keyframes q {
  0% {
    transform: translateX(calc(100vw - #{$size}));
  }
}

@keyframes r {
  0% {
    transform: translateY(calc(100vh - #{$size}));
  }
}
</style>
