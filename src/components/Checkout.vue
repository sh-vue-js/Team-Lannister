<template>
  <div>
    <div class="container relative border-b-2 border-black md:mx-0">
      <table class="mx-15 table-auto">
        <tr class="border-b-2 border-black mt-36 p-4 text-xl text-center">
          <th class="hidden md:block">Product</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>

        <!-- Content -->
        <div v-show="mutableProduct.length === 0">
          <h2 class="text-center w-full font-bold py-6">Cart is Empty</h2>
        </div>

        <tr
          class="text-center my-16"
          v-for="photo in photos"
          v-show="mutableProduct.includes(photo.id)"
          :key="photo.id"
        >
          <td class="hidden md:block">
            <div class="flex justify-center">
              <img :src="photo.url" :alt="photo.description" class="h-36" />
            </div>
          </td>
          <td>
            <div class="font-bold">{{ photo.description }}</div>
          </td>
          <td>
            <div>
              <input
                id="qty"
                class="w-10 text-center"
                type="number"
                v-bind:value="getQuantity(photo.id)"
                disabled
              />
            </div>
          </td>
          <td>
            <div class="font-bold">N{{ photo.price }}</div>
          </td>
          <td>
            <div v-on:click="removeItem(photo.id)">
              <i class="fas fa-times"></i>
            </div>
          </td>
        </tr>
        <tr>
          <div
            class="mt-2 block absolute right-0 -bottom-8 md:bottom-0 text-xl font-bold"
          >
            TOTAL: N{{ Total }}
          </div>
        </tr>
      </table>

      <button
        class="absolute -bottom-12 right-1/2 hover:opacity-70 mt-6 bg-black text-white font-bold text-sm uppercase py-1 px-2 rounded"
      >
        Pay Now
      </button>
    </div>
  </div>
</template>

<script>
import photos from "../data/photos.json";

export default {
  name: "checkout",
  props: ["ProductSelected"],
  data() {
    return {
      photos,
      mutableProduct: this.ProductSelected,
    };
  },
  methods: {
    getQuantity: function (id) {
      var count = 0;
      this.mutableProduct.forEach((v) => v === id && count++);
      return count;
    },
    removeItem(productid) {
      // this.mutableProduct = this.mutableProduct.filter(
      //   (id) => id !== productid
      // );
      var i = this.mutableProduct.length;
      while (i--) {
        if (this.mutableProduct[i] === productid) {
          this.mutableProduct.splice(this.mutableProduct.indexOf(productid), 1);
        }
      }

      var j = this.ProductSelected.length;
      while (j--) {
        if (this.ProductSelected[j] === productid) {
          this.ProductSelected.splice(
            this.ProductSelected.indexOf(productid),
            1
          );
        }
      }
    },
  },
  computed: {
    Total() {
      let total = 0;
      this.mutableProduct.forEach((product) => {
        total += this.photos[product].price * this.photos[product].qty;
      });
      return total;
    },
    CartCount() {
      console.log(this.mutableProduct.length);
      return this.mutableProduct.length;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rajdhani&display=swap");

.container {
  display: flex;
  flex-flow: column wrap;
  width: 50rem;
  margin: 0 auto;
  font-family: "Rajdhani", sans-serif;
}
</style>
