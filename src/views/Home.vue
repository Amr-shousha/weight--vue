<template>
  <div class="">
    <div class="BG d-flex flex-column justify-content-center">
      <div
        class="title-container d-flex flex-column justify-content-center align-items-center text-center"
      >
        <h1>Track your Weight Journey</h1>
        <h3>the easiest & free weight tracker</h3>

        <router-link :to="{ name: 'Weight' }">
          <button>Track my weight</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.BG {
  // position: absolute;
  // z-index: -1;
  background: #f0f0f0 url("../assets/imgs/background.jpg") center / cover
    no-repeat fixed;
  width: 100%;
  height: 100vh;
}
.title-container {
  background-color: #0000009b;

  color: #f0f0f0;
  width: 600px;
  padding: 30px 0;
  align-self: center;
  font-family: "Ubonto";
}
.title-container button {
  padding: 10px 15px;
  margin-top: 10px;
  background-color: var(--primary-color);
  color: #f0f0f0;
  font-size: 20px;
  border: none;
  border-radius: 20px;
}
@media (max-width: 599px) {
  .title-container h1 {
    font-size: 30px;
  }
  .title-container h3 {
    font-size: 20px;
  }
  .title-container {
    width: 400px;
  }
}
</style>
