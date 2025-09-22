import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="pt_120 pb_120">
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        {/* Heading */}
        <div className="text-center max-w-[920px] mx-auto md:mb-[60px] sm:mb-[50px] mb-[45px]">
          <p
            className="text-2xl font-caveat text-clr_base relative flex justify-center items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
            Choose Your Plan
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
          </p>
          <h2
            className="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white lg:leading-[120%] md:leading-tight leading-9"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            The Best Pricing Plans To Get Your Best
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
          {/* Card 1 - Basic Plan */}
          <PricingCard
            title="Basic Plan"
            price="$35"
            iconSrc="/assets/img/project/basic.png"
            features={[
              'Web Development',
              'Mobile Development',
              'Advetising',
              'Advetising',
              'Graphic design',
              'Project management',
            ]}
            theme="default"
          />

          {/* Card 2 - Ultra Plan */}
          <PricingCard
            title="Ultra Plan"
            price="$65"
            iconSrc="/assets/img/project/warranty.png"
            features={[
              'Web Development',
              'Mobile Development',
              'Advetising',
              'Advetising',
              'Graphic design',
              'Project management',
            ]}
            theme="highlighted"
          />

          {/* Card 3 - Premium Plan */}
          <PricingCard
            title="Premium Plan"
            price="$95"
            iconSrc="/assets/img/project/premium-quality.png"
            features={[
              'Web Development',
              'Mobile Development',
              'Advetising',
              'Advetising',
              'Graphic design',
              'Project management',
            ]}
            theme="default"
          />
        </div>
      </div>
    </section>
  );
};

type PricingCardProps = {
  title: string;
  price: string;
  iconSrc: string;
  features: string[];
  theme: 'default' | 'highlighted';
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  iconSrc,
  features,
  theme,
}) => {
  const isHighlighted = theme === 'highlighted';

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div
        className={`before:hidden border border-clr_cusborder py-5 px-[18px] rounded-[10px] duration-500 hover:border-clr_base ${
          isHighlighted ? 'bg-clr_base' : ''
        }`}
      >
        <div
          className={`w-[90px] h-[90px] flex items-center justify-center rounded-lg mb-10 ${
            isHighlighted ? 'bg-clr_title' : 'bg-clr_base'
          }`}
        >
          <img src={iconSrc} alt="plan" />
        </div>
        <h4 className="text-white lg:mb-6 mb-4 text-2xl font-semibold">
          {title}
        </h4>
        <h2 className="lg:mb-10 lg:pb-10 mb-7 pb-7 flex text-6xl border-b border-b-clr_cusborder text-white font-bold">
          {price}
          <span className="text-xl self-end leading-[2.2] font-medium">
            /per month
          </span>
        </h2>
        <ul className="pri__list mb-10">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 mb-2">
              <span
                className={`w-[9px] h-[9px] rounded-full ${
                  isHighlighted ? 'bg-clr_mtitle' : 'bg-clr_base'
                }`}
              ></span>
              <span
                className={`text-[15px] ${
                  isHighlighted ? 'text-clr_mtitle' : 'text-clr_pra'
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className={`flex items-center justify-center gap-2 w-full ${
            isHighlighted ? 'bg-clr_mtitle' : 'bg-clr_base'
          } py-[30px] pt-5 pb-[21px] font-medium text-lg leading-[120%] overflow-hidden capitalize relative rounded-[5px] duration-500 before:absolute before:content-[""] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0`}
        >
          <span
            className={`relative z-10 duration-500 ${
              isHighlighted ? 'text-white' : 'text-clr_title'
            }`}
          >
            Start My Project Now
          </span>
          <span>
            <i
              className={`bi-arrow-right text-xl relative z-10 duration-500 ${
                isHighlighted ? 'text-white' : 'text-clr_title'
              }`}
            ></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default PricingSection;
