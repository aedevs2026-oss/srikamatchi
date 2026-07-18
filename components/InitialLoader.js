"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-background px-4 py-20"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="w-full max-w-md text-center">
        {/* Diya lamp signature animation */}
        <div className="relative mx-auto mb-6 h-24 w-24">
          {/* soft glow behind the flame */}
          <div className="absolute left-1/2 top-2 h-10 w-10 -translate-x-1/2 rounded-full bg-primary/25 blur-md motion-safe:animate-glowPulse" />

          <svg
            viewBox="0 0 100 100"
            className="relative h-full w-full"
            aria-hidden="true"
          >
            {/* lamp bowl */}
            <path
              d="M20 70 C20 84 36 92 50 92 C64 92 80 84 80 70 C80 62 70 60 50 60 C30 60 20 62 20 70 Z"
              className="fill-primary"
            />
            <ellipse cx="50" cy="70" rx="22" ry="6" className="fill-secondary" />
            {/* lamp stem */}
            <rect x="47" y="92" width="6" height="6" rx="1" className="fill-primary" />

            {/* flame group — animated */}
            <g
              className="origin-[50px_58px] motion-safe:animate-flameFlicker"
              style={{ transformBox: "fill-box" }}
            >
              <path
                d="M50 22 C58 34 62 42 62 50 C62 60 56 66 50 66 C44 66 38 60 38 50 C38 42 42 34 50 22 Z"
                className="fill-secondary"
              />
              <path
                d="M50 38 C54 45 56 50 56 55 C56 60 53 63 50 63 C47 63 44 60 44 55 C44 50 46 45 50 38 Z"
                className="fill-primary"
              />
            </g>
          </svg>
        </div>

        {/* Logo */}
        <div className="mb-5 flex justify-center motion-safe:animate-fadeInUp">
          <Image
            src="/logo.png"
            alt="Sri Kamatchi Electronics & Furnitures"
            width={180}
            height={54}
            className="h-10 w-auto object-contain sm:h-12"
            priority
          />
        </div>

        {/* Progress bar synced to the 3s load window */}
        <div className="mx-auto mb-3 w-48 max-w-full">
          <div className="mb-2 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.24em] text-body/70">
            <span>Loading</span>
            <span className="text-primary">100%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-border/80">
            <div className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-primary motion-safe:animate-fillBar" />
          </div>
        </div>

        {/* Welcome content */}
        <div className="motion-safe:animate-fadeInUp">
          <h2 className="text-lg font-semibold text-foreground">
            வணக்கம்! சிறந்த சலுகைகள் உங்களுக்காக
          </h2>
          <p className="mt-2 text-sm text-body">
            உங்கள் இல்லத்திற்கான சிறந்த தேர்வுகள் தயாராகின்றன...
          </p>
          <p className="mt-1 text-xs text-body/70">
            Loading the best deals for your home
          </p>
        </div>
      </div>
    </div>
  );
}