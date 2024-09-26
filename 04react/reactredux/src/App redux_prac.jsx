// import React from "react";
// import { Provider, useSelector } from "react-redux";
// import { createStore } from "redux";

// const initialData = {
//   value: 10,
//   title: "test",
// };

// const reducer = (state = initialData, action) => {
//   switch (action.type) {
//     case "up":
//       return { ...state, value: state.value + action.payload };
//     case "down":
//       return { ...state, value: state.value - action.payload };
//   }
//   return state;
// };

// const store = createStore(reducer);

// function App() {
//   return (
//     // Provider : 앱의 모든 하위 컴포넌트들이 store에 접근할 수 있도록 store를 context로 제공하는 역할을 함.
//     <Provider store={store}>
//       <div>App</div>
//     </Provider>
//   );
// }

// function Counter() {
//   // useSelector : redux store로부터 원하는 상태를 추출. store의 특정 부분만을 선택하여 컴포넌트에서 사용.
//   // useSelector((state)=>state.someSlice)
//   // (redux store의 전체 상태) => redux store에서 가져오고 싶은 상태의 부분
//   const counterValue = useSelector((state) => state.value);
//   const titleValue =useSelector((state) =)
// }
// export default App;
