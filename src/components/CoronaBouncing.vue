<template>
  <div class="whole-app-container">
    <div class="x">
      <img src="@/assets/covid.png" class="y" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoronaBouncing'
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

$size: 100px;

img,
div {
  width: $size;
  height: $size;
  z-index: 0;
}

.x {
  animation: x (random(11) + 4) + s linear infinite alternate;
}

.y {
  animation: y (random(11) + 4) + s linear infinite alternate;
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
</style>
