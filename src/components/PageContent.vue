<template>
  <div class="md:ml-16 w-screen" :class="currentColor">
    <!-- <div :class="{ blueBg: colorClicked }"> -->
    <Navbar />

    <div class="container py-4 px-6 md:py-8 md:px-16 lg:grid lg:grid-cols-2">
      <!-- picture -->
      <div class="mx-auto md:relative flex justify-center">
        <img
          class="skate-img"
          src="../assets/skate-min.png"
          alt="Roller Skates"
        />
        <div
          class="hidden md:block md:absolute md:bottom-14 tracking-widest text-white text-6xl"
        >
          <p class="left-text">SPEEDY</p>
          <p class="">QUADS</p>
        </div>
      </div>

      <div class="text-white md:ml-16">
        <div class="xl:flex items-center gap-8">
          <p class="text-2xl md:text-3xl tracking-wide">ROLLER SPEEDY QUADS</p>
          <span class="text-yellow-300">
            <i class="fas fa-star px-1"></i>
            <i class="fas fa-star px-1"></i>
            <i class="fas fa-star px-1"></i>
            <i class="fas fa-star px-1"></i>
            <i class="fas fa-star px-1"></i>
          </span>
        </div>

        <div class="py-2">
          <p class="text-sm text-gray-300 py-2">Contact 800-595-00</p>
          <p class="text-xl">3 500 руб.</p>
        </div>

        <div>
          <p class="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            malesuada nulla ut orci dapibus volutpat. Fusce ac erat urna. Duis
            cursus, turpis non condimentum rhoncus, tellus nisi molestie nisl,
            at interdum urna enim ut lacus. Ut ac est vitae lacus ultrices
            auctor nec ac risus. Phasellus metus lorem, laoreet quis tortor ac,
            tristique eleifend mi.
          </p>
          <a href="#" class="text-sm text-gray-300 underline">More details</a>
        </div>

        <div class="py-8">
          <div class="flex items-center">
            <span class="pr-6"> COLOR: </span>
            <div
              class="mr-2 blue h-6 w-6 rounded-full border-2 border-white cursor-pointer p-3 blueBg"
              v-on:click="switchColor('blue')"
            ></div>
            <div
              class="mr-2 pink h-6 w-6 rounded-full border-2 border-white cursor-pointer pinkBg"
              v-on:click="switchColor('pink')"
            ></div>
            <div
              class="mr-2 yellow h-6 w-6 rounded-full border-2 border-white cursor-pointer yellowBg"
              v-on:click="switchColor('yellow')"
            ></div>
            <div
              class="mr-2 grey h-6 w-6 rounded-full border-2 border-white cursor-pointer whiteBg"
              v-on:click="switchColor('grey')"
            ></div>
          </div>

          <div class="pt-3">
            <label for="sizes" class="pr-6">SIZE:</label>
            <select
              name="size"
              id="sizes"
              class="bg-transparent border border-white py-1 pr-8 focus:outline-none cursor-pointer"
            >
              <option value="Select your size" disabled selected>
                Select your size
              </option>
              <option class="blue text-white" value="7">39</option>
              <option class="blue text-white" value="8">40</option>
              <option class="blue text-white" value="9">41</option>
              <option class="blue text-white" value="10">42</option>
            </select>
          </div>
        </div>
        <div>
          <button
            class="font-medium pink px-6 py-2 w-full md:w-auto hover:text-black hover:bg-pink-500 transition ease"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "PageContent",
  components: {
    Navbar,
  },
  data() {
    return {
      currentColor: localStorage.getItem("color"),
    };
  },
  methods: {
    switchColor(change) {
      localStorage.setItem("color", change);
      this.currentColor = localStorage.getItem("color");
    },
  },
};
</script>

<style scoped>
.skate-img {
  height: 350px;
  width: 310px;
}

.left-text {
  position: relative;
  left: -28%;
}

</style>
