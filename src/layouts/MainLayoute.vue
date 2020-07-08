<template>
  <div>
    <div class="my-head">
      <div>
        Блог разработки
        <a
          href="http://quiz.bielecki.ru/"
          target="_blank"
          style="margin-left: 0.5em"
        >Akivano.ru</a>
      </div>
    </div>
    <div class="main-content">
      <navbar :name="navbarActive"></navbar>
      <div class="content-block">
        <div class="left">
          <router-view></router-view>
        </div>
        <div class="right">
          <div>Следи за нами в ВК</div>
          <v-btn class="my-btn" outlined color="#0D47A1">VK</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  },
  computed: {
    navbarActive() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Roboto";
}

.my-head {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 1.2em 0;
  a {
    text-decoration: none;
    position: relative;
    color: rgb(105, 30, 139);
  }
  a::before {
    content: "";
    position: absolute;
    width: 100%;
    top: 1.2em;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(105, 30, 139);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  a:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
}
.content-block {
  margin: 2em;
  display: flex;
  .left {
    flex-grow: 1;
    margin-right: 1em;
  }
  .right {
    margin-top: 2em;
    min-width: 200px;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .my-btn {
      margin-top: 1em;
      width: 100px;
    }
  }
}
</style>