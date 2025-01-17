import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Commnet from "./Comment";
import { notFound } from "next/navigation";
export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) }); //db에 있는 것 중 title이 안녕인 것 가져오기
  console.log(props);
  if (result === null) {
    return notFound();
  }
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Commnet id={props.params.id} />
    </div>
  );
}
