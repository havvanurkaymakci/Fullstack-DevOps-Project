import React, { useState, useEffect } from 'react';

// API'den veri çekmek için axios kullanacağız
import axios from 'axios';

// AOS tanımı
declare global {
  interface Window {
    AOS?: {
      init: (options?: any) => void;
      refresh: () => void;
    };
  }
}

// Tip tanımları
type ProjectCategory = 'all' | 'Kurumsal Web Sitesi Tasarımı' | 'E-Ticaret Platformu' | 'Mobil Bankacılık Uygulaması' | 'Mobil Sağlık Takip Uygulaması';

interface Project {
  id: number;
  categories: ProjectCategory[];
  image: string;
  type: string;
  title: string;
}

const Protfolios: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // AOS init
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({ once: false, mirror: true, duration: 1000 });
    }

    // API'den projeleri çek
    axios
      .get<Project[]>('http://127.0.0.1:8000/api/projects/')
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Projeler alınamadı:', error);
        setLoading(false);
      });
  }, []);

  // Filtreleme
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section className="pb_120">
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        <div>
          {/* Filtreleme Butonları */}
          <ul
            className="tablinks border border-clr_cusborder p-[10px] rounded-lg max-w-[683px] mx-auto md:mb-[60px] mb-10 flex items-center md:flex-nowrap flex-wrap md:justify-normal justify-center md:gap-0 gap-[5px]"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            {['all', 'Kurumsal Web Sitesi Tasarımı', 'E-Ticaret Platformu', 'Mobil Bankacılık Uygulaması', 'Mobil Sağlık Takip Uygulaması'].map((filter) => (
              <li key={filter} className="nav-links md:border-t-0 md:border-b-0 md:border-l-0 border border-clr_cusborder md:border-r md:border-r-clr_cusborder md:last:border-r-0">
                <button
                  onClick={() => setActiveFilter(filter as ProjectCategory)}
                  className={`tablink border-none text-center md:inline-block block text-lg md:py-4 md:px-6 py-[11px] px-5 rounded-[5px] ${
                    activeFilter === filter ? 'bg-clr_base text-clr_title' : 'text-clr_pra'
                  }`}
                >
                  {filter.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </button>
              </li>
            ))}
          </ul>

          {/* Proje Kartları */}
          {loading ? (
            <p className="text-center text-white">Projeler yükleniyor...</p>
          ) : (
            <div className="md:columns-2 col-span-1 xxl:gap-[58px] lg:gap-12 md:gap-[30px]">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`project__item overflow-hidden group ${
                    project.id !== 3 && project.id !== 6 ? 'xl:mb-[60px] lg:mb-[50px] mb-[30px]' : ''
                  }`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <a
                    href={project.image}
                    className="imgc overflow-hidden lg:mb-[30px] mb-[20px] block w-full cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full overflow-hidden duration-500 rounded-[10px] group-hover:scale-105"
                    />
                  </a>
                  <div className="content flex items-center justify-between gap-1">
                    <a href="./ProtfolioDetails.tsx" className="left__cont">
                      <span className="text-clr_base xl:mb-4 mb-2 block uppercase xl:text-lg text-base">
                        {project.type}
                      </span>
                      <h3 className="xl:text-[30px] sm:text-2xl text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </a>
                    <a
                      href={project.image}
                      className="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer"
                    >
                      <i className="bi-arrow-up-right icon duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Protfolios;
