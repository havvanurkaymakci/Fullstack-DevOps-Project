import React from 'react';
import Header from './components/layout/Header';
import MeetingSection from './components/Services/Meeting';
import WorkProcess from './components/index/WorkProcess';
import PricingSection from'./components/Services/Pricing';
import Footer from './components/layout/Footer';
import ServicesIndex from './components/index/Services';

const Services: React.FC = () => {
  return (
    <>
    <div><Header/></div>
      {/* Page heading start */}
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3 pt_120 pb_120">
        <div className="flex justify-center">
          <div>
            <div className="text-center">
              <h1
                className="lg:text-6xl sm:text-4xl text-3xl text-white lg:mb-10 sm:mb-9 mb-6 font-bold"
              >
                Services All
              </h1>
              <ul
                className="flex items-center justify-center sm:flex-nowrap flex-wrap gap-3"
              >
                <li className="text-2xl font-caveat">
                  <a href="/" className="text-white">Home</a>
                </li>
                <li className="text-white text-2xl">/</li>
                <li className="text-clr_base font-caveat text-2xl">Services All</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Page heading end */}
      <div><ServicesIndex/></div>
      <div><MeetingSection/></div>
      <div><PricingSection/></div>
      <div><WorkProcess/></div>
      <div><Footer/></div>

    </>
  );
};

export default Services;