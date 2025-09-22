"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "./components/layout/Header";
import RightSide from "./components/blogs/RightSide";
import Categories from "./components/blogs/Categories";
import RecentPosts from "./components/blogs/RecentPosts";
import Tags from "./components/blogs/Tags";
import Footer from "./components/layout/Footer";
import Comment from "./components/blogs/comment";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  published_at: string;
  excerpt: string;
  slug: string;
}

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init({ duration: 1000, once: true });
    }

    const fetchPosts = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/blog/posts/");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Blog verileri alınamadı:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Matias - Blogs</title>
        <link rel="shortcut icon" href="/assets/img/logo/favicon.png" />
      </Head>

      <Header />

      {/* Page heading start */}
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3 pt_120 pb_120">
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="lg:text-6xl sm:text-4xl text-3xl text-white lg:mb-10 sm:mb-9 mb-6 font-bold">
              Blogs All
            </h1>
            <ul className="flex items-center justify-center sm:flex-nowrap flex-wrap gap-3">
              <li className="text-2xl font-caveat">
                <Link href="/" className="text-white">Home</Link>
              </li>
              <li className="text-white text-2xl">/</li>
              <li className="text-clr_base font-caveat text-2xl">Blogs All</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Page heading end */}

      {/* Main Content */}
      <section className="pb_120">
        <div className="xl:max-w-[1350px] mx-auto px-3 grid lg:grid-cols-[66.66%_auto] gap-6">
          {/* Left Side */}
          <div>
            {posts.map((post) => (
              <div
                key={post.id}
                className="xl:mb-[50px] mb-[30px] group"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <a href="#" className="overflow-hidden block">
                  <img
                    src={post.image}
                    alt="blog"
                    className="w-full overflow-hidden duration-500 group-hover:scale-105"
                  />
                </a>
                <div className="content w-[90%] bg-clr_body rounded-tr-lg py-[30px] pr-[14px] pl-5 -translate-y-[70px] -mb-[70px]">
                  <span className="bdate flex items-center gap-1 text-clr_pra text-base mb-[30px]">
                    <span className="uppercase text-white">NEWS</span>.{" "}
                    {new Date(post.published_at).toLocaleDateString("tr-TR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className="border-b border-b-clr_cusborder pb-[30px] mb-[30px] text-4xl font-semibold capitalize">
                    <a
                      href="#"
                      className="text-white duration-500 group-hover:text-clr_base"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-clr_pra text-base mb-[30px]">{post.excerpt}</p>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="max-w-[200px] flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%] capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
                  >
                    Read More
                    <i className="bi-arrow-right z-10 relative duration-500"></i>
                  </Link>

                  {/* 💬 Comment Component */}
                  <div className="mt-10 bg-[#1e1e1e] rounded-xl p-5 shadow-lg">
                    <Comment postId={post.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="sidebar">
            <RightSide />
          </div>
        </div>
      </section>

      <Categories />
      <RecentPosts />
      <Tags />
      <Footer />
    </>
  );
};

export default Blogs;
