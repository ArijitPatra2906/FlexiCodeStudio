"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const imageElement = imageRef.current;
      if (!imageElement) return; // Ensure the element exists

      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-0 md:pt-32 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
            Code, Execute, Share
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            A powerful code editor that supports multiple languages and seamless
            code sharing.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link
            href="/code-editor"
            className="px-6 py-3 bg-white rounded-lg text-gray-700 text-sm font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
          <Link
            href="/community"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            Join the Community
          </Link>
        </div>

        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.png"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
