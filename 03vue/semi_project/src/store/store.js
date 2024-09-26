import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        userid: "hanyong5",
        password: "123",
        username: "홍길동",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
      {
        userid: "ttomi",
        password: "123",
        username: "김유신",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
      {
        userid: "test",
        password: "123",
        username: "강감찬",
        addr: "서울",
        image: "https://picsum.photos/100",
      },
    ],

    placeData: [
      {
        name: "포폴로피자",
        addr: "경기 고양시 일산동구 정발산로 43-20 센트럴플라자 102호, 103호",
        rating: "5",
        review: "맛있어요",
        recomm: "추천",
        image: "https://picsum.photos/100",
      },
      {
        name: "일산칼국수",
        addr: "경기 고양시 일산동구 백석로108번길 6-16",
        rating: "4",
        review: "맛없었어요",
        recomm: "추천",
        image: "https://picsum.photos/100",
      },
      {
        name: "만돈",
        addr: "경기 고양시 일산동구 정발산로 24 웨스턴돔 B동 2층 225호",
        rating: "3",
        review: "보통이에요",
        recomm: "추천",
        image: "https://picsum.photos/100",
      },
      {
        name: "윤몽 일산밤리단길본점",
        addr: "경기 고양시 일산동구 대산로31번길 5-16 1층",
        rating: "3",
        review: "보통이에요",
        recomm: "추천",
        image: "https://picsum.photos/100",
      },
      {
        name: "리차드하우스 연남",
        addr: "서울 마포구 동교로46길 36 1층",
        rating: "3",
        review: "보통이에요",
        recomm: "추천",
        image: "https://picsum.photos/100",
      },
    ],
    selectedAddress: null, // Store the address selected
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
    addPlace(state, payload) {
      state.placeData.push(payload);
    },

    deletePlace(state, index) {
      state.placeData.splice(index, 1);
    },
    updatePlace(state, { index, updatedPlace }) {
      state.placeData.splice(index, 1, updatedPlace);
    },
    updateMapAddress(state, addr) {
      state.selectedAddress = addr; // New mutation for updating the selected address
    },
  },
});
