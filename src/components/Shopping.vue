<template>
  <div class="app">
    <div class="container max-w-6xl px-20 mx-auto my-20">
      <div class="text-3xl">HATS</div>
      <div class="gallery">
        <div
          class="gallery-panel"
          v-for="photo in photos"
          v-show="photo.category == 'Hats'"
          :key="photo.id"
        >
          <img :src="photo.url" />
          <div class="button">
            <button v-on:click="cartNumbers(photo.id)">ADD TO CART</button>
          </div>
          <div class="info">
            <p>{{ photo.description }}</p>
            <p>N{{ photo.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container max-w-6xl p-5 px-20 mx-auto my-20">
      <div class="text-3xl">SNEAKERS</div>
      <div class="gallery">
        <div
          class="gallery-panel"
          v-for="photo in photos"
          v-show="photo.category == 'Sneakers'"
          :key="photo.id"
        >
          <img :src="photo.url" />
          <div class="button">
            <button v-on:click="cartNumbers(photo.id)">ADD TO CART</button>
          </div>
          <div class="info">
            <p>{{ photo.description }}</p>
            <p>N{{ photo.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container max-w-6xl p-5 px-20 mx-auto my-20">
      <div class="text-3xl">JACKETS</div>
      <div class="gallery">
        <div
          class="gallery-panel"
          v-for="photo in photos"
          v-show="photo.category == 'Jackets'"
          :key="photo.id"
        >
          <img :src="photo.url" />
          <div class="button">
            <button v-on:click="cartNumbers(photo.id)">ADD TO CART</button>
          </div>
          <div class="info">
            <p>{{ photo.description }}</p>
            <p>N{{ photo.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container max-w-6xl p-5 px-20 mx-auto my-20">
      <div class="text-3xl">WOMEN</div>
      <div class="gallery">
        <div
          class="gallery-panel"
          v-for="photo in photos"
          v-show="photo.category == 'Women'"
          :key="photo.id"
        >
          <img :src="photo.url" />
          <div class="button">
            <button v-on:click="cartNumbers(photo.id)">ADD TO CART</button>
          </div>
          <div class="info">
            <p>{{ photo.description }}</p>
            <p>N{{ photo.price }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container max-w-6xl p-5 px-20 mx-auto my-20">
      <div class="text-3xl">MEN</div>
      <div class="gallery">
        <div
          class="gallery-panel"
          v-for="photo in photos"
          v-show="photo.category == 'Men'"
          :key="photo.id"
        >
          <img :src="photo.url" />
          <div class="button cursor-pointer">
            <button v-on:click="cartNumbers(photo.id)">ADD TO CART</button>
          </div>
          <div class="info">
            <p>{{ photo.description }}</p>
            <p>N{{ photo.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import photos from "../data/photos.json";

export default {
  name: "Shopping",
  props: ["ProductSelected"],
  data() {
    return {
      photos,
      // num: 0,
      // ProductSelected: [],
    };
  },
  methods: {
    cartNumbers: function (productIdentity) {
      console.log(productIdentity);
      // this.$set(this.ProductSelected, this.num, productIdentity);
      this.ProductSelected.push(productIdentity);
      // this.num = this.ProductSelected.length;
    },
  },
  computed: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css");


.app {
  font-family: "Rajdhani", sans-serif;
}


.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 26px;
}

.gallery-panel {
  position: relative;
}

.gallery-panel img {
  width: 100%;
  height: 40vh;
  object-fit: cover;
}

.button {
  position: absolute;
  text-align: center;
  opacity: 0;
  transition: opacity 0.35s ease;
  width: 200px;
  bottom: 60px;
  left: 50%;
  margin-left: -100px;
}

.button button {
  width: 200px;
  padding: 12px 48px;
  text-align: center;
  color: white;
  z-index: 1;
  background: black;
  font-size: 14px;
  font-weight: bold;
}

.gallery-panel:hover img {
  opacity: 0.7;
}

.gallery-panel:hover .button {
  opacity: 1;
}

.info {
  display: flex;
  justify-content: space-between;
}
</style>
