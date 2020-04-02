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
      <div class="title">
        <h1>Coronavirus in the US</h1>
      </div>
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
    font-family: 'Sanchez', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background: black;
  }
}
.title {
  padding-top: 80px;
  font-size: 40px;
}
@media only screen and (max-width: 600px) {
  .title {
    padding-top: 40px;
    font-size: 20px;
  }
}

.updated {
  font-size: 12px;
  text-align: right;
  padding-right: 10px;
  padding-bottom: 10px;
}
</style>
