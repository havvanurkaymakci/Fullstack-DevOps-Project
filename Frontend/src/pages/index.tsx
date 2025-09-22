// app/index.tsx
'use client'

import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

import Header from './components/layout/Header';
import Banner from './components/index/Banner';
import Marquee1 from './components/index/Marquee1';
import About from './components/index/About'; // Yeni About bileşeni
import Marquee2 from './components/index/Marquee2';
import Projects from './components/index/Projects';
import Awards from './components/index/Awards';
import Meeting from './components/index/Meeting';
import Services from './components/index/Services';
import WorkProcess from './components/index/WorkProcess';
import Testimonial from './components/index/Testimonial';
import Blogs from './components/index/Blogs';
import Footer from './components/layout/Footer';

function Home() {
  const { user, loading } = useAuth();

  return (
    <main>
      <div className="text-3xl font-bold text-center text-blue-600 mt-10">
        <Header />
        <Banner />
        <Marquee1 />

        {/* About bileşeni artık tüm sekmeleri kendi içinde barındırıyor */}
        <About />

        <Marquee2 />
        <Awards />
        <Projects />
        <Meeting />
        <Services />
        <WorkProcess />

        {loading ? (
          <p className="text-white text-center">Yorumlar yükleniyor...</p>
        ) : user ? (
          <Testimonial />
        ) : (
          <p className="text-red-500 text-center mt-10">Yorumları görüntülemek için lütfen giriş yapın.</p>
        )}

        <Blogs />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
