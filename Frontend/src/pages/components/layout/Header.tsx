'use client'; // Client component olarak işaretliyoruz

import Link from "next/link";
import Image from "next/image";
import { useAuth } from '@/context/AuthContext'; // Auth context'i import ediyoruz

const Header = () => {
  // Auth context'ten user ve logoutUser fonksiyonunu alıyoruz
  const { user, logoutUser } = useAuth();

  return (
    <div>
    <header className="header relative w-full border-b border-b-clr_cusborder z-10 xxl:after:block after:hidden after:absolute after:right-[calc(20%-30px)] after:top-0 after:w-[1px] after:h-full after:content-[''] after:bg-clr_cusborder xxl:before:block before:hidden before:absolute before:left-[calc(15%-40px)] before:top-0 before:w-[1px] before:h-full before:content-[''] before:bg-clr_cusborder">
      <div className="xxl:max-w-[1805px] xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        <div className="flex justify-between items-center w-full relative py-5">
          <div className="main__logo">
            <Link href="/" className="block xl:w-[150px] w-[100px]">
              <Image
                src="/assets/img/logo/logo.png"
                alt="logo"
                width={150}
                height={50}
                className="w-full h-full object-contain"
              />
            </Link>
          </div>

          <ul className="menus flex lg:flex-row flex-col lg:items-center opacity-0 invisible lg:opacity-100 lg:visible lg:gap-[14px] gap-0 fixed z-50 lg:static top-20 left-0 w-full lg:w-auto bg-clr_subtitle min-h-screen lg:min-h-full lg:bg-transparent duration-500 origin-top px-3">
              <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                <Link
                  href="/"
                  className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                >
                  Home
                </Link>
              </li>
              <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                <Link
                  href="#about"
                  className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                >
                  About
                </Link>
              </li>
              


              {/* Show these links only if the user is logged in */}
             
                  <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                <Link
                  href="#projects"
                  className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                >
                  Work
                </Link>
               </li>

                 <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4 group/dropdown dropdown">
                    <Link
                      href="#portfolio"
                      className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                    >
                      Portfolio
                    </Link>
                    <ul className="lg:absolute lg:block hidden static top-[50px] left-0 w-[250px] px-5 py-2 leading-9 z-50 transition-all lg:bg-white lg:shadow-mainShadow justify-center gap-[5px] before:absolute before:content-[''] before:-top-[17.6px] before:left-[26px] before:w-0 before:h-0 before:border-l-[13px] before:border-l-transparent before:border-r-[13px] before:border-r-transparent lg:before:border-b-[18px] lg:before:border-b-white lg:opacity-0 lg:invisible lg:translate-y-11 duration-500 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 dropdownItem">
                      <li>
                        <Link
                          href="/Protfolio"
                          className="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                        >
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ProtfolioDetails"
                          className="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                        >
                          Portfolio Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                 <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4 group/dropdown dropdown">
                <Link
                  href="#services"
                  className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                >
                  Services
                </Link>
                <ul className="lg:absolute lg:block hidden static top-[50px] left-0 w-[250px] px-5 py-2 leading-9 z-50 transition-all lg:bg-white lg:shadow-mainShadow justify-center gap-[5px] before:absolute before:content-[''] before:-top-[17.6px] before:left-[26px] before:w-0 before:h-0 before:border-l-[13px] before:border-l-transparent before:border-r-[13px] before:border-r-transparent lg:before:border-b-[18px] lg:before:border-b-white lg:opacity-0 lg:invisible lg:translate-y-11 duration-500 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 dropdownItem">
                  <li>
                    <Link
                      href="/Services"
                      className="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ServiceDetails"
                      className="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                    >
                      Service Details
                    </Link>
                  </li>
                </ul>
               </li>
                 
              
              <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                <Link
                  href="#testimonial"
                  className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                >
                  TESTIMONIAL
                </Link>
              </li>
              <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4 group/dropdown dropdown">
                <Link
                  href="#blog"
                  className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                >
                  Blog
                </Link>
                <ul className="lg:absolute lg:block hidden static top-[50px] left-0 w-[250px] px-5 py-2 leading-9 z-50 transition-all lg:bg-white lg:shadow-mainShadow justify-center gap-[5px] before:absolute before:content-[''] before:-top-[17.6px] before:left-[26px] before:w-0 before:h-0 before:border-l-[13px] before:border-l-transparent before:border-r-[13px] before:border-r-transparent lg:before:border-b-[18px] lg:before:border-b-white lg:opacity-0 lg:invisible lg:translate-y-11 duration-500 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 dropdownItem">
                  <li>
                    <Link
                      href="/Blogs"
                      className="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/BlogDetails"
                      className="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                    >
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                <Link
                  href="/Contact"
                  className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                >
                  Contact
                </Link>
              </li>   

              {/* Kullanıcı durumuna göre login/register/logout gösterimi */}
              {!user ? (
                <>
                  <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                    <Link
                      href="/register"
                      className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                    >
                      Register
                    </Link>
                  </li>      

                  <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                    <Link
                      href="/login"
                      className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
                    >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {/* Kullanıcı adı gösterimi */}
                  <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                    <span className="text-clr_base font-500 xxl:text-base text-sm lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1">
                      {user.username}
                    </span>
                  </li>
                  
                  {/* Logout butonu */}
                  <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
                    <button
                      onClick={logoutUser}
                      className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-red-500"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>

          <div className="flex items-center gap-4">
            <Link
              href=""
              className="flex items-center gap-2 xxl:px-[26px] xxl:py-[19px] lg:px-[16px] lg:py-[9px] px-[11px] py-[7px] font-medium text-lg capitalize relative bg-clr_base overflow-hidden rounded-[5px] transition-all text-clr_subtitle max-h-[58px] before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
            >
              <span className="text-sm xl:text-lg z-10 relative duration-500">
                Let's Talk
              </span>
              <span>
                <i className="bi bi-arrow-right text-xl z-10 relative duration-500"></i>
              </span>
            </Link>

            <div className="header-bar lg:hidden">
              <i className="bi bi-x text-[32px] text-clr_white cursor-pointer hidden menuCloseIcon"></i>
              <i className="bi bi-list text-[32px] text-clr_white cursor-pointer menuActiveIcon"></i>
            </div>
            <div className="drawerActiveIcon xl:w-[58px] xl:h-[58px] w-[39px] h-[39px] rounded-md flex items-center justify-center bg-clr_white cursor-pointer">
              <i className="bi bi-list lg:text-[32px] text-[22px] text-clr_title"></i>
            </div>
          </div>
        </div> 
      </div>
    </header>
     {/* Drawer */}

       <div className="w-80 h-full fixed z-50 top-0 duration-500 overflow-y-scroll bg-black -right-80 drawer">
        <div className="flex justify-center items-center w-10 h-10 m-[10px] bg-clr_base ml-auto p-[5px] rounded-md hover:cursor-pointer drawerCloseIcon">
          <i className="bi-x-lg text-[22px] text-clr_mtitle"></i>
        </div>
        <div className="grid py-10 px-5">
          <a href="#" className="mb-5">
            <img src="/assets/img/logo/logo.png" alt="Logo" />
          </a>
          <p className="text-sm mb-10 text-clr_pra break-words leading-normal">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur,
            aliquam quaerats voluptatem...
          </p>
          <div className="grid gap-6 mb-10">
            <div>
              <span className="block mb-2 uppercase text-clr_pra font-bold text-sm">
                address
              </span>
              <span className="capitalize text-white font-medium leading-[120%]">
                Victoria Street London,
              </span>
            </div>
            <div>
              <span className="block mb-2 uppercase text-clr_pra font-bold text-sm">
                email
              </span>
              <a href="#" className="capitalize text-white font-medium leading-[120%]">
                matias999@.com
              </a>
            </div>
            <div>
              <span className="block mb-2 uppercase text-clr_pra font-bold text-sm">
                call now
              </span>
              <a href="#" className="capitalize text-white font-medium leading-[120%]">
                +98 4758 2154 021
              </a>
            </div>
          </div>
          <div className="lg:mb-20 mb-14 relative">
            <ul className="social flex gap-[14px]">
              {["facebook", "twitter", "linkedin", "youtube"].map((icon) => (
                <li key={icon}>
                  <a
                    href="#"
                    className="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center"
                  >
                    <i className={`bi-${icon} text-clr_title`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Kullanıcı durumuna göre login/logout gösterimi - drawer için */}
          {user ? (
            <div className="flex flex-col gap-4 mb-6">
              <div className="text-white font-medium text-center">
                Merhaba, {user.username}
              </div>
              <button
                onClick={logoutUser}
                className="flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%] capitalize relative bg-red-500 overflow-hidden rounded-[5px] duration-500 text-white"
              >
                <span className="z-10 relative duration-500">Çıkış Yap</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 mb-6">
              <Link
                href="/login"
                className="flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%] capitalize relative bg-blue-500 overflow-hidden rounded-[5px] duration-500 text-white"
              >
                <span className="z-10 relative duration-500">Giriş Yap</span>
              </Link>
              <Link
                href="/register"
                className="flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%] capitalize relative bg-green-500 overflow-hidden rounded-[5px] duration-500 text-white"
              >
                <span className="z-10 relative duration-500">Kayıt Ol</span>
              </Link>
            </div>
          )}
          
          <a
            href="#"
            className="flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%] capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
          >
            <span className="z-10 relative duration-500">
              <i className="bi-chevron-right"></i>
            </span>
            <span className="z-10 relative duration-500">Let's Talk</span>
          </a>
        </div>
      </div>

  </div>
  );
};

export default Header;