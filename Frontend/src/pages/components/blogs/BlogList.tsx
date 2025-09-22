import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";

interface BlogCardProps {
  image: string;
  slug:string;
  date: string;
  title: string;
  description: string;
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/blog/posts/")
      .then((response) => {
        const data = response.data.map((post: any) => ({
          image: post.image || "/assets/img/blog/default.png", // Eğer API'de image alanı varsa
          date: new Date(post.published_at).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          title: post.title,
          description: post.excerpt || post.content?.substring(0, 100) + "..."
        }));
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Bloglar alınırken hata oluştu:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <>
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </>
  );
};

export default BlogList;
