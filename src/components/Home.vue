<template>
  <div class="home">
    <Sidebar />
    <PageContent />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import PageContent from "../components/PageContent.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
    PageContent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
