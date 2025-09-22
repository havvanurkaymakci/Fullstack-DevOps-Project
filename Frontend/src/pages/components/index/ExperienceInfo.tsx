import React from 'react';

interface ExperienceItemProps {
  year: string;
  title: string;
  position: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ year, title, position }) => {
  return (
    <div className="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
      <span className="md:text-lg text-base font-medium text-clr_base">
        {year}
      </span>
      <div className="expri__cont">
        <h4 className="mb-4 text-white font-semibold md:text-2xl text-lg">
          {title}
        </h4>
        <p className="md:text-lg text-base text-clr_pra">
          {position}
        </p>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const experienceItems = [
    {
      year: 'In 2011',
      title: 'Software Engineer',
      position: 'UI Head & Manager'
    },
    {
      year: 'In 2016',
      title: 'Product Designer',
      position: 'Head of Department'
    },
    {
      year: 'In 2023',
      title: 'Senior UI Designer',
      position: 'Fiverr.com'
    }
  ];

  return (
    <div 
      data-tab="experience"
      className="tabitem w-full duration-700 top-0 absolute translate-y-20 -z-10 opacity-0"
    >
      <div className="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden sm:p-14 py-8 px-3">
        <div className="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
          <div>
            <div className="about__onethumb">
              <img
                src="./assets/img/about/personal-infothumb.png"
                alt="Experience thumbnail"
              />
            </div>
          </div>
          <div>
            <div className="about__onecontent lg:pl-10 pl-0">
              <h2 className="text-4xl font-semibold text-clr_white mb-5">
                Experience
              </h2>
              <p className="text-lg text-clr_pra mb-0">
                Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit consectetur, aliquam quaerats voluptatem. Ut enim ad
                minima veniam, exercitationem laboriosam, nisi ut
                aliquid ex ea autem velit esse quam nihil
              </p>
              <div className="exprience__box lg:mt-8 mt-5">
                {experienceItems.map((item, index) => (
                  <ExperienceItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    position={item.position}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;