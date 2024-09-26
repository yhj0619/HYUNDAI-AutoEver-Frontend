<template>
  <div class="container py-3">
    <!-- 첫 번째 줄: AddPlaceView -->
    <div class="row">
      <div class="col-md-12">
        <br /><br />
        <h4 class="custom-font">
          <i class="fa-solid fa-plus"></i> 나만의 맛집 추가하기
        </h4>
        <br /><br />
        <AddPlaceView />
      </div>
    </div>

    <!-- 두 번째 줄: MapView -->
    <div class="row">
      <div class="col-md-12">
        <br /><br />
        <h4 class="custom-font">
          <i class="fa-solid fa-magnifying-glass"></i> 현 지도의 식당/카페
          검색하기
        </h4>
        <br /><br />
        <MapView />
      </div>
    </div>

    <br />
    <hr />

    <!-- 리스트 출력 -->
    <div>
      <br /><br />
      <h4 class="custom-font">
        <i class="fa-solid fa-list"></i> 나만의 맛집 리스트
      </h4>
      <p class="custom-font">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(5점 만점)
      </p>
      <br /><br />
      <PlaceListView />
    </div>
  </div>
</template>

<script setup>
import AddPlaceView from "../components/post/AddPlaceView.vue";
import PlaceListView from "../components/post/PlaceListView.vue";
import MapView from "../components/post/MapView.vue";
</script>

<style lang="scss" scoped>
.custom-font {
  font-family: "Do Hyeon", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>

<!-- <template>
  <div class="container py-3">
    <div class="row">
      <div class="col-md-6">
        <br /><br />
        <h4 class="custom-font">
          <i class="fa-solid fa-plus"></i> 나만의 맛집 추가하기
        </h4>
        <br /><br />
        <AddPlaceView />
      </div>
      <div class="col-md-6">
        <br /><br />
        <h4 class="custom-font">
          <i class="fa-solid fa-magnifying-glass"></i> 현 지도의 식당/카페
          검색하기
        </h4>
        <br /><br />
        <MapView />
      </div>
      <br />
      <hr />
    </div>
    <div>
      <br /><br />
      <h4 class="custom-font">
        <i class="fa-solid fa-list"></i> 나만의 맛집 리스트
      </h4>

      <p class="custom-font">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(5점 만점)
      </p>
      <br /><br />
      <PlaceListView />
    </div>
  </div>
</template>

<script setup>
import AddPlaceView from "../components/post/AddPlaceView.vue";
import PlaceListView from "../components/post/PlaceListView.vue";
import MapView from "../components/post/MapView.vue";
</script>

<style lang="scss" scoped>
.custom-font {
  font-family: "Do Hyeon", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style> -->
