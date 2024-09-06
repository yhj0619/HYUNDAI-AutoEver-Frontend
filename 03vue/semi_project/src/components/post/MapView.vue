<template>
  <div>지도 {{ moveLat }} / {{ moveLng }}</div>
  <div id="map" style="width: 500px; height: 400px"></div>
  <div class="mt-3">
    <input
      type="text"
      v-model="searchAddr"
      placeholder="주소 입력"
      class="form-control"
    />
    <button class="btn btn-primary mt-2" @click="searchLocation">
      주소로 마커 찍기
    </button>
  </div>
  {{ latitude }}{{ longitude }}
</template>

<script setup>
import { onMounted, ref } from "vue";

const latitude = ref(0);
const longitude = ref(0);

const moveLat = ref(0);
const moveLng = ref(0);
const searchAddr = ref(""); // 사용자가 입력한 주소

let map; // 지도를 저장할 변수
let marker; // 마커를 저장할 변수
let geocoder; // 주소를 좌표로 변환하는 geocoder

onMounted(() => {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      latitude.value = pos.coords.latitude;
      longitude.value = pos.coords.longitude;

      //   initMap();

      if (window.kakao && window.kakao.maps) {
        initMap();
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(initMap);
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=05222ace53571c8fbb636c91def0fbc2";
        document.head.appendChild(script);
      }
    },
    (err) => {
      alert(err.message);
    }
  );
});

const initMap = () => {
  const container = document.getElementById("map");
  let options = {
    center: new kakao.maps.LatLng(latitude.value, longitude.value),
    level: 3,
  };

  map = new kakao.maps.Map(container, options);

  var markerPosition = new kakao.maps.LatLng(latitude.value, longitude.value);

  // 마커를 생성합니다
  marker = new kakao.maps.Marker({
    position: markerPosition,
    map: map, // 처음 지도에 표시할 마커
  });

  // geocoder를 초기화합니다
  geocoder = new kakao.maps.services.Geocoder();

  //지도 중심좌표
  kakao.maps.event.addListener(map, "center_changed", function () {
    var latlng = map.getCenter();

    moveLat.value = latlng.getLat();
    moveLng.value = latlng.getLng();
  });
};

// 주소로 마커를 찍는 함수
const searchLocation = () => {
  if (!geocoder) return;

  geocoder.addressSearch(searchAddr.value, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      // 지도의 중심을 해당 좌표로 이동
      map.setCenter(coords);

      // 마커 위치를 새로운 좌표로 설정
      marker.setPosition(coords);
    } else {
      alert("주소를 찾을 수 없습니다.");
    }
  });
};
</script>

<style lang="scss" scoped></style>
