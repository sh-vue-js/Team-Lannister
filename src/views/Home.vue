<template>
  <div class="home flex flex-row xl:h-screen lg:overflow-hidden pop">
    <Sidebar />
    <PageContent />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import PageContent from "../components/PageContent.vue";
import "tailwindcss/dist/base.css";
import "tailwindcss/dist/components.css";
import "tailwindcss/dist/utilities.css";

export default {
  name: "Home",
  components: {
    Sidebar,
    PageContent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/tailwind.css">
</style>
