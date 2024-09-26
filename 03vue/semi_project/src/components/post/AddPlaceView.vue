<template>
  <div>
    <div class="mb-3">
      이름
      <input
        type="text"
        class="form-control"
        placeholder="이름"
        v-model="placedata.name"
      />
    </div>

    <div class="mb-3">
      별점
      <select class="form-control" v-model="placedata.rating">
        <option value="" disabled selected>선택해주세요</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>

    <div class="mb-3">
      <textarea
        class="form-control"
        placeholder="리뷰를 작성해주세요"
        v-model="placedata.review"
        rows="5"
      ></textarea>
    </div>

    <div class="mb-3">
      추천하시겠습니까?
      <select class="form-control" v-model="placedata.recomm">
        <option value="" disabled selected>선택해주세요</option>
        <option value="추천">추천</option>
        <option value="비추천">비추천</option>
      </select>
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

    <div class="mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="주소를 입력하세요"
        @input="updateAddr"
        v-model="searchInput"
      />
      <div class="btn btn-primary" @click="searchAddress">위치 확인하기</div>
    </div>
    <br />
    <div>지도 {{ moveLat }} / {{ moveLng }}</div>
    <div id="add-place-map" style="width: 400px; height: 300px"></div>
    <!-- ID 수정 -->
    <div class="btn btn-primary" @click="addPlace">등록</div>

    <div>현재 위치: {{ latitude }} / {{ longitude }}</div>
  </div>
  <br /><br />
</template>

<script setup>
import { onMounted, ref } from "vue";
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

const clearForm = () => {
  placedata.value.name = null;
  placedata.value.addr = null;
  placedata.value.rating = null;
  placedata.value.review = null;
  placedata.value.recomm = null;
  placedata.value.image = null;
};

const updateAddr = (e) => {
  placedata.value.addr = event.target.value;
};

const addPlace = () => {
  const newPlace = { ...placedata.value };
  store.commit("addPlace", newPlace);
  store.commit("updateMapAddress", placedata.value.addr);
  clearForm();
};

const handleImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    placedata.value.image = URL.createObjectURL(file);
  }
};

const latitude = ref(0);
const longitude = ref(0);
const moveLat = ref(0);
const moveLng = ref(0);
const searchInput = ref("");
let map = null;
let currentMarker = null;
let isKakaoMapsLoaded = ref(false);

onMounted(() => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;
      loadKakaoMap();
    },
    () => {
      loadKakaoMap();
    }
  );
});

const loadKakaoMap = () => {
  if (window.kakao && window.kakao.maps) {
    initMap();
    isKakaoMapsLoaded.value = true;
  } else {
    const script = document.createElement("script");
    script.onload = () => {
      kakao.maps.load(initMap);
      isKakaoMapsLoaded.value = true;
    };
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=d12bd7f40f0c3987b3e43d5ded448f5e&libraries=services";
    document.head.appendChild(script);
  }
};

const initMap = () => {
  const container = document.getElementById("add-place-map"); // ID 수정
  const options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 3,
  };

  map = new kakao.maps.Map(container, options);

  currentMarker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(latitude.value, longitude.value),
  });
  currentMarker.setMap(map);

  kakao.maps.event.addListener(map, "center_changed", () => {
    const latlng = map.getCenter();
    moveLat.value = latlng.getLat();
    moveLng.value = latlng.getLng();
  });
};

const searchAddress = () => {
  const geocoder = new kakao.maps.services.Geocoder();
  geocoder.addressSearch(searchInput.value, (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      const newCoords = new kakao.maps.LatLng(result[0].y, result[0].x);
      moveMapCenter(result[0].y, result[0].x);
      currentMarker.setPosition(newCoords);
    }
  });
};

const moveMapCenter = (newLat, newLng) => {
  const moveLatLng = new kakao.maps.LatLng(newLat, newLng);
  map.panTo(moveLatLng);
};
</script>

<style scoped></style>
