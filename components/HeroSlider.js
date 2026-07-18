"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSlider({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-[#1F1F1F]">
      <div className="absolute inset-0 w-full">
        {slides.map((item, i) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt=""
              fill
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 100vw"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[195px] w-full items-end justify-center px-4 py-6 sm:min-h-[78vh] md:min-h-[82vh] md:py-14">
        <div className="flex gap-2" role="tablist" aria-label="Hero slides">
          {slides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition ${
                i === index ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
