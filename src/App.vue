<template>
  <main-layoute>
    <router-view></router-view>
  </main-layoute>
</template>

<script>
import MainLayoute from "@/layouts/MainLayoute";
export default {
  name: "App",

  components: {
    MainLayoute
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
</style>
