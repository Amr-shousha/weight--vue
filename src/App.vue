<script setup></script>

<template>
  <div id="app">
    <nav>
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" :to="{ name: 'Weight' }"
        >weight</router-link
      >
    </nav>
    <router-view></router-view>
  </div>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  background-color: var(--secondary-color);
  padding: 1rem;
}
.nav-link {
  text-decoration: none;
  padding: 5px 15px;
  border-radius: 20px;
  z-index: 1;
  position: relative;
}
.router-link-active {
  font-weight: 900;
  color: var(--primary-color);
}
.nav-link:hover {
  color: var(--light-color);
}

.nav-link::after {
  content: "";
  width: 100%;
  height: 0%;
  border-radius: 5px;
  /* background: rgb(9, 0, 171); */
  background: linear-gradient(
    90deg,
    rgba(9, 0, 171, 1) 0%,
    rgba(139, 39, 212, 1) 28%,
    rgba(255, 169, 0, 1) 72%
  );
  position: absolute;
  transition: all 1s ease-in-out;
  z-index: -1;
  bottom: -4;
  bottom: 0;
  left: 0;
}

.nav-link:hover::after {
  height: 100% !important;
}
</style>
