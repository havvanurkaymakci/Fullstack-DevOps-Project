'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowUp } from 'react-feather';
import { useAuth } from '@/context/AuthContext';

interface ProfileData {
  bio: string;
  profile_picture: string;
  website: string;
  user: string;
  email?: string; // eğer backend mail bilgisi içeriyorsa, yoksa manuel de ekleyebilirsin
}

const Footer: React.FC = () => {
  const { authTokens } = useAuth();
  const accessToken = authTokens?.access;
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!accessToken) return;

      try {
        const res = await fetch('http://127.0.0.1:8000/api/accounts/profile/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!res.ok) throw new Error('Profil bilgileri alınamadı');

        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [accessToken]);

  // Eğer backend’den email gelmiyorsa manuel de tanımlayabilirsin:
  const email = profile?.email || 'davidmatias333@.com';

  return (
    <footer>
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        <div className="pt-32 pb-[120px]">
          <div
            className="fl text-[10.5vw] uppercase font-medium leading-none w-full xl:mb-[60px] sm:mb-10 mb-5 border border-clr_cusborder rounded-lg text-center p-[10px] text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Get In Touch
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-4">
            <div className="basis-1/2 shrink">
              <div>
                <p className="xl:mb-[60px] lg:mb-10 mb-[10px] lg:text-2xl sm:text-lg text-[17px] text-white max-w-lg">
                  {profile?.bio || "Hello, I'm David Matias, Website & User Interface Designer based in London."}
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-white lg:text-4xl sm:text-[28px] text-lg underline capitalize"
                >
                  {email}
                </a>
              </div>
            </div>
            <div className="basis-1/2 shrink">
              <div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {["Facebook", "Twitter", "LinkedIn", "Webflow"].map((platform, index) => (
                    <div key={index}>
                      <a
                        href="#"
                        className="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
                      >
                        {platform}
                        <ArrowRight className="text-white text-[22px] duration-500 group-hover:text-clr_title" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-common_bg bg-no-repeat bg-center bg-cover">
        <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
          <div className="flex flex-col lg:flex-row items-center justify-between py-[34px] lg:flex-nowrap gap-4">
            <p className="text-white text-lg">
              Copyright © 2023
              <a href="#" className="text-clr_base"> Matias. </a>
              All rights reserved.
            </p>
            <ul className="terms flex gap-[38px]">
              <li>
                <a
                  href="#"
                  className="text-lg text-white duration-500 hover:text-clr_base"
                >
                  Terms & Condition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-white duration-500 hover:text-clr_base"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
            <a
              href="#top"
              className="w-10 h-[50px] bg-clr_base rounded-[5px] flex justify-center items-center"
            >
              <ArrowUp className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
