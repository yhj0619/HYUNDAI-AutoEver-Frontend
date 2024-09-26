<template>
  <div class="container">
    <div class="row">
      <div
        v-for="(item, i) in $store.state.placeData"
        :key="i"
        class="col-lg-3 col-md-4 col-sm-12 mb-3"
      >
        <div class="card h-100">
          <img :src="item.image" class="card-img-top img-margin" alt="" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <i class="fa-solid fa-map-pin"></i> {{ item.name }}
            </h5>
            <p class="card-text">{{ item.addr }}</p>
            <p class="card-text">{{ item.rating }}점</p>
            <button class="btn btn-primary mt-auto" @click="openModal(i)">
              상세보기
            </button>
            <br />
            <button class="btn btn-danger mt-auto" @click="deletePlace(i)">
              삭제하기
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="editModal"
      tabindex="-1"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
      ref="editModal"
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
                v-model="editPlaceData.name"
              />
            </div>

            <div class="mb-3">
              별점
              <select class="form-control" v-model="editPlaceData.rating">
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
                v-model="editPlaceData.review"
                rows="5"
              ></textarea>
            </div>

            <div class="mb-3">
              추천하시겠습니까?
              <select class="form-control" v-model="editPlaceData.recomm">
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
                v-model="editPlaceData.addr"
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
            <button type="button" class="btn btn-primary" @click="saveChanges">
              수정 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

// 상태 및 Vuex 스토어 가져오기
const store = useStore();
const router = useRouter();

// 수정할 데이터를 임시로 저장하는 변수
const editPlaceData = ref({});

// 모달을 열기 위한 Bootstrap 인스턴스 참조
const editModal = ref(null);

// 모달 열기 함수
const openModal = (index) => {
  // 선택한 데이터를 임시 저장
  editPlaceData.value = { ...store.state.placeData[index], index };

  // Bootstrap 모달 열기
  const modal = new bootstrap.Modal(editModal.value);
  modal.show();
};

// 수정 사항 저장 함수
const saveChanges = () => {
  // Vuex에 변경 사항 저장
  store.commit("updatePlace", {
    index: editPlaceData.value.index,
    updatedPlace: { ...editPlaceData.value },
  });

  // 모달 닫기
  const modal = bootstrap.Modal.getInstance(editModal.value);
  modal.hide();
};

// 이미지 업로드 처리 함수
const handleImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    editPlaceData.value.image = URL.createObjectURL(file);
  }
};

// 삭제 기능
const deletePlace = (index) => {
  if (window.confirm("정말로 이 맛집을 삭제하시겠습니까?")) {
    store.commit("deletePlace", index);
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 100%; /* 모든 카드가 동일한 높이를 갖도록 설정 */
}

.card-img-top {
  object-fit: cover;
}
</style>
