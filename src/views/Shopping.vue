<template>
  <div class="relative">
    <button
      class="absolute font-bold text-xl -bottom-8 right-24"
      v-on:click="component = 'shopping'"
      v-show="component == 'checkout'"
    >
      Back to shop
    </button>
    <div class="icons">
      <i class="fas fa-crown fa-3x" v-on:click="log"></i>
      <i
        class="bi bi-bag cursor-pointer"
        style="font-size: 35px"
        v-on:click="component = 'checkout'"
        ><span>{{ num }}</span></i
      >
    </div>
    <keep-alive>
      <component
        v-bind:is="component"
        :ProductSelected="ProductSelected"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
// Imports
import shopping from "../components/Shopping.vue";
import checkout from "../components/Checkout.vue";

export default {
  components: {
    shopping,
    checkout,
  },
  data() {
    return {
      component: "shopping",
      num: 0,
      ProductSelected: [],
    };
  },
  methods: {
    log: function () {
      console.log(this.ProductSelected.length);
    },
  },
  beforeUpdate() {
    this.num = this.ProductSelected.length;
  },
};
</script>

<style>
.icons {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  margin-top: 4rem;
}

.icons span {
  font-size: 18px;
  position: relative;
  right: 25px;
}
</style>
