<template>
  <div>AddPlaceView</div>
  <div class="mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="이름"
      v-model="placedata.name"
    />
  </div>
  <div class="mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="주소"
      v-model="placedata.addr"
    />
  </div>
  <div class="mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="별점"
      v-model="placedata.rating"
    />
  </div>
  <div class="mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="리뷰"
      v-model="placedata.review"
    />
  </div>
  <div class="mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="추천"
      v-model="placedata.recomm"
    />
  </div>
  <div class="input-group mb-3">
    <input
      type="file"
      class="form-control"
      id="fileform"
      @change="handleImage"
      accept="image/*"
    />
    <label class="input-group-text" for="fileform">Upload</label>
  </div>
  <div class="btn btn-primary" @click="addPlace">맛집 추가</div>
  {{ placedata }}
</template>

<script setup>
import { ref } from "vue";

import { useStore } from "vuex";

const store = useStore();
const placedata = ref({
  name: null,
  addr: null,
  rating: null,
  review: null,
  recomm: null,
  image: null,
});

const clearform = () => {
  placedata.value.name = null;
  placedata.value.addr = null;
  placedata.value.rating = null;
  placedata.value.review = null;
  placedata.value.recomm = null;
  placedata.value.image = null;
};

const addPlace = () => {
  let pData = {
    name: placedata.value.name,
    addr: placedata.value.addr,
    rating: placedata.value.rating,
    review: placedata.value.review,
    recomm: placedata.value.recomm,
    image: placedata.value.image,
  };
  store.commit("addPlace", pData);
  clearform();
};

const handleImage = (e) => {
  const file = e.target.files[0];
  console.log(file);
  if (file) {
    userdata.value.image = URL.createObjectURL(file);
  }
};
</script>

<style lang="scss" scoped></style>
