// components/Marquee1.tsx
import React from "react";
import Image from "next/image";

const Marquee1: React.FC = () => {
  return (
    <div className="relative marquee-wrapper text-slider bg-clr_base h-[90px] overflow-hidden">
      <div className="slide-track">
        <div className="slide">
          <Image src="/assets/img/banner/ts1.png" alt="ts1" width={100} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts2.png" alt="ts2" width={100} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts3.png" alt="ts3" width={100} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts4.png" alt="ts4" width={100} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts1.png" alt="ts1" width={100} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts2.png" alt="ts2" width={100} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts3.png" alt="ts3" width={100} height={60} />
        </div>
        <div className="slide">
          <Image src="/assets/img/banner/ts4.png" alt="ts4" width={100} height={60} />
        </div>
      </div>
    </div>
  );
};

export default Marquee1;