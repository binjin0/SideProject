import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";
export default async function Chat(요청, 응답) {
  console.log(요청.body.content);
  // const { content, parent } = 요청.body;
  let session = await getServerSession(요청, 응답, authOptions);
  let data = {
    content: 요청.body.content,
    parent: new ObjectId(요청.body.parent),
    author: session.user.email,
  };
  if (session) {
    if (요청.method === "POST") {
      let db = (await connectDB).db("forum");
      await db.collection("comment").insertOne(data);
      응답.status(200).json("성공");
    }
  }
}
