import React from 'react';

const RelatedWorkSection: React.FC = () => {
  return (
    <>
      {/* --------- Related Work start */}
      <section className="bg-common_bg pt_120 pb_120">
        <div
          className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3"
        >
          {/* --------- Heading */}
          <div
            className="text-center max-w-[920px] mx-auto md:mb-[60px] sm:mb-[50px] mb-[45px]"
          >
            <p
              className="text-2xl font-caveat text-clr_base relative flex justify-center items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
              Profile
              <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
            </p>
            <h2
              className="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white lg:leading-[120%] md:leading-tight leading-9"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Related Work
            </h2>
          </div>
          {/* --------- Heading */}

          {/* ---------- Card Group */}
          <div
            className="md:columns-2 col-span-1 xxl:gap-[58px] lg:gap-12 md:gap-[30px]"
          >
            {/* card 1 */}
            <div
              className="project__item overflow-hidden group xl:mb-[60px] lg:mb-[50px] mb-[30px]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <a
                href="assets/img/project/pro1.png"
                className="imgc overflow-hidden lg:mb-[30px] mb-[20px] block w-full cursor-pointer"
              >
                <img
                  src="assets/img/project/pro1.png"
                  alt="img"
                  className="w-full overflow-hidden duration-500 rounded-[10px] group-hover:scale-105"
                />
              </a>
              <div className="content flex items-center justify-between gap-1">
                <a href="./protfolioDetails.html" className="left__cont">
                  <span
                    className="text-clr_base xl:mb-4 mb-2 block uppercase xl:text-lg text-base"
                  >
                    PRODUCT DESIGN
                  </span>
                  <h3
                    className="xl:text-[30px] sm:text-2xl text-xl font-semibold text-white"
                  >
                    Brand Identity & Motion Design
                  </h3>
                </a>
                <a
                  href="assets/img/project/pro1.png"
                  className="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer"
                >
                  <i
                    className="bi-arrow-up-right duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"
                  ></i>
                </a>
              </div>
            </div>
            {/* card 1 */}

            {/* card 2 */}
            <div
              className="overflow-hidden group xl:mb-[60px] lg:mb-[50px] mb-[30px]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <a
                href="assets/img/project/pro3.png"
                className="imgc overflow-hidden lg:mb-[30px] mb-[20px] block w-full cursor-pointer"
              >
                <img
                  src="assets/img/project/pro3.png"
                  alt="img"
                  className="w-full overflow-hidden duration-500 rounded-[10px] group-hover:scale-105"
                />
              </a>

              <div className="content flex items-center justify-between gap-1">
                <a href="./protfolio.html" className="left__cont">
                  <span
                    className="text-clr_base xl:mb-4 mb-2 block uppercase xl:text-lg text-base"
                  >
                    UI/UX DESIGN
                  </span>
                  <h3
                    className="xl:text-[30px] sm:text-2xl text-xl font-semibold text-white"
                  >
                    Mobile Application Development
                  </h3>
                </a>
                <a
                  href="assets/img/project/pro3.png"
                  className="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer"
                >
                  <i
                    className="bi-arrow-up-right duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"
                  ></i>
                </a>
              </div>
            </div>
            {/* card 2 */}
          </div>
        </div>
      </section>
      {/* --------- Related Work end */}
    </>
  );
};

export default RelatedWorkSection;