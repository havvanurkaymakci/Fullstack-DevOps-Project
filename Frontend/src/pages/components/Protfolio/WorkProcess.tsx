import React from "react";

const WorkProcess: React.FC = () => {
  return (
    <section className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden pt_120 pb_120">
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        {/* Heading */}
        <div className="text-center max-w-[920px] mx-auto md:mb-[60px] sm:mb-[50px] mb-[45px]">
          <p
            className="text-2xl font-caveat text-clr_base relative flex justify-center items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
            Working Process
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
          </p>
          <h2
            className="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white lg:leading-[120%] md:leading-tight leading-9"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Your Dream Website In Just Few Steps
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {[
            {
              title: "Concept",
              desc: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
              items: [
                "Reviewing any existing branding",
                "Target audience and competitors research",
                "Developing a strategy",
              ],
            },
            {
              title: "Design",
              desc: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
              items: [
                "Developing wireframes and mockup",
                "Choosing typography, color palettes,",
                "Refining the design",
              ],
            },
            {
              title: "Webflow",
              desc: "Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit",
              items: [
                "Testing the website thoroughly launch",
                "Choosing typography, color palettes,",
                "Refining the design",
              ],
            },
          ].map((card, idx) => (
            <div key={idx} data-aos="flip-up" data-aos-duration="500">
              <div className="overflow-hidden duration-500 border border-clr_cusborder rounded-[10px] p-[30px] relative after:absolute after:w-[50px] after:h-[50px] after:bottom-0 after:right-0 after:content-[''] after:bg-[#121212] after:rounded-tl-[100px] after:rounded-tr-[20px] after:duration-500 hover:border-clr_base hover:after:bg-clr_base">
                <h2 className="text-white lg:mb-6 mb-4 capitalize sm:text-[40px] text-3xl leading-[120%] font-semibold">
                  {card.title}
                </h2>
                <p className="lg:mb-[30px] mb-5 text-clr_pra text-lg">{card.desc}</p>
                <ul>
                  {card.items.map((item, index) => (
                    <li
                      key={index}
                      className="relative flex items-center gap-[10px] text-[#999999] pl-5 mb-2 last:mb-0"
                    >
                      <span className="w-[9px] h-[9px] bg-clr_base rounded-full"></span>
                      <p className="text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
