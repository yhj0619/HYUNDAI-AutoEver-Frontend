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
        name: "백소정1",
        addr: "일산서구1",
        rating: "5",
        review: "맛있어요",
        recomm: "추천",
        image: "https://picsum.photos/100",
      },
      {
        name: "백소정2",
        addr: "일산서구2",
        rating: "4",
        review: "맛없었어요",
        recomm: "추천",
        image: "https://picsum.photos/100",
      },
      {
        name: "백소정3",
        addr: "일산서구3",
        rating: "3",
        review: "보통이에요",
        recomm: "추천",
        image: "https://picsum.photos/100",
      },
    ],
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
    addPlace(state, payload) {
      state.placeData.push(payload);
    },
  },
});
