import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <h4>글수정</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} placeholder="글제목" />
        <input
          name="content"
          defaultValue={result.content}
          placeholder="글내용"
        />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">작성</button>
      </form>
    </div>
  );
}
