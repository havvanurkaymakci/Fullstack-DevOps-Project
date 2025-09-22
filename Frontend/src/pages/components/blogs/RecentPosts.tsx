import React, { useEffect, useState } from 'react';
import { Clock } from 'react-feather';

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
}

const RecentPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/blog/posts/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Eğer API pagination destekliyorsa data.results olabilir
        const postsData = Array.isArray(data) ? data : data.results;
        setPosts(postsData);
        setLoading(false);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="scope__item xl:mb-[60px] mb-10">
      <h4 className="scope__title text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
        Recent Post
      </h4>

      {loading && <p className="text-clr_pra">Loading recent posts...</p>}
      {error && <p className="text-clr_pra">Error loading posts: {error}</p>}

      {!loading && !error && (
        <ul className="recent__post">
          {posts.map((post) => (
            <li className="mb-[30px] last:mb-0" key={post.id}>
              <a
                href={`/post/${post.slug}`}
                className="recent__innter flex items-center flex-wrap xl:flex-nowrap xl:gap-5 gap-[10px]"
              >
                {/* Görsel olmadığı için örnek/resim ekleniyor */}
                <img
                  src="/assets/img/blog/bsmall1.png" // Yer tutucu görsel
                  alt="blog thumbnail"
                  className="w-[80px] h-[80px] object-cover rounded-[6px]"
                />
                <div className="cont__box">
                  <span className="retitle text-white text-xl font-medium mb-[14px] block capitalize">
                    {post.title}
                  </span>
                  <span className="text-clr_base text-base flex items-center gap-2">
                    <Clock size={16} />
                    {new Date(post.published_at).toLocaleDateString()}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentPosts;
