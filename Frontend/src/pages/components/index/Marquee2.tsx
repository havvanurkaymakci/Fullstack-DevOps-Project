// components/index/Marquee2.tsx
'use client'

import Image from 'next/image';

const Marquee2 = () => {
  return (
    <div className="relative marquee-wrapper text-slider bg-clr_base h-[90px] overflow-hidden">
      <div className="slide-track slide-track2 flex">
        <div className="slide">
          <Image src="/assets/img/banner/ts5.png" alt="slide1" width={150} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts6.png" alt="slide2" width={150} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts7.png" alt="slide3" width={150} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts8.png" alt="slide4" width={150} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts5.png" alt="slide5" width={150} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts6.png" alt="slide6" width={150} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts7.png" alt="slide7" width={150} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts8.png" alt="slide8" width={150} height={60} />
        </div>
      </div>
    </div>
  );
};

export default Marquee2;
