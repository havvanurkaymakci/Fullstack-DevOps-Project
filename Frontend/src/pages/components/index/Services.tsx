import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, category, title, description, link }) => {
  return (
    <div
      className="lg:pb-10 pb-[30px] lg:pt-10 pt-[30px] flex justify-between items-center sm:gap-[14px] gap-5 sm:flex-nowrap flex-wrap border-b duration-500 border-b-[rgb(38_37_37)] first:border-t first:border-t-[rgb(38_37_37)] hover:border-b-clr_base hover:first:border-t-clr_base group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="w-full flex items-center justify-between md:flex-nowrap flex-wrap md:gap-[14px] gap-2">
        <div className="flex lg:gap-[60px] gap-[16px]">
          <span className="text-xl text-white">{number}</span>
          <div className="cont">
            <h5 className="text-base lg:text-xl font-semibold text-white mb-2">{category}</h5>
            <h2 className="text-[26px] xl:text-[40px] lg:text-3xl font-semibold lg:leading-[120%]">
              <a href={link} className="text-white duration-500">{title}</a>
            </h2>
          </div>
        </div>
        <p className="text-clr_pra text-base lg:w-[400px] w-[300px]">
          {description}
        </p>
      </div>

      <a
        href={link}
        className="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer"
      >
        <ArrowUpRight className="duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white" />
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceCardProps[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/services/') // veya senin endpointin
      .then((res) => {
        const fetchedServices = res.data.map((item: any, index: number) => ({
          number: `0${index + 1}`,
          category: "Service", // veya eklersen backend'den
          title: item.title,
          description: item.description,
          link: "./serviceDetails.html" // sabit ya da item.link varsa
        }));
        setServices(fetchedServices);
      })
      .catch((err) => {
        console.error("Hizmetler alınamadı:", err);
      });
  }, []);

  return (
    <section id="services" className="pt_120 pb_120">
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        <div className="text-center max-w-[920px] mx-auto md:mb-[60px] sm:mb-[50px] mb-[45px]">
          <p className="text-2xl font-caveat text-clr_base relative flex justify-center items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]" data-aos="fade-down" data-aos-duration="1000">
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
            Services That I Provide
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
          </p>
          <h2 className="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white lg:leading-[120%] md:leading-tight leading-9" data-aos="fade-up" data-aos-duration="1200">
            My Special Service For Your Business Development
          </h2>
        </div>

        <div>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
