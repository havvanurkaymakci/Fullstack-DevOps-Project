import React from 'react';

interface SkillItemProps {
  icon: string;
  name: string;
  percentage: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, name, percentage }) => {
  return (
    <div className="rounded-lg bg-[#1D1D1D] p-8 border border-[#1D1D1D] duration-500 hover:border-clr_base">
      <div className="abox myskill__item flex items-center gap-6">
        <div>
          <img src={icon} alt={`${name} icon`} />
        </div>
        <div className="mys">
          <span className="ptext md:text-lg text-base lg:mb-4 mb-3 block text-clr_pra">
            {name}
          </span>
          <h1 className="font-semibold text-5xl text-clr_white">
            {percentage}
          </h1>
        </div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skillItems = [
    {
      icon: 'assets/img/about/html.png',
      name: 'HTML',
      percentage: '85%'
    },
    {
      icon: 'assets/img/about/figma.png',
      name: 'Figma',
      percentage: '90%'
    },
    {
      icon: 'assets/img/about/word.png',
      name: 'Wordpress',
      percentage: '95%'
    },
    {
      icon: 'assets/img/about/boot.png',
      name: 'Bootstrap',
      percentage: '97%'
    }
  ];

  return (
    <div 
      data-tab="skills"
      className="tabitem w-full duration-700 top-0 absolute translate-y-20 -z-10 opacity-0"
    >
      <div className="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden sm:p-14 py-8 px-3">
        <div className="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
          <div>
            <div className="about__onethumb">
              <img
                src="assets/img/about/personal-infothumb.png"
                alt="Skills thumbnail"
              />
            </div>
          </div>
          <div>
            <div className="about__onecontent">
              <h2 className="text-4xl font-semibold text-clr_white mb-5">
                My Skills
              </h2>
              <p className="text-lg text-clr_pra mb-0">
                Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit consectetur, aliquam quaerats voluptatem. Ut enim ad
                minima veniam, exercitationem laboriosam, nisi ut
                aliquid ex ea autem velit esse quam nihil
              </p>
              <div className="mt-10">
                <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-between gap-6">
                  {skillItems.map((item, index) => (
                    <SkillItem
                      key={index}
                      icon={item.icon}
                      name={item.name}
                      percentage={item.percentage}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;