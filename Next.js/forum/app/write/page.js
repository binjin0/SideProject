export default function Write() {
  /*
  if(유저세션출력해서 아무것도 없으면){
  return <div>로그인하세요</div>
  }else{
  return 아래 html
  }
  */
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="api/post/new" method="POST">
        <input type="text" name="title" placeholder="글제목" />
        <input name="content" placeholder="글내용" />
        <button type="submit">작성</button>
      </form>
    </div>
  );
}
//  기능정리
// 1. html / css작성 -> 글을 작성하는 UI만들기
// 2. 적은 것 서버로 글 보내기
// 3. 서버가 DB로 보내기
