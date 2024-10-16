"use client";

import Link from "next/link";
export default function ListItem({ result }) {
  return (
    <div>
      {result.map((r) => (
        <div className="list-item" key={r._id}>
          <Link href={`/detail/${r._id}`}>
            <h4>{r.title}</h4>
          </Link>
          <p>{r.content}</p>
          <Link href={`/edit/${r._id}`}>
            <button>수정</button>
          </Link>
          <button
            //아무것도 안쓰면 GET 요청
            onClick={(e) => {
              // fetch("/api/delete", {
              //   method: "DELETE",
              //   body: `${r._id}`.toString(),
              // })
              //   .then((r) => {
              //     if (r.status == 200) {
              //       return r.json();
              //     } else {
              //       //서버가 에러코드전송시 실행할코드
              //     }
              //   })
              //   .then((result) => {
              //     //성공시 실행할코드
              //     e.target.parentElement.style.opacity = 0;
              //     setTimeout(() => {
              //       e.target.parentElement.style.display = "none";
              //     }, 1000);
              //   })
              //   .catch((error) => {
              //     //인터넷문제 등으로 실패시 실행할코드
              //     console.log(error);
              //   });

              // fetch("api/test?name=kim&age=20");
              fetch("api/abc/kim");
            }}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}
