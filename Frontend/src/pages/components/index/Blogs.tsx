"use client";

import React, { useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  published_at: string;
  excerpt: string;
  slug: string;
}

const Blogs: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/blog/posts/");
        const data = await res.json();
        setBlogPosts(data);
      } catch (err) {
        console.error("Blog verileri alınamadı:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="bg-common_bg bg-no-repeat bg-cover bg-center overflow-hidden pt_120 pb_120" id="blog">
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        <div className="grid xl:grid-cols-[33%_auto] lg:grid-cols-[28%_auto] grid-cols-1 gap-12">
          
          {/* Left Side */}
          <div>
            {/* Heading */}
            <div className="pb-[50px]">
              <span
                className="text-2xl font-caveat text-clr_base relative flex items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
                My Blogs
              </span>
              <h2
                className="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white max-w-[620px]"
                data-aos="fade-down"
                data-aos-duration="1600"
              >
                Recent Posts
              </h2>
            </div>

            {/* Call to Action */}
            <div>
              <a
                href="/blogs"
                className="md:w-52 md:h-52 w-32 h-32 bg-clr_base rounded-full flex justify-center items-center text-center relative before:w-full before:h-full before:rounded-full before:border before:border-clr_base before:content-[''] before:absolute before:top-[10px] before:-left-[7px] before:duration-500 hover:before:-top-[10px]"
                data-aos="zoom-out-down"
                data-aos-duration="2000"
              >
                <span className="relative z-10">
                  <i className="bi-arrow-right mb-[1px] md:text-[28px] text-base text-center flex justify-center text-clr_title transition-all" />
                  <span className="text-[#282828] md:text-lg text-sm font-medium leading-[30px] capitalize transition-all">
                    Click More Work
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Blog Cards */}
          <div>
            {blogPosts.map((post, index) => (
              <div key={post.id}>
                <div
                  className={`flex sm:flex-row flex-col justify-between items-center gap-4 lg:pb-10 pb-[30px] lg:pt-10 pt-[30px] group duration-500 border-b border-b-[rgb(38_37_37)] hover:border-b-clr_base ${
                    index === 0 ? "first:border-t first:border-t-[rgb(38_37_37)] hover:first:border-t-clr_base" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="shrink basis-4/5 flex md:flex-row flex-col justify-between md:items-center sm:items-start items-center gap-4">
                    <div className="shrink basis-1/2">
                      <div className="cont">
                        <span className="dates text-clr_pra text-base border border-clr_cusborder rounded-[100px] py-[7px] px-[15px] sm:mb-6 mb-[18px] inline-block">
                          {new Date(post.published_at).toLocaleDateString("tr-TR", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric"
                          })}
                        </span>
                        <h3 className="xl:text-3xl sm:text-[22px] text-xl text-white sm:leading-[44px] leading-8 font-semibold capitalize">
                          <a
                            href={`/blogs/${post.slug}`}
                            className="text-white duration-500 group-hover:text-clr_base"
                          >
                            {post.title}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <a
                      href={`/blogs/${post.slug}`}
                      className="imgc duration-500 md:opacity-0 opacity-100 group-hover:opacity-100"
                    >
                      <img
                        src={post.image || "/assets/img/blog/default.png"}
                        alt="blog-image"
                        className="max-w-[290px] h-[157px] object-cover cursor-pointer"
                      />
                    </a>
                  </div>
                  <a
                    href={`/blogs/${post.slug}`}
                    className="w-[60px] h-[60px] flex justify-center items-center bg-none rounded-full border border-white duration-500 group-hover:border-clr_base"
                  >
                    <i className="bi bi-eye text-white duration-500 group-hover:text-clr_base" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
