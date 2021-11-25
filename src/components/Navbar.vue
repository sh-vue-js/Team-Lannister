<template>
  <div
    class="container py-6 px-8 md:py-10 md:px-16 mx-auto flex-wrap flex flex-row justify-between items-center text-white"
  >
    <i
      class="lg:hidden fas fa-bars cursor-pointer"
      id="hamburger"
      v-on:click="hidden = !hidden"
    ></i>

    <ul
      class="py-4 lg:gap-6 xl:gap-12 font-medium order-last w-full lg:py-0 lg:order-none lg:flex lg:w-auto"
      id="top-nav"
      v-bind:class="{ hidden: hidden }"
    >
      <li class="pb-2 lg:pb-auto">
        <a href="#" class="hover:text-gray-400 transition ease-out duration-500"
          >ADULTS</a
        >
      </li>
      <li class="pb-2 lg:pb-auto">
        <a href="#" class="hover:text-gray-400 transition ease-out duration-500"
          >BABY</a
        >
      </li>
      <li class="pb-2 lg:pb-auto">
        <a href="#" class="hover:text-gray-400 transition ease-out duration-500"
          >BESTSELLERS</a
        >
      </li>
      <li class="pb-2 lg:pb-auto">
        <a href="#" class="hover:text-gray-400 transition ease-out duration-500"
          >SPECIALS</a
        >
      </li>
      <li class="pb-2 lg:pb-auto">
        <a href="#" class="hover:text-gray-400 transition ease-out duration-500"
          >ABOUT US</a
        >
      </li>
    </ul>
    <router-link :to="`/shopping`">
      <i
        id="shop-cart"
        class="fas fa-shopping-cart hover:text-black cursor-pointer"
      ></i>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: true,
    };
  },
};
</script>

<style scoped>
</style>