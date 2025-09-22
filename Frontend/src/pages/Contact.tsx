'use client'
import { useState } from 'react';
import axios from 'axios';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import withAuth from '@/context/withAuth'; // withAuth'ın konumuna göre import yolunu ayarlayın

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Burada authTokens'ı kullanarak API isteğine yetkilendirme ekleyebilirsiniz
      // const { authTokens } = useAuth();
      // const headers = { Authorization: `Bearer ${authTokens?.access}` };
      
      await axios.post('http://localhost:8000/contact/', formData);
      setFormStatus('Message sent successfully!');
      setFormData({
        full_name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setFormStatus('Failed to send message.');
      console.error(error);
    }
  };

  return (
    <>
      <Header />

      {/* Page Heading */}
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3 pt_120 pb_120">
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="lg:text-6xl sm:text-4xl text-3xl text-white lg:mb-10 sm:mb-9 mb-6 font-bold">
              Let's Start Something
            </h1>
            <ul className="flex items-center justify-center sm:flex-nowrap flex-wrap gap-3">
              <li className="text-2xl font-caveat">
                <a href="/" className="text-white">Home</a>
              </li>
              <li className="text-white text-2xl">/</li>
              <li className="text-clr_base font-caveat text-2xl">
                Let's Start Something
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact__section pb_120">
        <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
          <div className="grid lg:grid-cols-[66.66%_auto] grid-cols-1 gap-6">
            {/* Form Section */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="bg-common_bg p-[60px] rounded-lg">
                <h3 className="mb-5 text-white capitalize sm:text-[32px] text-[26px] font-semibold">
                  Leave a Reply
                </h3>
                <p className="text-clr_pra mb-[30px]">
                  Your email address will not be published. Required fields are marked *
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none"
                    required
                  />
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Write Comments"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-[250px] flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%] capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
                  >
                    <span className="z-10 relative duration-500">Submit Comment</span>
                    <i className="bi-arrow-right z-10 relative duration-500 text-xl" />
                  </button>
                  {formStatus && (
                    <p className="text-white mt-4">{formStatus}</p>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info Section */}
            <div data-aos="fade-up" data-aos-duration="1500">
              <div className="contact__rightside bg-common_bg py-[30px] px-4 sm:px-5 xl:px-[30px] xl:py-[60px]">
                <h4 className="lg:mb-[30px] mb-5xl xl:text-2xl text-xl font-semibold text-white capitalize">
                  Feel free to contact me anytime
                </h4>

                <div className="contact__item lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="he1 mb-[14px] block text-clr_pra capitalize">Email</span>
                  <a href="mailto:davidmatias333@.com" className="text-white xl:text-xl text-base block capitalize">
                    davidmatias333@.com
                  </a>
                </div>

                <div className="contact__item lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="he1 mb-[14px] block text-clr_pra capitalize">Phone</span>
                  <a href="tel:+2871382023" className="text-white xl:text-xl text-base block capitalize">
                    +(2) 871 382 023
                  </a>
                </div>

                <div className="contact__item lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="he1 mb-[14px] block text-clr_pra capitalize">Address</span>
                  <span className="text-white xl:text-xl text-base block capitalize">
                    Victoria Street London
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

// withAuth ile sayfayı koruyoruz
export default withAuth(Contact);