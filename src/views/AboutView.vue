<template>
  <div class="about">
    <div class="bg-red-800">JaiKumar</div>
    <p>HelloWorld</p>
    <div>{{ name }}</div>
    <div v-text="man"></div>
    <p v-html="congrates"></p>
    <p v-html="hack" class="hover:underline"></p>
    <h1 class="text-3xl" v-bind:id="headingId">get started</h1>
    <img :src="url" />
    <button v-bind:disabled="isDisabled" class="border">bind</button>
    <h1 class="underline">JaiKumar</h1>
    <p v-bind:class="isSoldout ? 'sold-out' : 'new'">Soldout? movie</p>
    <div v-bind:class="isPromoted && 'promoted'">promoted movie</div>
    <p v-bind:class="['new', 'promoted']">sakthi is a gay</p>
    <p
      v-bind:class="{
        promoted: isPromoted,
        new: isSoldout,
        soldout: isSoldout,
      }"
    >
      nothing is changed
    </p>
    <p
      v-bind:style="{
        color: highlight,
      }"
    >
      lnline style
    </p>
    <p
      v-bind:style="{
        fontSize: size + 'px',
        padding: '20px',
      }"
    >
      congrates
    </p>
    <p v-bind:style="hello">hello all this is jaikumar from trichy</p>
    <p v-bind:style="[danger]">sakthi vishwanathan from madurai</p>
  </div>
  <div>{{ 10 + 5 }}</div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      man: "alive",
      name: "trainer hello",
      congrates: "<b>you won the prize</b>",
      hack: `<a href="" onclick="alert('you has been won the prize for the first time' )"> won the prize</a>`,
      headingId: "get started",
      url: "https://pixels.com/assets/images/rooms/masterBedroom001.jpg",
      isDisabled: true,
      isSoldout: true,
      isPromoted: true,
      highlight: "red",
      size: 50,
      hello: {
        padding: "50px",
        backgroundColor: "green",
        fontSize: "51px",
      },
      danger: {
        backgroundColor: "red",
        padding: "20px",
        border: "1px solid darkred",
      },
    };
  },
};
</script>
<style>
.sold-out {
  background-color: red;
}
.new {
  background-color: green;
}
.promoted {
  background-color: brown;
}
.jai {
  background-color: orange;
}
.pk {
  background-color: black;
}
</style>
