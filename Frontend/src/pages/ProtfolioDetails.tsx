import React from 'react';
import Header from './components/layout/Header';
import PortfolioDetailsSection from './components/Protfolio/ProtfolioDetails';
import RelatedWorkSection from './components/Protfolio/RelatedWorks';
import Footer from './components/layout/Footer';

const ProtfolioDetails: React.FC = () => {
  return (
    <>
    <div>
        <div>
        <Header/>
        </div>
        
      {/* Page heading start */}
      <div
        className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3 pt_120 pb_120"
      >
        <div className="flex justify-center">
          <div>
            <div className="text-center">
              <h1
                className="lg:text-6xl sm:text-4xl text-3xl text-white lg:mb-10 sm:mb-9 mb-6 font-bold"
              >
                Brand Identity & Motion Design
              </h1>
              <ul
                className="flex items-center justify-center sm:flex-nowrap flex-wrap gap-3"
              >
                <li className="text-2xl font-caveat">
                  <a href="/" className="text-white">Home</a>
                </li>
                <li className="text-white text-2xl">/</li>
                <li className="text-clr_base font-caveat text-2xl">
                  Brand Identity & Motion Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Page heading end */}
      <div><PortfolioDetailsSection/></div>
      <div><RelatedWorkSection/></div>
      <div><Footer/></div>
      </div>
    </>
  );
};

export default ProtfolioDetails;