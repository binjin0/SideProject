/*
버튼 0 누르면
- 모든 버튼에 붙은 orage 클래스명 제거
- 버튼 0에 orange 클래스명 추가
- 모든 div에 붙은 show클래스명 제거
- div0에 show 클래스명 추가
*/

// $(".tab-button")
//   .eq(0)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(0).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(0).addClass("show");
//   });
// $(".tab-button")
//   .eq(1)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(1).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(1).addClass("show");
//   });
// $(".tab-button")
//   .eq(2)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(2).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(2).addClass("show");
//   });

//반복문 안에 변수를 넣을 때는 let으로!
/**
 * why?
 *변수의 범위의 차이 때문에
 */
var x = document.getElementsByClassName("tab-button").length;
console.log(x);
//방법1
// for (let i = 0; i < x; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       탭열기(i);
//     });
// }

//방법2 / 이벤트리스너 1개만 쓰기. (이벤트리스너 많이 사용할수록 RAM 공간 차지함 )
/*$(".list").click(function (e) {
  //지금 누른게 버튼 0이면 탭열기(0) ....
  if (e.target == document.querySelectorAll(".tab-button")[0]) {
    탭열기(0);
  }
  if (e.target == document.querySelectorAll(".tab-button")[1]) {
    탭열기(1);
  }
  if (e.target == document.querySelectorAll(".tab-button")[2]) {
    탭열기(2);
  }
});
*/
//방법2 좀더 간단하게
/**
 hrml태그에 몰래 정보 숨기기 가능
 data-작명="값"
 출력할때 검사에서 console 탭에서 documnet.querySelector('.tab-button').dataset.id 라고 하면 그 지정한 값이 출력된다.
 */

$(".list").click(function (e) {
  // 탭열기(지금 누른버튼에 숨겨져 있는 data-id)
  탭열기(e.target.dataset.id);
  console.log(e.target.dataset.id);
});
function 탭열기(구멍) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(구멍).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(구멍).addClass("show");
}
