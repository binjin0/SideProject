import { connectDB } from "@/util/database";
export default async function handler(요청, 응답) {
  console.log(요청.query);
  return 응답.status(200).json();
  // const client = await connectDB;
  // const db = client.db("forum");
  // let result = await db.collection("post").find().toArray();
  // if (요청.method === "POST") {
  //   return 응답.status(200).json(요청.body);
  // } else if (요청.method === "GET") {
  //   return 응답.status(200).json(result);
  // }
}
