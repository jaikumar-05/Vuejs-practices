<template>
  <div class="container mx-auto lg:mx-96 p-10">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
      <div
        v-for="card in cards"
        :key="card.id"
        class="max-w-sm rounded overflow-hidden shadow-2xl p-4 bg-white"
      >
        <img class="w-full h-48" :src="card.image" :alt="card.title" />
        <div class="px-6 py-4">
          <div class="font-extrabold text-xl mb-2">{{ card.product }}</div>
          <p class="text-gray-700 text-lg font-bold">{{ card.description }}</p>
          <p class="text-gray-700 text-lg font-bold p-4">{{ card.price }}</p>
        </div>
        <div>
          <button
            class="border bg-red-50 px-5 rounded-full outline-none hover:bg-red-100"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>

  <div>
    <pre>{{ JSON.stringify(formvalues) }}</pre>
  </div>

  <form @submit.prevent="submitForm">
    <div>
      <label class="p-5" for="name">Name</label>
      <input
        class="border p-2"
        type="text"
        id="name"
        v-model="formvalues.name"
      />
    </div>
    <div class="mt-10 mr-14">
      <label for="profilesummary" class="p-3">Profile Summary</label>
      <textarea
        id="profilesummary"
        class="border"
        v-model="formvalues.profilesummary"
      ></textarea>
    </div>
    <div class="p-5">
      <label class="p-3" for="country">Country</label>
      <select id="country" class="border p-3" v-model="formvalues.country">
        <option value="">Select Country</option>
        <option value="india">India</option>
        <option value="russia">Russia</option>
        <option value="china">China</option>
        <option value="USA">USA</option>
      </select>
    </div>
    <div class="p-5">
      <label class="p-3" for="joblocation">Job Location</label>
      <select
        id="joblocation"
        multiple
        class="border p-3"
        v-model="formvalues.joblocation"
      >
        <option value="">Select Country</option>
        <option value="india">India</option>
        <option value="russia">Russia</option>
        <option value="china">China</option>
        <option value="USA">USA</option>
      </select>
    </div>
    <div>
      <input
        type="checkbox"
        id="remotework"
        v-model="formvalues.remotework"
        true-value="yes"
        false-value="no"
      />
      <label for="remotework">Open to Remote Work</label>
    </div>
    <div>
      <label for="skillset">Skill Set</label>
      <div>
        <input
          type="checkbox"
          id="html"
          value="html"
          v-model="formvalues.skillset"
        />
        <label for="html">HTML</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="css"
          value="css"
          v-model="formvalues.skillset"
        />
        <label for="css">CSS</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="javascript"
          value="javascript"
          v-model="formvalues.skillset"
        />
        <label for="javascript">JavaScript</label>
      </div>
    </div>
    <div>
      <label for="yearofexperience">Year of Experience</label>
      <div>
        <input
          type="radio"
          value="0-2"
          id="0-2"
          v-model="formvalues.yearofexperience"
        />
        <label for="0-2">0-2</label>
      </div>
      <div>
        <input
          type="radio"
          value="2-5"
          id="2-5"
          v-model="formvalues.yearofexperience"
        />
        <label for="2-5">2-5</label>
      </div>
      <div>
        <input
          type="radio"
          value="5-10"
          id="5-10"
          v-model="formvalues.yearofexperience"
        />
        <label for="5-10">5-10</label>
      </div>
      <div>
        <input
          type="radio"
          value="10+"
          id="10+"
          v-model="formvalues.yearofexperience"
        />
        <label for="10+">10+</label>
      </div>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "ActiveValue",
  data() {
    return {
      cards: [
        {
          id: 1,
          product: "watch",
          description: "Brand: Rolex",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGOudtOaJCqifn1Zoyj6D8wSSJid8DDg1_Q&s",
          price: "$100",
        },
        {
          id: 2,
          product: "NS200",
          description: "Brand: Pulsar",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8FOyO_qb_-_12NTBfIsYk2_NlLPEynGaDEg&s",
          price: "$1100",
        },
        {
          id: 3,
          product: "car",
          description: "Brand: Audi",
          image: "https://tinyurl.com/e6jk9k2c",
          price: "$45000",
        },
      ],
      formvalues: {
        name: "",
        profilesummary: "",
        country: "",
        joblocation: [],
        remotework: "no",
        skillset: [],
        yearofexperience: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("formvalues", this.formvalues);
    },
  },
};
</script>

<style></style>
