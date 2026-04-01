/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background selection:bg-white/20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <div 
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          gnolbgn<sup className="text-xs">®</sup>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-foreground transition-colors">Home</a>
          <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Studio</a>
          <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">About</a>
          <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Journal</a>
          <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Reach Us</a>
        </div>

        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.03]">
          Let’s go
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-40 text-center md:py-[90px]">
        <div className="flex flex-col items-center justify-center max-w-7xl">
          <h1 
            className="animate-fade-rise text-5xl leading-[0.95] font-normal tracking-[-2.46px] sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Ngblong
          </h1>
          
          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            ở đây lầ tất cả các thông tin của mình 
          </p>

          <button className="animate-fade-rise-delay-2 liquid-glass mt-12 cursor-pointer rounded-full px-14 py-5 text-base font-medium text-foreground transition-transform hover:scale-[1.03]">
            Begin Journey
          </button>
        </div>
      </section>

      {/* Minimalist Footer or bottom spacing if needed, but the prompt focuses on hero */}
    </main>
  );
}
