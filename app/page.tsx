import Link from "next/link";
import { posts } from "./data/data";

export default function Page() {
  const listItems = Object.keys(posts).map((slug) => {
    return (
      <li
        key={slug}
        className="underline underline-offset-1 hover:text-blue-600"
      >
        <Link href={`/post/${slug}`}>{posts[slug].title}</Link>
      </li>
    );
  });

  return (
    <div className="flex flex-col justify-start p-16 h-screen">
      <h1 className="text-3xl">Warden&apos;s Blog</h1>
      <ul className="mt-5 list-disc list-inside">{listItems}</ul>
    </div>
  );
}
