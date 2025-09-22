import React, { useEffect, useState } from 'react';

// Tag arayüzü
interface Tag {
  id: number;
  name: string;
  slug: string;
}

const Tags: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/blog/tags/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json() as Tag[];
        setTags(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return (
    <div className="scope__item">
      <h4 className="scope__title text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
        Tag
      </h4>

      {loading && <p className="text-clr_pra">Loading tags...</p>}
      {error && <p className="text-clr_pra">Error loading tags: {error}</p>}

      {!loading && !error && (
        <ul className="tags flex flex-wrap gap-3">
          {tags.map((tag) => (
            <li key={tag.id}>
              <a
                href={`/tag/${tag.slug}`}
                className="border border-clr_cusborder py-3 px-5 text-sm uppercase text-clr_pra inline-block duration-500 rounded-[10px] hover:bg-clr_base hover:text-clr_title"
              >
                {tag.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tags;
