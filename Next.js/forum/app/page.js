import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

//db입출력 코드는 server component안에서만 쓰자.
export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray(); //db에 있는 모든 것 가져오기
  console.log(result);
  return <div>ss</div>;
}
