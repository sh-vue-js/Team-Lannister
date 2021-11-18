<template>
  <div>
    <article class="left-end footer main">
      <!-- Sidebar -->
      <div>
        <i class="fas fa-sync-alt logo"></i>
      </div>

      <div class="media">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram-square"></i>
        <i class="fab fa-vk"></i>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
>

<style scoped>
.footer {
  background-color: rgb(216, 227, 236);
  padding: 10px;
  width: 4rem;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 30px;
  justify-content: space-between;
}

.logo {
  font-size: 20px;
  border-radius: 50%;
  padding: 10px;
  background: #ed48ba;
  color: white;
}

.media {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #0392bf;
}

.media i {
  padding: 10px auto;
  margin: 10px auto;
}
</style>
