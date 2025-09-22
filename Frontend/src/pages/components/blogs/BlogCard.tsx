import React from "react";

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, date, title, description }) => {
  return (
    <div className="xl:mb-[50px] mb-[30px] group" data-aos="fade-up" data-aos-duration="1000">
      <a href="#" className="overflow-hidden block">
        <img
          src={image}
          alt="img"
          className="w-full overflow-hidden duration-500 group-hover:scale-105"
        />
      </a>
      <div className="content w-[90%] bg-clr_body rounded-tr-lg py-[30px] pr-[14px] pl-5 -translate-y-[70px] -mb-[70px]">
        <span className="bdate flex items-center gap-1 text-clr_pra text-base mb-[30px]">
          <span className="uppercase text-white">NEWS</span>. {date}
        </span>
        <h3 className="border-b border-b-clr_cusborder pb-[30px] mb-[30px] text-4xl font-semibold capitalize">
          <a href="#" className="text-white duration-500 group-hover:text-clr_base">
            {title}
          </a>
        </h3>
        <p className="text-clr_pra text-base mb-[30px]">{description}</p>
        <a
          href="#"
          className="max-w-[200px] flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%] capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
        >
          <span className="z-10 relative duration-500">Read More</span>
          <i className="bi-arrow-right z-10 relative duration-500"></i>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
