<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary custom-font">
    <div class="container">
      <router-link class="navbar-custom" to="/">
        <i class="fa-solid fa-utensils"></i> Must-Go Restaurant List
        <i class="fa-solid fa-utensils"></i>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user">USER</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/post">POST</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.custom-font {
  font-family: "Jua", sans-serif;
  font-size: 30px;
}
.navbar-custom {
  font-size: 30px;
}
</style>
