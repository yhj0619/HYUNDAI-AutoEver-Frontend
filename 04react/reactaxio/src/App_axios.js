import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const listCnt = 10; // 한 페이지에 표시할 항목 수
  const pagerCnt = 5; // 페이지 번호를 한 번에 보여줄 수
  const [data, setData] = useState([]); // 현재 페이지의 데이터//data는 배열 형태로 초기화
  const [totalpage, setTotalpage] = useState(1); // 전체 페이지 수
  const [currentpage, setCurrentpage] = useState(1); // 현재 페이지 번호

  //component가 리렌더링될 때마다 상태를 유지하고 싶을 때 useState 사용.
  //just 변수에 값을 할당하면, 리랜더링 시 초기화 됨.
  //상태관리, 리랜더링 시 상태를 유지하기 위한 내장 훅인 useState를 사용
  // const [상태, 상태를 업데이트할 수 있는 함수 제공]

  const api = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setData(res.data);
      console.log("totaldata : " + res.data.length);
      console.log("totalpage : " + res.data.length / listCnt);

      setTotalpage(res.data.length / listCnt);
    });
  };

  // useEffect는 component가 마운트되거나 업데이트될 때, or 상태나 속성이 변경될 때 실행할 동작을 지정
  // useEffect(() => {
  //   // 실행할 코드 작성
  //   api();
  // }, []);

  /*
  userEffect((매개변수)=>{실행할 코드 작성},[의존성 배열]);
  컴포넌트 마운트 or 특정 의존성 배열 값이 변경될 때 콜백 함수 실행
  useEffect의 첫 번째 인수는 콜백 함수. 인자 필요 없음
  컴포넌트의 마운트, 업데이트, 의존성 배열의ㅣ 변화에 따라 실행
  만약 컴포넌트가 언마운트 될 때 정리 작업을 정해야 한다면, 정리 함수를 반활할 수 있음.
  
  두 번째 매개변수는 빈 의존성 배열 -> api()가 마운트될 때 한 번만 실행.
  만약, []없이 useEffcet사용하면, 매 렌더링마다 api()호출됨


  useEffect( () => {
    //실행할 코드 작성
    return() => {
    //정리 코드 작성  
    };
  }, []);
*/

  /* back api 활용하는 code */

  const api1 = (page) => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${listCnt}`
      )
      .then((res) => {
        setData(res.data);

        // x-tota-count는 jsonplaceholder API 서버에서 응답 헤더로 보내주는 값. 고정된 이름임!!!!!
        const totalItems = res.headers["x-total-count"]; // 전체 데이터 개수
        setTotalpage(Math.ceil(totalItems / listCnt)); // 전체 페이지 수 계산
      });
  };

  useEffect(() => {
    api(currentpage); // 처음 마운트될 때 현재 페이지 데이터 가져오기
  }, [currentpage]); // currentpage가 바뀔 때마다 API 호출

  const pageViewNumber = () => {
    const pageNumbers = [];
    const startPage = Math.floor(((currentpage - 1) / pagerCnt) * pagerCnt + 1);
    // const endPage = startPage + pagerCnt - 1;
    const endPage = Math.min(startPage + pagerCnt - 1, totalpage);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          onClick={() => {
            setCurrentpage(i);
          }}
          style={{
            cursor: "pointer",
            margin: "0 5px",
            color: currentpage === i ? "red" : "black",
          }}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  };

  const currentPageData = () => {
    const startIndex = (currentpage - 1) * listCnt;
    const endIndex = startIndex + listCnt;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      <div>totalPage:{totalpage}</div>
      {currentPageData().map((item, i) => {
        return (
          <div key={i}>
            {item.id}. {item.title}
          </div>
        );
      })}

      <div style={{ fontSize: "2em" }}>{pageViewNumber()}</div>
      <div>
        {currentpage > 1 && (
          <button
            onClick={() => {
              setCurrentpage(currentpage - 1);
            }}
          >
            이전
          </button>
        )}

        {currentpage < totalpage && (
          <button
            onClick={() => {
              setCurrentpage(currentpage + 1);
            }}
          >
            다음
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
