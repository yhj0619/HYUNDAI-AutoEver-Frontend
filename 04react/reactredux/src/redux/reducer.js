const initialData = {
  value: 10,
  title: "test",
};

//reducer는 중간값을 전달하는 역할로 생각 ㅇㅇ
const reducer = (state = initialData, action) => {
  console.log(state);
  console.log(action.type);
  if (action.type == "up") {
    return { ...state, value: state.value + action.payload };
  } else if (action.type == "down") {
    return { ...state, value: state.value - action.payload };
  }
  return state;
};

export default reducer;
