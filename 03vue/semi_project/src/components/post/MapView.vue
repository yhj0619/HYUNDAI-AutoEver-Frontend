<template>
  <div class="map_wrap">
    <div id="main-map" style="width: 100%; height: 500px"></div>
    <ul id="category">
      <li id="FD6" @click="onClickCategory('FD6')">
        <span class="category_bg restaurant"></span>
        식당
      </li>
      <li id="CE7" @click="onClickCategory('CE7')">
        <span class="category_bg cafe"></span>
        카페
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const map = ref(null);
    const markers = ref([]);
    const currCategory = ref("");
    const ps = ref(null);

    onMounted(() => {
      loadKakaoMapScript();
    });

    const loadKakaoMapScript = () => {
      if (typeof kakao === "undefined") {
        const script = document.createElement("script");
        script.onload = () => kakao.maps.load(init);
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?appkey=d12bd7f40f0c3987b3e43d5ded448f5e&autoload=false&libraries=services";
        document.head.appendChild(script);
      } else {
        kakao.maps.load(init);
      }
    };

    const init = () => {
      const mapContainer = document.getElementById("main-map");
      const mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567),
        level: 5,
      };

      map.value = new kakao.maps.Map(mapContainer, mapOption);
      ps.value = new kakao.maps.services.Places(map.value);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const currentLocation = new kakao.maps.LatLng(lat, lon);

          const marker = new kakao.maps.Marker({
            map: map.value,
            position: currentLocation,
          });
          marker.setMap(map.value);
          map.value.setCenter(currentLocation);
        });
      }
    };

    const onClickCategory = (category) => {
      if (currCategory.value !== category) {
        currCategory.value = category;
        searchPlaces();
      }
    };

    const searchPlaces = () => {
      if (!currCategory.value) return;

      ps.value.categorySearch(currCategory.value, placesSearchCB, {
        useMapBounds: true,
      });
    };

    const placesSearchCB = (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        displayPlaces(data);
      } else {
        console.error("Places search failed:", status);
      }
    };

    const displayPlaces = (places) => {
      clearMarkers();

      for (let i = 0; i < places.length; i++) {
        const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
        const marker = addMarker(placePosition);
        markers.value.push(marker);
      }
    };

    const addMarker = (position) => {
      const marker = new kakao.maps.Marker({
        position,
      });
      marker.setMap(map.value);
      return marker;
    };

    const clearMarkers = () => {
      for (let i = 0; i < markers.value.length; i++) {
        markers.value[i].setMap(null);
      }
      markers.value = [];
    };

    return {
      onClickCategory,
    };
  },
};
</script>

<style scoped>
.map_wrap {
  position: relative;
}

#category {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  background: white;
  border-radius: 5px;
  padding: 10px;
}

#category li {
  cursor: pointer;
  padding: 5px;
}
</style>
