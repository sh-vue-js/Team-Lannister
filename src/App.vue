<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #0392bf;
  display: flex;
  flex-direction: row;
  font-family: "Poppins";
  align-items: stretch;
  height: 100%;
  width: 100%;
  position: absolute;
  color: ghostwhite;
}

/* Screens below 541 and above 850px */

@media only screen and (min-width: 541px) and (max-width: 850px) {
  .footer {
    position: fixed;
  }

  .top-nav {
    display: none;
    margin-top: 1rem;
    margin-left: 200px;
    font-size: 15px;
  }

  .top-nav li {
    font-size: 13px;
  }

  .top-nav li:hover {
    color: lightgray;
  }

  .top-nav.show {
    display: flex;
    flex-direction: column;
  }

  .hamburger {
    display: block;
    margin-left: 100px;
  }

  .right-end {
    width: 100%;
    margin-left: -200px;
    margin-right: 100px;
  }

  .skate-img {
    text-align: center;
    margin-left: 200px;
    height: 290px;
    width: 250px;
  }

  .star {
    display: flex;
    margin-top: 600px;
    width: 100%;
  }

  .dummy-text {
    font-size: 14px;
    width: 100%;
    text-justify: auto;
  }

  .img {
    text-align: center;
    margin: auto;
  }

  .img-text {
    margin-top: 5px;
    margin-left: 50px;
  }

  .rating {
    display: flex;
    padding: 0.5rem;
  }

  .text {
    font-size: 18px;
  }

  #sizes {
    width: 70%;
    font-size: 14px;
  }

  .add {
    margin-bottom: 2rem;
  }
}

/* Screens below 960px but above 850px */

@media only screen and (max-width: 960px) {
  .footer {
    position: fixed;
    width: 4rem;
  }

  .top-nav {
    display: none;
    flex-direction: row;
    width: 100%;
    margin-top: 1rem;
  }

  .top-nav.show {
    display: flex;
  }

  .top-nav li {
    font-size: 13px;
  }

  .top-nav li:hover {
    color: lightgray;
  }

  .hamburger {
    display: block;
  }

  .dummy-text {
    font-size: 14px;
    width: 100%;
  }

  .rating {
    display: flex;
    padding: 0.5rem;
  }

  .text {
    font-size: 17px;
  }

  #sizes {
    width: 70%;
    font-size: 14px;
  }

  .add {
    margin-bottom: 2rem;
  }
}
</style>
