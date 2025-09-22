import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, category, title, link }) => {
  return (
    <div 
      className="overflow-hidden group xl:mb-14 lg:mb-12 mb-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <a
        href={image}
        className="imgc overflow-hidden lg:mb-8 mb-5 block w-full cursor-pointer"
      >
        <img
          src={image}
          alt={title}
          className="w-full overflow-hidden duration-500 rounded-lg group-hover:scale-105"
        />
      </a>
      <div className="content flex items-center justify-between gap-1">
        <a href={link} className="left__cont">
          <span className="text-clr_base xl:mb-4 mb-2 block uppercase xl:text-lg text-base">
            {category}
          </span>
          <h3 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-white">
            {title}
          </h3>
        </a>
        <a
          href={image}
          className="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer"
        >
          <i className="bi-arrow-up-right duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"></i>
        </a>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/projects/')
      .then(response => {
        // Backend'den gelen projeleri dinamik olarak ayarlıyoruz
        setProjects(response.data);
      })
      .catch(error => {
        console.error('API Hatası:', error);
      });
  }, []);

  return (
    <section className="pt-28 pb-28" id="projects">
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        {/* Heading */}
        <div className="text-center max-w-[920px] mx-auto md:mb-14 sm:mb-12 mb-10">
          <p
            className="text-2xl font-caveat text-clr_base relative flex justify-center items-center sm:gap-6 gap-4 mx-auto mb-8"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
            Complete Project
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
          </p>
          <h2
            className="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white lg:leading-[120%] md:leading-tight leading-9"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Look At My Portfolio And Give Me Your Feedback
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="md:columns-2 col-span-1 xxl:gap-14 lg:gap-12 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={`http://localhost:8000${project.image}`}
              category={project.category}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>

        {/* Circle Box */}
        <div className="mt-24 flex justify-center">
          <a
            href="#"
            className="md:w-52 md:h-52 w-32 h-32 bg-clr_base rounded-full flex justify-center items-center text-center relative before:w-full before:h-full before:rounded-full before:border before:border-clr_base before:content-[''] before:absolute before:top-[10px] before:-left-[7px] before:duration-500 hover:before:-top-[10px]"
            data-aos="zoom-out-down"
            data-aos-duration="2000"
          >
            <span className="relative z-10">
              <i className="bi-arrow-right mb-[1px] md:text-[28px] text-base text-center flex justify-center text-clr_title transition-all"></i>
              <span className="text-[#282828] md:text-lg text-sm font-medium leading-[30px] capitalize transition-all">
                Click More Work
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
