<template>
  <div v-for="index in name" :key="index">
    {{ index }}
    <input type="text" placeholder="lastname" class="border" />
    <hr />
  </div>
  <button @click="shuffle" class="border text-xl p-3 bg-red-400 font-bold">
    shuffle
  </button>
  <!-- <button @click="count++">Count is: {{ count }}</button> -->
  <p>Addmethod - {{ add(11, 55, 55) }}</p>
  <p>Addmethod - {{ add(11, 585, 55) }}</p>
  <h2>multiplymethod - {{ multiply(basevalue) }}</h2>
  <p>{{ course }}</p>
  <div>
    <button
      class="border rounded bg-gray-400 p-4"
      v-on:click="course = 'javascript'"
    >
      change
    </button>
  </div>
  <h1>{{ count }}</h1>
  <button v-on:click="increment(1)" class="border rounded bg-orange-700 p-4">
    increment 1
  </button>
  <button v-on:click="increment(5)" class="border rounded bg-orange-700 p-4">
    increment 5
  </button>
  <button v-on:click="decrement(1)" class="border rounded bg-orange-700 p-4">
    decrement 1
  </button>
  <button v-on:click="decrement(10)" class="border rounded bg-orange-700 p-4">
    decrement 5
  </button>
  <button class="border rounded" v-on:click.once="createalert">
    create alert</button
  ><br />
  <input type="text" class="border border-yellow-300" v-on:keydown="getkey" />
  <p>{{ keyvalue }}</p>
  <img v-on:click.left.shift="changeImg" v-bind:src="imgurl" />
</template>
<script>
export default {
  name: "ShuffleName",
  data() {
    return {
      name: ["jai", "kumar", "virat", "kholi"],
      // count: 0,
      basemulti: 5,
      basevalue: 2,
      course: "vuejs",
      count: 0,
      keyvalue: "",
      imgUrlIndex: 0,
      imgurl: "https://pixels.com/assets/images/rooms/masterBedroom001.jpg",
      images: [
        "https://pixels.com/assets/images/rooms/masterBedroom001.jpg",
        require("@/assets/download.jpeg"),
        "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg",
      ],
    };
  },
  methods: {
    shuffle() {
      console.log(this.name);
      this.name = this.name.sort(() => Math.random() - 0.5);
    },
    add(a, b, c) {
      return a + b + c;
    },
    multiply(num) {
      return num * this.basemulti;
    },
    increment(num) {
      this.count += num;
    },
    decrement(num) {
      this.count -= num;
    },
    createalert() {
      alert("hi im jaikumar");
    },
    getkey(evt) {
      this.keyvalue = evt.key;
    },
    changeImg() {
      this.imgUrlIndex++;
      if (this.imgUrlIndex >= 3) {
        this.imgUrlIndex = 0;
      }
      this.imgurl = this.images[this.imgUrlIndex];
    },
  },
};
</script>
