"use client";
import Image from 'next/image'
import { easeIn, motion, useAnimate, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react"
import { useRef } from 'react';


export const LeftRotator = () => {
    
    
    const scope = useRef(null);
    const { scrollYProgress } = useScroll();

  const rotation = useMotionValue(0);
       
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        rotation.set(latest * Math.PI * 2);
    });


  return (
        <div className='flex ml-40' ref={scope}>
        {Array.from({ length: 8 }).map((_, index) => {
        const smoothRotation = useSpring(rotation, {
            stiffness: 20,
            damping: 30,
            mass: 1.5,
        });
        const angleStep = (2 * Math.PI) / 8;

        const angle = useTransform(smoothRotation, (r) => r + index * angleStep);

        const x = useTransform(angle, (a) => Math.cos(a) * 290);
        const y = useTransform(angle, (a) => Math.sin(a) * 250);

        const scale = useTransform(
          angle,
          [-Math.PI, 0, Math.PI],
          [0.8, 1, 0.8]
        );


        return (
          <motion.div
            key={index}
            style={{ x, y, scale }}
            className="absolute rounded-2xl -translate-x-80 overflow-hidden h-50 w-50"
          >
            <Image
              src="/images/leftRotator1.png"
              fill
              alt="image"
              className='object-cover object-top rounded-full'
            />
          </motion.div>
        );
      })}
    </div>
  )
}

