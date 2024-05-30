<template>
  <JaiKumar />
  <ListRendering />
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import JaiKumar from "@/components/JaiKumar.vue";
import ListRendering from "@/components/ListRendering.vue";
export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    JaiKumar,
    ListRendering,
  },
};
</script>
