<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="routes" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layot/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
.routes-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.routes-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.routes-enter-active {
  transition: all 0.3 ease-out;
}
.routes-leave-active {
  transition: all 0.3 ease-in;
}
.routes-enter-to,
.routes-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
