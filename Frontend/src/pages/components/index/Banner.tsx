import React from "react";

const Banner = () => {
  return (
    <section id="home">
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        <div className="grid md:grid-cols-[70%_auto] gap-5">
          <div>
            <div className="banner__content xl:pt-[140px] xl:pb-[180px] lg:pt-[120px] lg:pb-[150px] md:pt-[90px] md:pb-[100px] sm:pt-[80px] sm:pb-[85px] py-[60px] xl:pl-10 pl-0">
              <a
                href=""
                className="bn__currently md:text-[24px] text-base leading-[140%] md:mb-[50px] mb-6 border-b border-b-clr_white text-clr_white inline-block pb-4 hover:text-clr_base hover:border-b-clr_base capitalize"
              >
                <span className="block"> Currently available for freelance </span>
                <span className="flex gap-4 items-center">
                  worldwide
                  <i className="">
                    <i className="bi bi-arrow-up-right"></i>
                  </i>
                </span>
              </a>
              <h1 className="lg:text-[100px] md:text-[60px] sm:text-[45px] text-[34px] font-semibold sm:mb-[50px] mb-[30px] leading-[120%]">
                <span className="hone text-clr_white"> Creative Visual</span>
                <span className="block designers" data-text="Designer">
                  Designer
                </span>
              </h1>
              <div className="flex items-center gap-6">
                <img
                  src="/assets/img/banner/bn-arrow.png"
                  className="vid__arrow animate-cir5"
                  alt="img"
                />
                <a
                  href="https://www.youtube.com/watch?v=zFuJgOiUEso&amp;ab_channel=SujithRajendran"
                  className="video__80 video-btn cursor-pointer relative xl:w-20 xl:h-20 sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] flex justify-center items-center rounded-full border border-clr_white before:absolute before:border-2 before:border-clr_white before:w-full before:h-full before:content:[''] before:rounded-full before:animate-scales"
                >
                  <i className="text-clr_white sm:text-[42px] text-[30px]">
                    <i className="bi bi-play-fill"></i>
                  </i>
                </a>
                <span className="proces sm:text-xl text-base text-clr_white w-[67px]">
                  Work Process
                </span>
              </div>
            </div>
          </div>
          <div>
            <div
              data-aos="fade-up-right"
              data-aos-duration="300"
              className="banner__thumb absolute xxl:left-[calc(50%--120px)] left-[calc(50%--80px)] bottom-0"
            >
              <img
                src="/assets/img/banner/banner-man.png"
                alt="man-img"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo hidden absolute -left-[40px] top-1/2 -translate-y-1/2 xl:grid gap-[220px]">
        <div className="left__infomobile rotate-90 flex items-center justify-center gap-[16px]">
          <a href="">
            <img
              src="/assets/img/banner/dial.png"
              alt="img"
              className="-rotate-90 w-4"
            />
          </a>
          <a href="" className="text-clr_white">
            (+02)-574-328-301
          </a>
        </div>
        <div className="right__infoscroll flex items-center justify-center gap-[50px] rotate-90 mb-[0px]">
          <a href="" className="scroll text-clr_pra uppercase text-[15px]">
            scroll down
          </a>
          <a href="" className="scroll__bar -rotate-90">
            <img
              src="/assets/img/banner/scroll-down.png"
              alt="img"
              className="w-5"
            />
          </a>
        </div>
      </div>
      <div className="banner__rightinfo hidden absolute right-0 top-[55%] -translate-y-1/2 xl:grid gap-[150px]">
        <div className="right__infoscroll flex items-center justify-center gap-[50px] rotate-90">
          <a href="" className="scroll text-clr_pra uppercase text-[15px]">
            Follow Me
          </a>
          <a href="" className="scroll__bar -rotate-90">
            <img
              src="/assets/img/banner/scroll-down.png"
              alt="img"
              className="w-5"
            />
          </a>
        </div>
        <div className="banner__xlsocial">
          <ul className="banner__soci grid justify-center lg:gap-[14px] gap-[10px]">
            <li>
              <a
                href=""
                className="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center"
              >
                <i className="bi bi-facebook text-white"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                className="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center"
              >
                <i className="bi bi-twitter text-white"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                className="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center"
              >
                <i className="bi bi-youtube text-white"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                className="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center"
              >
                <i className="bi bi-linkedin text-white"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                className="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center"
              >
                <i className="bi bi-instagram text-white"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
