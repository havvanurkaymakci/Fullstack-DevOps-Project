import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/layout/Header";
import RightSide from "./components/blogs/RightSide";
import Categories from "./components/blogs/Categories";
import RecentPosts from "./components/blogs/RecentPosts";
import Tags from "./components/blogs/Tags";
import Footer from "./components/layout/Footer";

interface Author {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
}

interface Comment {
  id: number;
  user: Author;
  content: string;
  created_at: string;
}

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: Author;
  image:string;
  category: {
    id: number;
    name: string;
    slug: string;
    description: string;
  };
  tags: string[];
  created_at: string;
  updated_at: string;
  published_at: string;
  comments: Comment[];
}

const BlogDetails = () => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/blog/posts/is-dunyasinda-basari-5-sirri/");
        if (!res.ok) throw new Error("Blog yüklenemedi");
        const data: Post = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Hata:", error);
      }
    };

    fetchPost();
  }, []);

  if (!post) return <div className="text-white text-center p-10">Yükleniyor...</div>;

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Header />

      <div className="xl:max-w-[1350px] mx-auto px-3 pt_120 pb_120 text-center">
        <h1 className="lg:text-6xl text-white font-bold mb-6">{post.title}</h1>
        <ul className="flex items-center justify-center gap-3 text-2xl font-caveat">
          <li><Link href="/" className="text-white">Home</Link></li>
          <li className="text-white">/</li>
          <li className="text-clr_base">{post.title}</li>
        </ul>
      </div>

      <section className="pb_120">
        <div className="xl:max-w-[1350px] mx-auto px-3 grid lg:grid-cols-[66.66%_auto] gap-6">
          <div>
            <Image
              src={post.image}
              alt="post-image"
              width={800}
              height={500}
              className="w-full mb-8"
              unoptimized
            />
            <span className="text-lg text-white block mb-5">
              By: {post.author.username} / {new Date(post.published_at).toLocaleDateString("tr-TR")} / Yorum: {post.comments.length}
            </span>
            <p className="text-clr_pra text-base mb-5 whitespace-pre-line">{post.content}</p>
            <div className="mt-10">
  <h2 className="text-2xl text-white font-semibold mb-4">Yorumlar</h2>
  {post.comments.length > 0 ? (
    <ul className="space-y-4">
      {post.comments.map((comment) => (
        <li key={comment.id} className="bg-gray-800 p-4 rounded-lg text-white">
          <div className="font-semibold">{comment.user.first_name || comment.user.username}</div>
          <div className="text-sm text-gray-400">{new Date(comment.created_at).toLocaleDateString("tr-TR")}</div>
          <p className="mt-2">{comment.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-400">Henüz yorum yapılmamış.</p>
  )}
</div>

          </div>

          <div>
            <RightSide />
            <Categories />
            <RecentPosts />
            <Tags />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetails;
