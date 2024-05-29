import { posts } from "@/app/data/data";
import Post from "../../components/posts/post";

export default function Page({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  const title = post?.title;
  const paragraphs = post?.paragraphs;
  return <Post title={title} paragraphs={paragraphs} />;
}
