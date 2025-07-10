"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// ====================================================================
//  Main Page Component
// ====================================================================
export default function FinalLandingPage() {
  return (
    <div className="bg-black text-white font-mono">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <IntroductionSection1 />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}

// ====================================================================
//  Individual Sections
// ====================================================================

const Header = () => (
    <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
            <div className="text-xl font-bold tracking-widest text-white font-['Bebas_Neue',_sans-serif]">
              <span className="text-red-600">//</span> WS
            </div>
            <Link
              href="/login"
              className="px-6 py-2 text-sm font-medium text-white bg-red-600/90 hover:bg-red-600 transition-colors"
            >
              SECURE LOGIN
            </Link>
        </nav>
    </header>
);

const HeroSection = () => (
    <section className="relative h-screen flex items-center justify-start">
        {/* --- Background Image 1 --- */}
        <div className="absolute inset-0 z-0">
            <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(/images/image-2.png)` }} 
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
       <motion.div 
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative z-10 px-6 max-w-xl ml-8"
>
  <h1 className="text-6xl md:text-8xl text-red-600 font-extrabold leading-none font-['Bebas_Neue',_sans-serif]">
    WELCOME
  </h1>
  <h2 className="text-lg md:text-2xl text-white mt-3 tracking-wider font-['Bebas_Neue',_sans-serif]">
    DOCUMENTATION & CONTAINMENT DIVISION
  </h2>
  <p className="mt-4 text-base md:text-md text-slate-300 leading-relaxed">
    You have accessed a secure terminal. All activities are monitored. Unauthorized access is a breach of protocol.
  </p>
</motion.div>



    </section>
);

// This section has no background image
const IntroductionSection = () => (
  <section className="py-20 md:py-28 bg-black relative">
    <div className="container mx-auto px-6 max-w-3xl relative z-10">
      
      <div className="relative">
        {/* Background image for text only */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center rounded-lg filter grayscale brightness-50"
          style={{ backgroundImage: `url(/images/image-1.png)` }}
        ></div>
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

        {/* Text content */}
        <div className="relative p-8 text-left">
          <h2 className="text-4xl text-white font-['Bebas_Neue',_sans-serif]">
            WHAT LURKS IN THE SHADOWS?
          </h2>
          <div className="w-16 h-0.5 bg-red-600 mt-4 mb-6"></div>
          <p className="text-lg text-slate-200 leading-relaxed">
            The world is not as it seems. Anomalies defy the laws of nature, hidden from public view. The Whispering Archives is the sole repository of information on these entities. Our mission is to document, contain, and protect.
          </p>
        </div>
      </div>

    </div>
  </section>
);

const IntroductionSection1 = () => (
  <section className="py-20 md:py-28 bg-black relative">
    <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
      
      <div className="relative">
        {/* Background image for text only */}
       <div
  className="absolute inset-0 w-full h-full bg-cover bg-center rounded-lg"
  style={{ backgroundImage: `url(/images/image-3.png)` }}
></div>
<div className="absolute inset-0 bg-red-900/30 rounded-lg mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/20 rounded-lg"></div>

        {/* Text content */}
        <div className="relative p-8">
          <h2 className="text-4xl text-white font-['Bebas_Neue',_sans-serif]">
            WHAT HIDES IN THE DARKNESS?
          </h2>
          <div className="w-16 h-0.5 bg-red-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-slate-200 leading-relaxed">
          Reality conceals many impossibilities. These anomalies escape the laws of nature, unseen by the world. Within The Whispering Archives, their truths are kept. Our mission: to observe, to contain, and to guard.   </p>
        </div>
      </div>

    </div>
  </section>
);


// This section WILL HAVE a new background image
const CallToActionSection = () => (
    <section className="relative py-20 md:py-32 text-center">
        {/* --- Background Image 2 --- */}
        <div className="absolute inset-0 z-0">
            <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(/images/image-1.png)` }} 
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
            <h2 className="text-4xl text-white font-['Bebas_Neue',_sans-serif]">YOUR DUTY AWAITS.</h2>
            <div className="w-16 h-0.5 bg-red-600 mx-auto mt-4 mb-6"></div>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                If you have the clearance, proceed to the terminal. What you find inside is on your authority.
            </p>
            <div className="mt-10">
                 <Link href="/login" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent text-lg text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white transition-colors">
                    ACCESS TERMINAL <ArrowRight />
                </Link>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-6 bg-black border-t border-red-900/50">
      <div className="container mx-auto px-6 text-center text-xs text-red-500/50">
        <p>FOR AUTHORIZED PERSONNEL ONLY. ALL DATA IS PROPERTY OF THE [REDACTED] INITIATIVE.</p>
      </div>
    </footer>
);