<template>
  <h1>my name is {{ name }}</h1>
  <p v-if="num === 0">the number is zerro</p>
  <p v-else-if="num < 0">the number is negative</p>
  <p v-else-if="num >= 10">the number is positive</p>
  <p v-else>not a number</p>
  <div v-if="display">
    <p>jaikumar</p>
    <p>div</p>
    <p>kumar ya</p>
  </div>
  <h1 v-show="showelements">conditional rendering</h1>
  <h1 v-if="showelements">conditional rendering</h1>
</template>

<script>
export default {
  name: "JaiKumar",
  data() {
    return {
      name: "jaikumar",
      num: "kjhg",
      display: false,
      showelements: true,
    };
  },
};
</script>
