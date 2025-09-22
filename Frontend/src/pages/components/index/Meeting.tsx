import React from 'react';

interface ContactInfoProps {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label, value, link }) => {
  return (
    <div 
      className="hover:border-b hover:border-b-clr_base flex items-center md:gap-5 gap-4 duration-500 transition-all border-b border-b-[rgb(38_37_37)] lg:pb-8 pb-5 lg:pt-8 pt-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center">
        <i className={`bi-${icon} text-[26px] text-clr_title`}></i>
      </span>
      <span>
        <span className="text-clr_pra md:text-lg text-base mb-1 block">
          {label}
        </span>
        <a
          href={link || "#"}
          className="text-white md:text-xl text-base font-medium"
        >
          {value}
        </a>
      </span>
    </div>
  );
};

const MeetingSection: React.FC = () => {
  return (
    <section className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden pt-28 pb-28">
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        <div className="grid lg:grid-cols-[58%_auto] gap-20 items-center">
          <div>
            {/* Heading */}
            <div className="pb-12">
              <span
                className="text-2xl font-caveat text-clr_base relative flex items-center sm:gap-6 gap-4 mx-auto mb-8"
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
            
            {/* Meeting system */}
            <div>
              <div className="border-b border-b-[rgb(39,38,38)] hover:border-b-clr_base duration-500 transition-all"></div>
              
              <ContactInfo 
                icon="envelope" 
                label="Email" 
                value="davidmatias3"
                link="mailto:davidmatias3@example.com" 
              />
              
              <ContactInfo 
                icon="geo-alt" 
                label="Location" 
                value="Victoria Street London, England"
                link="https://maps.google.com/?q=Victoria+Street+London" 
                data-aos-duration="1500"
              />
            </div>
          </div>
          
          {/* Right side / image */}
          <div>
            <div data-aos="zoom-in" data-aos-duration="2000">
              <img src="./assets/img/project/project-need.png" alt="Meeting illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingSection;