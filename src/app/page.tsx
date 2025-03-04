'use client';
import { Inter } from 'next/font/google';
import React, { useState , useRef, useEffect } from 'react'
import Splash from '@/app/components/sections/splash';
import useEventListener from '@/app/components/hooks/useEventListener';
import About from '@/app/components/sections/about';
import Events from '@/app/components/sections/events';
import Announcements from '@/app/components/sections/announcements';
import Timeline from '@/app/components/core/timeline';
import Officers from './components/sections/officers';
import NavBar from '@/app/components/core/navbar';
import { AuthContextProvider } from '@/app/components/context/auth-context';
import { LangContextProvider } from '@/app/components/context/lang-context';


const inter = Inter({ subsets: ['latin'] });
const SECTION_TITLES_EN = ["About", "Announcements",  "Events", "Officers"];
const SPLASH_TITLE_EN = "CS CLUB";
const SPLASH_DESC_EN = "UMass Boston's official center for technology-driven students!";
const SECTION_TITLES_JP = ["サクルについて", "お知らせ", "イベント", "役員"];
const SPLASH_TITLE_JP = "コンピューターサイエンスのサクル";
const SPLASH_DESC_JP = "テクノロジーが好きなウマッスボストンの学生が会うところ！";
const SECTION_TITLES_ES = ["AcercaDe", "Anuncios", "Eventos", "Oficiales"];
const SPLASH_TITLE_ES = "CLUB de INFORMÁTICA";
const SPLASH_DESC_ES = "El centro oficial de UMass Boston para estudiantes impulsados por la tecnología";

const ABOUT_IMAGE_CAROUSEL_CAPTIONS = {
  "/cover1.jpg": {
      "en": "Cover 1",
      "jp": "表紙1"
  },
  "/cover2.png": {
      "en": "Cover 2",
      "jp": "表紙2"
  },
  "/cover3.jpg": {
      "en": "Cover 3",
      "jp": "表紙3"
  },
  "/cover4.jpg": {
      "en": "Cover 4",
      "jp": "表紙4"
  },
  "/cover5.jpg": {
      "en": "Cover 5",
      "jp": "表紙5"
  },
}

export default function Home() {
  const [touchingTop, setTouchingTop] = useState(true);

  useEventListener('scroll', (e: Event) => {
    setTouchingTop(window.scrollY < window.innerHeight);
  });

  return (
    <LangContextProvider>
      <AuthContextProvider>
        <div className={`bg-secondary-900 overflow-x-hidden w-screen  ${inter.className}`}>
          <NavBar className={`text-lg fixed top-0 bg-secondary-900 p-2 md:pl-6 md:py-1 ${touchingTop ? "bg-opacity-0" : " border-b-[1px] border-secondary-700 bg-opacity-50 backdrop-blur-lg shadow-lg"}`} ids={{"en": SECTION_TITLES_EN, "jp": SECTION_TITLES_JP, "es": SECTION_TITLES_ES}} />
          <Splash title={{'en': SPLASH_TITLE_EN, 'jp': SPLASH_TITLE_JP, 'es': SPLASH_TITLE_ES}} desc={{'en': SPLASH_DESC_EN, 'jp': SPLASH_DESC_JP, 'es': SPLASH_TITLE_ES}} />
          <Timeline className='w-full h-auto min-h-screen bg-secondary-900' titles={{ "en": SECTION_TITLES_EN, "jp": SECTION_TITLES_JP, "es": SECTION_TITLES_ES }}>
            <About images={ABOUT_IMAGE_CAROUSEL_CAPTIONS} />
            <Announcements />
            <Events />
            <Officers />
          </Timeline>
        </div>
      </AuthContextProvider>
    </LangContextProvider>
  )
}
