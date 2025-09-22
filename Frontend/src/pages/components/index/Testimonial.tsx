import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "swiper/css";


// Tip tanımlaması
interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  image: string;  // Backend'den gelen image URL'si
  rating: number;
}

const Testimonial: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Verileri backend'den almak için useEffect
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/testimonials/"); // Backend API URL
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Veri alınırken bir hata oluştu:", error);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="overflow-hidden pt_120 pb_120" id="testimonial">
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        {/* --------- Heading */}
        <div className="text-center md:mb-[60px] sm:mb-[50px] mb-[45px] max-w-[920px] mx-auto">
          <span
            className="text-2xl font-caveat text-clr_base relative flex justify-center items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
            <span>Testimonial</span>
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
          </span>
          <h2
            className="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white lg:leading-[120%] md:leading-tight leading-9"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Happy Words From Happy Customer
          </h2>
        </div>

        {/* --------- Testimonial Content */}
        <div
          className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden lg:py-[130px] lg:px-[60px] md:py-[100px] md:px-[30px] sm:py-4 px-0 py-[10px] relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="lg:max-w-[66%] w-auto mx-auto">
            <div className="swiper testimonial__slidewrap sm:mr-[10px] sm:ml-[30px] mr-0 ml-0">
              <div className="swiper-wrapper">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="swiper-slide relative">
                    <div className="flex lg:mb-10 mb-8 items-center gap-2">
                      {/* Rating Yıldızları */}
                      {Array(testimonial.rating)
                        .fill(null)
                        .map((_, starIdx) => (
                          <i
                            key={starIdx}
                            className="bi-star text-clr_ratting text-xl"
                          ></i>
                        ))}
                    </div>
                    <i className="sm:text-xl text-base text-clr_white sm:mb-10 mb-5 block">
                      {testimonial.content}
                    </i>
                    <h4 className="text-clr_base mb-2 font-semibold text-2xl leading-[130%]">
                      {testimonial.name}
                    </h4>
                    <span className="text-lg text-clr_pra">{testimonial.position}</span>
                    <div className="mt-3">
                      <img
                        src={testimonial.image} // Backend'den gelen image URL'si
                        alt={testimonial.name}
                        className="w-[50px] h-[50px] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination3"></div>
            </div>
          </div>

          {/* Decorative Images */}
          <div className="absolute top-[99px] xl:left-[291px] lg:left-60 lg:block hidden">
            <img src="/assets/img/testimonial/quote.png" alt="img" />
          </div>
          <div className="absolute top-5 left-5 opacity-10 lg:opacity-100 w-[60px] sm:w-auto">
            <img src="/assets/img/testimonial/man1.png" alt="img" />
          </div>
          <div className="absolute left-5 bottom-5 opacity-10 lg:opacity-100 w-[60px] sm:w-auto">
            <img src="/assets/img/testimonial/man3.png" alt="img" />
          </div>
          <div className="absolute top-5 right-5 opacity-10 lg:opacity-100 w-[60px] sm:w-auto">
            <img src="/assets/img/testimonial/man2.png" alt="img" />
          </div>
          <div className="absolute lg:bottom-[50px] lg:right-[50px] bottom-[15px] right-[15px] sm:block hidden animate-cir5">
            <img src="/assets/img/testimonial/testi-arrow.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
