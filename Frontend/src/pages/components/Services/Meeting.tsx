import React from 'react';

const MeetingSection: React.FC = () => {
  return (
    <>
      {/* ----------- Meeting start */}
      <section
        className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden pt_120 pb_120"
      >
        <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
          <div className="grid lg:grid-cols-[58%_auto] gap-20 items-center">
            <div>
              {/* ---------- Heading */}
              <div className="pb-[50px]">
                <span
                  className="text-2xl font-caveat text-clr_base relative flex items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
                  Need a Project?
                </span>
                <h2
                  className="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white max-w-[620px]"
                  data-aos="fade-down"
                  data-aos-duration="1600"
                >
                  Let's Work Together. Fixed A Meeting
                </h2>
              </div>
              {/* ---------- Heading */}
              {/* ---------- Meeting system */}
              <div>
                <div
                  className="border-b border-b-[rgb(39,38,38)] hover:border-b-clr_base duration-500 transition-all"
                ></div>
                <div
                  className="hover:border-b hover:border-b-clr_base flex ga-5 items-center md:gap-5 gap-4 duration-500 transition-all border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <span
                    className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center"
                  >
                    <i className="bi-envelope text-[26px] text-clr_title"></i>
                  </span>
                  <span className="">
                    <span className="text-clr_pra md:text-lg text-base mb-1 block">
                      Email
                    </span>
                    <a
                      href=""
                      className="text-white md:text-xl text-base font-medium"
                    >
                      davidmatias3
                    </a>
                  </span>
                </div>
                <div
                  className="hover:border-b hover:border-b-clr_base flex ga-5 items-center md:gap-5 gap-4 duration-500 border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <span
                    className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center"
                  >
                    <i className="bi-geo-alt text-[26px] text-clr_title"></i>
                  </span>
                  <span className="">
                    <span className="text-clr_pra md:text-lg text-base mb-1 block">
                      Location
                    </span>
                    <a
                      href=""
                      className="text-white md:text-xl text-base font-medium"
                    >
                      Victoria Street London, England
                    </a>
                  </span>
                </div>
              </div>
              {/* ---------- Meeting system */}
            </div>
            {/* --------- Right side / image */}
            <div>
              <div data-aos="zoom-in" data-aos-duration="2000">
                <img src="/assets/img/project/project-need.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------- Meeting End */}
    </>
  );
};

export default MeetingSection;