// "use client";

// import { useEffect, useState } from "react";

// export default function Commnet(id) {
//   let [comment, setComment] = useState("");
//   let [data, setData] = useState([]);
//   //useEffect : html로드/재렌더링 될 때마다 실행됨, html보여준 후에 늦게 실행시작
//   useEffect(() => {
//     fetch("/api/comment/list?id=" + id.id)
//       .then((r) => r.json())
//       .then((result) => {
//         console.log("result", result);
//         setData(result);
//         //setData(result)보다 console.log(data)를 먼저실행하기때문에 여기서 console찍으면 아무것도 안나옴
//         // console.log(data);
//       });
//   }, []);

//   return (
//     <div>
//       <div>댓글목록</div>
//       {data.length > 0
//         ? data.map((d, i) => <div key={i}>{d.content}</div>)
//         : "댓글없음"}
//       <input
//         onChange={(e) => {
//           setComment(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           console.log(comment);

//           fetch("/api/post/chat", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ content: comment, parent: id.id }),
//           });
//         }}
//       >
//         댓글전송
//       </button>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

export default function Commnet(id) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);

  // useEffect : html로드/재렌더링 될 때마다 실행됨
  useEffect(() => {
    fetch("/api/comment/list?id=" + id.id)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const submitComment = () => {
    fetch("/api/post/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: comment, parent: id.id }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("댓글 전송 성공:", result);
        // 기존 댓글 목록에 새 댓글을 추가하여 즉시 갱신
        setData((prevData) => [...prevData, { content: comment }]);
        setComment(""); // 입력 필드 초기화
      })
      .catch((error) => console.log("댓글 전송 에러:", error));
  };

  return (
    <div>
      <div>댓글목록</div>
      {data.length > 0
        ? data.map((d, i) => <div key={i}>{d.content}</div>)
        : "댓글없음"}
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={submitComment}>댓글전송</button>
    </div>
  );
}
