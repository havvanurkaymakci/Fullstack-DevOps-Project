import React, { useEffect } from 'react';
import { ArrowRight, ArrowUp, ChevronDown, Play } from 'lucide-react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AccordionItemProps {
  question: string;
  answer: string;
}
 
const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    
    <div className="relative rounded-lg bg-[rgb(23_23_23)] border-none mb-[22px] last:mb-0">
      <h2
        className={`accordion rounded-lg text-xl leading-[150%] cursor-pointer bg-[rgb(23_23_23)] font-normal text-white border-none flex items-center justify-between pt-5 px-6 pb-6 w-full`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={24} />
        </div>
      </h2>
      <div
        className={`relative border-none pt-[10px] px-6 pb-[14px] ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <p className="text-[#999999] text-lg font-normal leading-[30px] capitalize">
          {answer}
        </p>
      </div>
    </div>
  );
};

interface ServiceItemProps {
  name: string;
  href: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ name, href }) => {
  return (
    <a
      href={href}
      className="lg:mb-4 mb-[10px] lg:py-7 md:py-5 py-4 lg:pr-[26px] md:pr-4 pr-3 lg:pl-5 pl-3 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl md:text-xl text-base duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
    >
      {name}
      <ArrowRight className="text-white text-[22px] duration-500 group-hover:text-clr_title" />
    </a>
  );
};

interface SocialLinkProps {
  name: string;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ name, href }) => {
  return (
    <div>
      <a
        href={href}
        className="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
      >
        {name}
        <ArrowRight className="text-white text-[22px] duration-500 group-hover:text-clr_title" />
      </a>
    </div>
  );
};

const ServiceDetails: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);

  const faqItems = [
    {
      question: "Simple process for workflow?",
      answer: "All The Lorem Ipsum Generators On The Internet Tend To Repeat Predefined Chunks As Necessary, Making This The First True Generator On The Internet. It Uses A Dictionary Of Over Words, Combined With A Handful Of Model Structures, To Generate Lorem Ipsum Which Looks Reasonable."
    },
    {
      question: "Simple process for workflow?",
      answer: "All The Lorem Ipsum Generators On The Internet Tend To Repeat Predefined Chunks As Necessary, Making This The First True Generator On The Internet. It Uses A Dictionary Of Over Words, Combined With A Handful Of Model Structures, To Generate Lorem Ipsum Which Looks Reasonable."
    },
    {
      question: "Simple process for workflow?",
      answer: "All The Lorem Ipsum Generators On The Internet Tend To Repeat Predefined Chunks As Necessary, Making This The First True Generator On The Internet. It Uses A Dictionary Of Over Words, Combined With A Handful Of Model Structures, To Generate Lorem Ipsum Which Looks Reasonable."
    }
  ];

  const services = [
    { name: "Illustration Design", href: "#" },
    { name: "Business Branding", href: "#" },
    { name: "Web UI/UX Design", href: "#" },
    { name: "Application Design", href: "#" },
    { name: "Digital Marketing", href: "#" },
    { name: "Web Development", href: "#" }
  ];

  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Linkdin", href: "#" },
    { name: "Webflow", href: "#" }
  ];

  return (
    <>
    <Header/>
      <section className="pb_120">
        <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl mx-auto px-3">
          <div className="grid lg:grid-cols-[66%_auto] gap-6">
            <div>
              <div className="w-full mb-[60px]">
                <img
                  src="./assets/img/project/ser-dv1.png"
                  alt="img"
                  className="w-full"
                />
              </div>
              <div
                className="xl:mb-[60px] mb-10"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <h3
                  className="block xl:text-4xl text-2xl xl:mb-[30px] font-semibold mb-5 text-white"
                >
                  About Business Branding Service
                </h3>
                <p className="md:text-base text-sm text-clr_pra xl:mb-7 mb-4">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                  sit amet, consectetur, adipisci velit, numquam eius modi tempora
                  incidunt ut labore et dolore magnam aliquam
                </p>
                <p className="md:text-base text-sm text-clr_pra">
                  Quis nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur, vel illum qui
                  dolorem fugiat quo voluptas nulla the Lorem Ipsum generators on
                  the Internet tend to repeat predefined chunks
                </p>
              </div>
              <div
                className="xl:mb-[60px] mb-10"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <h3
                  className="xl:text-4xl text-2xl font-semibold xl:mb-[30px] mb-5 text-white block"
                >
                  Specialization & Working Process
                </h3>
                <p className="md:text-base text-sm text-clr_pra">
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a you need to be
                  sure there isn't anything embarrassing hidden in the middle of
                  text. All the generators on the Internet tend to repeat
                  predefined chunks as necessary, Making this the first true
                  generator on the Internet. It uses a dictionary of over combined
                  with a handful of structures, to generate Lorem Ipsum which
                  looks reasonable. The generated Lorem Ipsum is therefore always
                  free from injected humour, or non-characteristic words etc.
                </p>
              </div>
              <div
                className="relative w-full mb-[60px] before:absolute before:w-full before:h-full before:inset-0 before:content-[''] before:rounded-[10px] before:bg-[rgb(12_12_12)] before:bg-opacity-60"
              >
                <img
                  src="./assets/img/project/ser-dv2.png"
                  alt="img"
                  className="rounded-[10px]"
                />
                <a
                  href="#"
                  className="video__80 video-btn cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:w-20 xl:h-20 w-[60px] h-[60px] flex justify-center items-center rounded-full border border-white before:absolute before:border-2 before:border-white before:w-full before:h-full before:content-[''] before:rounded-full before:animate-pulse"
                >
                  <Play className="text-white text-[42px]" />
                </a>
              </div>
              {/* Accordion */}
              <div>
                <h2
                  className="text-white mb-[3rem] lg:text-4xl text-3xl font-semibold leading-[120%]"
                >
                  Questions ? You're Covered
                </h2>
                <div>
                  {faqItems.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      question={item.question} 
                      answer={item.answer} 
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right side or sidebar */}
            <div>
              <div
                className="lg:mb-[30px] mb-5 xl:p-[30px] p-5 border border-clr_cusborder rounded-lg"
              >
                <h3 className="text-3xl text-white mb-[30px] font-semibold">
                  Service List
                </h3>
                
                {services.map((service, index) => (
                  <ServiceItem 
                    key={index} 
                    name={service.name} 
                    href={service.href} 
                  />
                ))}
              </div>

              <div
                className="lg:mb-[30px] mb-5 xl:p-[30px] p-5 border border-clr_cusborder rounded-lg"
              >
                <div
                  className="relative w-full before:absolute before:w-full before:h-full before:inset-0 before:content-[''] before:rounded-[10px] before:bg-[rgb(12_12_12)] before:opacity-60"
                >
                  <img
                    src="./assets/img/contact/ser-detialcontact.png"
                    alt="img"
                    className="w-full"
                  />
                  <a
                    href="#"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] sm:text-lg text-base leading-[120%] capitalize bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
                  >
                    <span className="z-10 relative duration-500 whitespace-nowrap">
                      Contact Me
                    </span>
                    <span className="z-10 relative duration-500">
                      <ArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div><Footer/></div>

      
    </>
  );
};

export default ServiceDetails;