"use client";
import { motion, useAnimate, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react'
import Image from 'next/image'
import { useEffect, useRef } from 'react';

export const RightRotator = () => {

    const scope = useRef(null)
    const isScrolled = useRef<boolean>(false)
    
    const rotation = useMotionValue(0);
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress , "change" , (latest) => {
        rotation.set(latest * Math.PI * 2)
    })

return (
   <div className='flex translate-x-full -translate-y-100'>
        {Array.from({ length : 8 }).map((_, index) => {
            const smoothRotation = useSpring(rotation , {
            stiffness: 20,
            damping: 30,
            mass: 1.5,
        })
            const angleStep = (2 * Math.PI) / 8;

            const angle = useTransform(smoothRotation , (r) => r + index * angleStep);
            
            const x = useTransform(angle, (a) => Math.cos(a) * 290);
            const y = useTransform(angle, (a) => Math.sin(a) * 250);

            const scale = useTransform(angle , [-Math.PI , 0 , Math.PI] , [0.8 , 1 ,0.8])
            return (
            <motion.div
            style={{ x , y , scale}}
            key={index}
            className='absolute overflow-hidden rounded-2xl'
            >
                <Image src={"/images/leftRotator1.png"} alt='RotatorImage' 
              width={150}
              height={150} />
            </motion.div>
        )
        })} 
   </div>
  )
}
