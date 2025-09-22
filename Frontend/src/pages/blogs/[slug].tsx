"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/layout/Header";
import RightSide from "../components/blogs/RightSide";
import Categories from "../components/blogs/Categories";
import RecentPosts from "../components/blogs/RecentPosts";
import Tags from "../components/blogs/Tags";
import Footer from "../components/layout/Footer";

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
  image:string;
  content: string;
  excerpt: string;
  author: Author;
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
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init({ duration: 1000, once: true });
    }
  }, []);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://127.0.0.1:8000/api/blog/posts/${slug}/`);
        if (!res.ok) throw new Error("Post fetch failed");
        const data: Post = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Post couldn't be fetched", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <div className="text-white text-center p-10">Yükleniyor...</div>;
  if (!post) return <div className="text-white text-center p-10">Gönderi bulunamadı.</div>;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="shortcut icon" href="/assets/img/logo/favicon.png" />
      </Head>

      <Header />

      {/* Page heading */}
      <div className="xl:max-w-[1350px] mx-auto px-3 pt_120 pb_120 text-center">
        <h1 className="lg:text-6xl text-white font-bold mb-6">{post.title}</h1>
        <ul className="flex items-center justify-center gap-3 text-2xl font-caveat">
          <li>
            <Link href="/" className="text-white">Home</Link>
          </li>
          <li className="text-white">/</li>
          <li className="text-clr_base">{post.title}</li>
        </ul>
      </div>

      {/* Blog content */}
      <section className="pb_120">
        <div className="xl:max-w-[1350px] mx-auto px-3 grid lg:grid-cols-[66.66%_auto] gap-6">
          <div>
            {post.excerpt && (
              <p className="text-clr_pra text-base mb-5 italic">{post.excerpt}</p>
            )}

            {/* Eğer post.image varsa, göster */}
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={500}
                className="w-full mb-8"
                unoptimized
              />
            )}

            <span className="text-lg text-white block mb-5">
              By: {post.author.first_name} {post.author.last_name} /{" "}
              {new Date(post.published_at).toLocaleDateString("tr-TR")} / Category:{" "}
              <Link href={`/blogs/category/${post.category.slug}`} className="underline">
                {post.category.name}
              </Link>
            </span>

            <article className="text-clr_pra text-base mb-5 whitespace-pre-line">
              {post.content}
            </article>

            {/* Yorumlar */}
            <section className="mt-10">
              <h2 className="text-3xl font-bold text-white mb-6">Comments ({post.comments.length})</h2>
              {post.comments.length === 0 && <p className="text-white">Henüz yorum yok.</p>}
              {post.comments.map((comment) => (
                <div key={comment.id} className="mb-6 border-b border-gray-700 pb-4">
                  <p className="text-white font-semibold">
                    {comment.user.first_name} {comment.user.last_name} <span className="text-gray-400 text-sm">- {new Date(comment.created_at).toLocaleDateString("tr-TR")}</span>
                  </p>
                  <p className="text-clr_pra whitespace-pre-line">{comment.content}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Sidebar */}
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
