<template>
  <div class="panel">
    <div class="right">
      <router-link
        tag="div"
        class="link"
        to="/"
        :class="{active: (name == 'Update')}"
      >Последние обновления</router-link>
      <router-link
        tag="div"
        class="link"
        to="/indev"
        :class="{active: (name == 'inDev')}"
      >В разработке</router-link>
      <!-- <div class="off">В разработке</div> -->
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  props: {
    name: String
  },
  data: () => {
    return {
      navs: [
        { name: "Последние обновления" },
        { name: "О нас", isDisabled: true }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3em;
  .right {
    display: flex;
    div:not(:first-child) {
      margin-left: 2em;
    }
    .link {
      font-size: 1.2rem;
      cursor: pointer;

      color: rgb(49, 49, 49);
    }
    .off {
      user-select: none;
      font-size: 1.2rem;
      color: rgb(122, 122, 122);
    }
    .active {
      color: rgb(50, 183, 108);
    }
  }
}
</style>