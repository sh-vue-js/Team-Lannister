<template>
  <div
    :class="{
      pinkBg: pinkClicked,
      blueBg: blueClicked,
      yellowBg: yellowClicked,
      whiteBg: whiteClicked,
    }"
  >
    <!-- <div :class="{ blueBg: colorClicked }"> -->
    <Navbar />

    <div class="middle">
      <!-- picture -->
      <div class="image-section">
        <img class="skate-img" src="../assets/skate.png" alt="Roller Skates" />
      </div>
      <div class="img-text">
        <p class="img-text1">SPEEDY</p>
        <p class="img-text2">QUADS</p>
      </div>

      <div class="right-end main">
        <div class="star">
          <p class="title">ROLLER SPEEDY QUADS</p>

          <span class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </span>
        </div>

        <div>
          <p class="contact">Contact 800-595-00</p>
          <p class="text">3 500 руб.</p>
        </div>

        <div>
          <p class="dummy-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            malesuada nulla ut orci dapibus volutpat. Fusce ac erat urna. Duis
            cursus, turpis non condimentum rhoncus, tellus nisi molestie nisl,
            at interdum urna enim ut lacus. Ut ac est vitae lacus ultrices
            auctor nec ac risus. Phasellus metus lorem, laoreet quis tortor ac,
            tristique eleifend mi.
          </p>
        </div>

        <div id="more">
          <a href="#">More details</a>
        </div>

        <div class="bg-changer">
          <span class="color-text"> COLOR: </span>

          <button class="blue" v-on:click.prevent="toggleBlueBg"></button>
          <button class="pink" v-on:click="togglePinkBg"></button>
          <button class="yellow" v-on:click="toggleYellowBg"></button>
          <button class="white" v-on:click="toggleWhiteBg"></button>
        </div>

        <div>
          <label for="sizes" class="text size">SIZE:</label>
          <select name="size" id="sizes" class="text">
            <option value="Select your size" disabled selected>
              Select your size
            </option>
            <option value="7">39</option>
            <option value="8">40</option>
            <option value="9">41</option>
            <option value="10">42</option>
          </select>
        </div>

        <div>
          <button class="text add">Add To Cart</button>
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
      blueClicked: false,
      pinkClicked: false,
      yellowClicked: false,
      whiteClicked: false,
    };
  },
  methods: {
    toggleBlueBg: function () {
      this.blueClicked = true;
    },
    togglePinkBg: function () {
      this.pinkClicked = true;
    },
    toggleYellowBg: function () {
      this.yellowClicked = true;
    },
    toggleWhiteBg: function () {
      this.whiteClicked = true;
    },
  },
};
</script>

<style scoped>
.pinkBg {
  background-color: #ed48ba;
}

.blueBg {
  background-color: #0392bf;
}

.yellowBg {
  background-color: #fbec06;
}

.whiteBg {
  background-color: #fff;
  color: #000;
}

#shop-cart {
  padding-right: 1rem;
  padding: top;
}

.middle {
  display: grid;
  grid-template-columns: 3fr 2fr;
  padding: 30px;
}

.image-section {
  padding-left: 8rem;
  padding-top: 5rem;
}

.skate-img {
  height: 350px;
  width: 310px;
}

.contact {
  font-size: 15px;
  padding-top: 10px;
  padding-bottom: 15px;
  color: ghostwhite;
  opacity: 0.6;
}

.img-text {
  font-size: 50px;
  font-weight: bold;
  padding-left: 140px;
  position: absolute;
  margin-top: 25rem;
  letter-spacing: 0.5rem;
  line-height: 3.5rem;
}

.img-text2 {
  padding-left: 150px;
}

.right-end {
  padding-top: 2rem;
}

.star {
  display: flex;
  align-items: center;
  width: 100%;
}

.title {
  color: ghostwhite;
  font-size: 25px;
  padding-bottom: 15px;
  padding-right: 10px;
}

a {
  text-decoration: none;
  color: ghostwhite;
}

.text {
  color: ghostwhite;
  font-weight: normal;
  font-size: 25px;
  padding-bottom: 15px;
  padding-right: 10px;
}

.dummy-text {
  font-size: 15px;
  opacity: 0.9;
  color: ghostwhite;
}

.cart {
  float: right;
  font-size: 17px;
  padding-bottom: 100px;
  cursor: pointer;
}

.rating {
  opacity: 0.9;
  color: gold;
  font-size: 12px;
  padding-bottom: 1rem;
}

#more {
  text-decoration: underline;
  font-size: 13px;
  padding-top: 5px;
}

.add {
  margin-top: 30px;
  background-color: #ed48ba;
  padding: 8px;
  width: 50%;
  border: none;
  font-size: 17px;
  margin-bottom: 2rem;
  cursor: pointer;
}

.bg-changer {
  padding-top: 35px;
  padding-bottom: 25px;
  display: flex;
  align-items: center;
}

.bg-changer button {
  margin-right: 5px;
}

.blue {
  background-color: #0392bf;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 50%;
}

.pink {
  background-color: #ed48ba;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #fff;
  border-width: 0;
}

.yellow {
  background-color: #fbec06;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #fff;
  border-width: 0;
}

.white {
  background-color: #fff;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #fff;
  border-width: 0;
}

.color-text {
  margin-right: 15px;
  font-size: 20px;
}

#sizes {
  background-color: #0392bf;
  padding: 5px 40px;
  border: 1px solid rgb(209, 202, 202);
  border-radius: 5px;
  font-size: 15px;
}

.size {
  margin-right: 30px;
  font-size: 20px;
}
</style>
