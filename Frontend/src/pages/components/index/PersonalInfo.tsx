// components/PersonalInfo.tsx
import React from 'react';

const PersonalInfo: React.FC = () => {
  return (
    <div className="tabitem w-full duration-700 z-10 opacity-100 translate-y-0">
      <div className="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
        <div className="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start align-items-center">
          <div>
            <div className="about__onethumb w-full" data-aos="zoom-in" data-aos-duration="500">
              <img src="./assets/img/about/personal-infothumb.png" alt="Personal Info" className="w-full" />
            </div>
          </div>
          <div>
            <div className="about__onecontent lg:pl-10 pl-0">
              <h2 className="text-[42px] font-semibold text-clr_white mb-5" data-aos="fade-up" data-aos-duration="500">
                Personal Info
              </h2>
              <p className="text-lg text-clr_pra mb-0" data-aos="fade-up" data-aos-duration="500">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil
              </p>
              <div className="mt-10">
                <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-between gap-6" data-aos="zoom-in">
                  <div className="abox rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                    <span className="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">Email</span>
                    <a href="#" className="text-xl text-clr_white">dev.mostafizar.com</a>
                  </div>
                  <div className="abox rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                    <span className="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">Phone</span>
                    <a href="#" className="text-xl text-clr_white">01575699193</a>
                  </div>
                  <div className="abox rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                    <span className="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">Address</span>
                    <a href="#" className="text-xl text-clr_white">Dahagram, Lalmonirhat</a>
                  </div>
                  <div className="abox rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                    <span className="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">Follow</span>
                    <ul className="flex items-center xl:gap-4 gap-2">
                      {['facebook', 'twitter', 'instagram', 'youtube'].map((platform) => (
                        <li key={platform}>
                          <a href="#" className="text-clr_white text-xl">
                            <i className={`bi bi-${platform}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
