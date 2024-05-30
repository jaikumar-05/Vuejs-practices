<template>
  <!-- // array of string -->
  <div v-for="(sample, index) in names" :key="sample">
    {{ index }} {{ sample }}
  </div>
  <!-- array of objects -->
  <div v-for="indexs in cricket" :key="indexs">
    {{ indexs.batsman }} {{ indexs.modeofwicket }}
  </div>
  <!-- array of array -->
  <div v-for="employe in company" :key="employe.name">
    <h1>{{ employe.name }}</h1>
    <h1>{{ employe.role }}</h1>
  </div>
  <!-- object -->
  <div v-for="(values, key, index) in myinfo" :key="values">
    {{ index }} {{ key }} {{ values }}
  </div>
</template>

<script>
export default {
  name: "ListRendering",
  data() {
    return {
      names: ["jai", "sakthi", "kumar"],
      cricket: [
        { batsman: "virat", modeofwicket: "catch" },
        { batsman: "rohit", modeofwicket: "bowled" },
        { batsman: "sachin", modeofwicket: "LBW" },
      ],
      company: [
        {
          name: "jaikumar",
          role: ["frontend", "vuejs"],
        },
        {
          name: "sakthi",
          role: ["backend", "django"],
        },
      ],
      myinfo: {
        name: "jaikumar",
        age: 22,
      },
    };
  },
};
</script>
