"use client";

import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, 수량변경] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((p, i) => (
        <div className="food" key={i}>
          <img src={`/food${i}.png`} className="food-img" />
          <h4>{p} $40</h4>
          <button
            onClick={() => {
              let copy1 = [...수량];
              copy1[i]--;
              수량변경(copy1);
            }}
          >
            -
          </button>
          <span> {수량[i]} </span>
          <button
            onClick={() => {
              let copy = [...수량];
              copy[i]++;
              수량변경(copy);
            }}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}
// export default function List() {
//   let 상품 = ["Tomatoes", "Pasta", "Coconut"];
//   let [수량, 수량변경] = useState([0, 0, 0]);
//   return (
//     <div>
//       <h4 className="title">상품목록</h4>
//       <span>{수량[0]}</span>
//       <button
//         onClick={() => {
//           let copy = [...수량];
//           copy[0]++;
//           수량변경(copy);
//         }}
//       >
//         +
//       </button>
//       <span>{수량[1]}</span>
//       <button>+</button> <span>{수량[2]}</span>
//       <button>+</button>
//     </div>
//   );
// }
