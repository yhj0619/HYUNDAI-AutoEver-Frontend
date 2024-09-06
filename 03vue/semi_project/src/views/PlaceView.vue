<template>
  <div class="container py-3">
    <div class="row">
      <div class="col-md-6">
        <h3>Add Restaurant</h3>
        <AddPlaceView />
      </div>
      <div class="col-md-6">
        <h3>Restaurant List</h3>
        <PlaceListView />
      </div>
    </div>
    <MapView />
  </div>
</template>

<script setup>
import AddPlaceView from "../components/post/AddPlaceView.vue";
import PlaceListView from "../components/post/PlaceListView.vue";
import MapView from "../components/post/MapView.vue";
</script>

<style lang="scss" scoped></style>
