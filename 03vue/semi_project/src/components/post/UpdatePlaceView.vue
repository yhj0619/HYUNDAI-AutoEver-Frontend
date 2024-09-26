<template>
  <div>
    <!-- Trigger Button for Modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#editModal"
    >
      수정하기
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="editModal"
      tabindex="-1"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">정보 수정</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
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
              <label class="input-group-text" for="fileform"
                >이미지 업로드</label
              >
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="주소"
                v-model="placedata.addr"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              닫기
            </button>
            <button type="button" class="btn btn-primary" @click="updatePlace">
              수정 완료
            </button>
          </div>
        </div>
      </div>
    </div>
    {{ placedata }}
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();

const placedata = ref({
  name: null,
  addr: null,
  rating: null,
  review: null,
  recomm: null,
  image: null,
});

onMounted(() => {
  const index = route.params.index;
  const place = store.state.placeData[index];
  if (place) {
    placedata.value = { ...place };
  }
});

const updatePlace = () => {
  const index = route.params.index;
  store.commit("updatePlace", { index, updatedPlace: placedata.value });
  store.commit("updateMapAddress", placedata.value.addr);
  router.push({ name: "post" });
};

const handleImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    placedata.value.image = URL.createObjectURL(file);
  }
};
</script>

<style lang="scss" scoped></style>
