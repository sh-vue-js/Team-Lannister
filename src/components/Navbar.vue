<template>
  <div class="header">
    <button class="hamburger" id="hamburger">
      <i class="fas fa-bars"></i>
    </button>

    <ul class="top-nav" id="top-nav">
      <li><a href="#">ADULTS</a></li>
      <li><a href="#">BABY</a></li>
      <li><a href="#">BESTSELLERS</a></li>
      <li><a href="#">SPECIALS</a></li>
      <li><a href="#">ABOUT US</a></li>
    </ul>

    <i id="shop-cart" class="fas fa-shopping-cart cart"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   toggleHamburger: false,
    };
  },
};
</script>

<style scoped>
.header {
  margin-left: 7rem;
  margin-right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
}

.top-nav {
  font-size: 15px;
  display: flex;
  /* flex-direction: row; */
}

.top-nav li {
  list-style: none;
  letter-spacing: 0.1rem;
  opacity: 0.9;
  cursor: pointer;
}

.top-nav li a {
  text-decoration: none;
  color: #fff;
  opacity: 0.9;
  padding: 1.5rem;
}

.top-nav li a:hover {
  color: lightgray;
}

.hamburger {
  font-size: 1.5rem;
  margin-left: 7rem;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;
}
</style>
