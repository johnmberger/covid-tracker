<template>
  <div class="whole-app-container">
    <div class="x" v-for="n in multiplyingCoronaLeft" :key="n + 'left'">
      <img src="@/assets/covid.png" class="y" />
    </div>
    <div class="q" v-for="n in multiplyingCoronaRight" :key="n + 'right'">
      <img src="@/assets/covid.png" class="r" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoronaBouncing',
  data() {
    return {
      multiplyingCoronaLeft: 1,
      multiplyingCoronaRight: 0
    };
  },
  methods: {
    startIncrement() {
      setInterval(() => {
        this.multiplyingCoronaLeft++;
      }, 11000);
      setInterval(() => {
        this.multiplyingCoronaRight++;
      }, 13000);
      setInterval(() => {
        this.multiplyingCoronaLeft++;
        this.multiplyingCoronaRight++;
      }, 18000);
    }
  },
  mounted() {
    this.startIncrement();
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
}

.x {
  top: 0;
  left: 0;
  animation: x 13s linear infinite alternate;
}

.y {
  top: 0;
  left: 0;
  animation: y 7s linear infinite alternate;
}

.q {
  top: 0;
  animation: q 13s linear infinite alternate;
}

.r {
  top: 0;
  animation: r 7s linear infinite alternate;
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
