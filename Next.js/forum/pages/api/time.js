export default function handler(요청, 응답) {
  const currentDate = new Date();
  console.log(currentDate);
  if (요청.method === "GET") {
    return 응답.status(200).json(currentDate);
  }
}
