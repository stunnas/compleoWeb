'use client';
import Link from "next/link";
import { JSX, SVGProps, useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TypewriterEffect } from "../components/typewriterEffect";

const words = [
  {
    text: 'Compleo.',
  }
]

export default function Hero() {
  const controls = useAnimation();
  const isMountedRef = useRef(false);




  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    }
  }, []);

  useEffect(() => {
    const section = document.querySelector('.min-h-\\[120vh\\]') as HTMLElement;
    const phoneImage = document.querySelector('.phone-image') as HTMLImageElement; // Add a class to your image for selection
  
    if (section && phoneImage) {

      const handleScroll = () => {
        const scrollY = window.scrollY;
        const sectionRect = section.getBoundingClientRect();
        const phoneImageHeight = phoneImage.offsetHeight;
        const sectionTop = window.scrollY + sectionRect.top;
        const sectionBottom = sectionTop + section.offsetHeight;

        const offset = 100;
        const startAnimate = sectionTop;
        const endAnimate = sectionBottom - phoneImageHeight - offset ;
  
        if (scrollY > startAnimate && scrollY < endAnimate) {
          const percentage = (scrollY - startAnimate) / (endAnimate - startAnimate);
          const translateY = percentage * (section.offsetHeight - phoneImageHeight - offset);
          if (isMountedRef.current) {
            controls.start({ y: translateY });
          }
        } else if (scrollY <= startAnimate) {
          if (isMountedRef.current) {
            controls.start({ y: 0 });
          }
        } else if (scrollY >= endAnimate) {
          if (isMountedRef.current) {
            controls.start({ y: section.offsetHeight - phoneImageHeight - offset });
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }
  }, [isMountedRef, controls])

  return (
    <section className="w-full py-12 min-h-[120vh]">
      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row lg:gap-12 xl:gap-24">
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-24">
          <div className=" flex-1 text-center lg:text-left space-y-6">
            <h2 className="text-4xl flex justify-center lg:justify-start font-bold tracking-tighter"><TypewriterEffect words={words} className="flex justify-start items-center"/></h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">The Compleo mobile app is an innovative personal assistant designed to optimize your daily routine by harnessing the power of artificial intelligence, tailored specifically to your unique lifestyle and productivity patterns. This cutting-edge app analyzes your historical data on tasks completed and emotional states to generate a personalized daily regimen and schedule, empowering you to maximize every day with unprecedented efficiency.</p>
            <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
            >
              Download
            </Link>
            
          </div>

          <div className="space-y-16">
            <div className="flex flex-col items-center p-8 shadow-custom-glow rounded-lg bg-white lg:items-start">
              <div className="flex flex-row items-center space-x-2">
                <LightbulbIcon className="text-blue-500 w-10 h-10 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Stay Organized</h3>
              </div>
              <p className="text-gray-600">Keep all your tasks and projects in one place and never miss a deadline again.</p>
            </div>
            <div className="flex flex-col items-center p-8 shadow-custom-glow rounded-lg bg-white lg:items-start">
              <div className="flex flex-row items-center space-x-2">
                <BarChartIcon className="text-green-500 w-10 h-10 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
              </div>
              <p className="text-gray-600">Visualize your achievements and keep motivated with insightful charts and reports.</p>
            </div>
            <div className="flex flex-col items-center p-8 shadow-custom-glow rounded-lg bg-white lg:items-start">
              <div className="flex flex-row items-center space-x-2">
                <UsersIcon className="text-purple-500 w-10 h-10 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Collaborate Effectively</h3>
              </div>
              <p className="text-gray-600">Work together with your team, share feedback, and achieve more together.</p>
            </div>
          </div>
        </div>
        <motion.div initial={{scale: 1}} animate={controls} className="hidden lg:block lg:w-1/2 justify-center items-start ">
          <img src="/images/compleo-preview.png" alt="compleo iphone preview" className="mx-auto h-auto max-w-lg object-cover phone-image"/>
        </motion.div>

      </div>
    </section>
  )
}

function BarChartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}
function LightbulbIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}
function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}