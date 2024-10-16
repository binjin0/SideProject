"use client";
import { useRouter } from "next/navigation";
export default function DetailLink() {
  let router = useRouter();
  console.log(router);
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      버튼
    </button>
  );
}
