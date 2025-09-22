import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'react-feather';

// Define TypeScript interface for Category based on your backend model
interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

interface CategoriesProps {
  className?: string; // Dışarıdan özel sınıf ekleyebilmek için
}

const Categories: React.FC<CategoriesProps> = ({ className = '' }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/blog/categories/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json() as Category[];
        setCategories(data);
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

    fetchCategories();
  }, []);

  const baseClasses = "scope__item xl:mb-[60px] mb-10 position-relative";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  if (loading) return (
    <div className={combinedClasses}>
      <h4 className="scope__title text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
        Categories
      </h4>
      <p className="text-clr_pra">Loading categories...</p>
    </div>
  );

  if (error) return (
    <div className={combinedClasses}>
      <h4 className="scope__title text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
        Categories
      </h4>
      <p className="text-clr_pra">Error loading categories: {error}</p>
    </div>
  );

  return (
    <div className={combinedClasses}>
      <h4 className="scope__title text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
        Categories
      </h4>
      <ul className="category">
        {categories.map((category) => (
          <li className="duration-500 group mb-6 last:mb-0" key={category.id}>
            <a href={`/category/${category.slug}`} className="flex items-center justify-between duration-500">
              <span className="text-clr_pra text-lg">{category.name}</span>
              <span className="arrow duration-500 w-6 h-6 bg-clr_base group-hover:bg-white flex justify-center items-center rounded-[5px]">
                <ChevronRight className="text-[11px] group-hover:text-clr_title" size={14} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;