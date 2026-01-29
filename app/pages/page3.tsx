"use client";
import Image from 'next/image'
import { animate, easeIn, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from 'react';

export const Page3 = () => {
  const t = useMotionValue(0);
  
  useEffect(() => {
    const controls = animate(t , 1 , {
      duration : 5,
      repeat : Infinity,
      ease : "linear"
    })
    return () => controls.stop()
  }, [])
  return (
    <div className='min-h-screen mt-15'>
        <div>
            <h1 className='text-7xl mx-auto font-inter tracking-tighter font-semibold w-fit'>
                Built for everyone
            </h1>
            <p className='text-neutral-400 text-center max-w-sm mx-auto mt-3 tracking-tight leading-5'>
                Thousand of business, from startups to enterprises, use
                CoreShift to handle payments.
            </p>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 mx-auto px-30 gap-2 mt-10'>
            
            <div className='bg-white flex flex-col border-2 z-0 rounded-2xl border-neutral-200'>
                <div className=' flex  h-full w-full items-center justify-around gap-4 overflow-hidden py-10'>
                    <div className='bg-linear-to-b from-neutral-200 via-neutral-300 to-neutral-200 h-full rounded-r-2xl w-full max-w-20'></div>
                    <div className=''>
                        
                    <Image src={"/images/p3topleftPic.png"} className='h-35 shadow-xl' alt={"someImage"} height={500} width={500} />
                    </div>
                    <div className='bg-linear-to-b from-neutral-200 via-neutral-300 to-neutral-200 h-full rounded-l-2xl w-full max-w-20'></div>
                </div>
                <div className='px-8 pb-6'>
                    <h1 className='font-semibold text-2xl  font-inter'>For HR professionals</h1>
                    <p className='text-neutral-500 tracking-tighter'>
                        Use a single cloud system for your empoloyee.
                        candidate and HR processes info.
                    </p>
                </div>
            </div>
            <div className='border-2 rounded-2xl border-neutral-200 z-10 overflow-hidden flex flex-col bg-white relative'>
                <div className='mask-x-from-10% h-full z-0 absolute inset-0'>
                    {Array.from({ length : 4 }).map((_,index) => {
                    const phase = index * 0.25 
                    const scale = useTransform(t , v => (v + phase) %1)
                    
                    return (<motion.div
                    style={{
                        scale,
                    }}
                    key={index}
                    className='mx-auto border-2 w-70 h-70 border-neutral-400 rounded-full absolute aspect-square inset-x-0 -translate-y-10 z-10'>
                    </motion.div>)})}
                </div>
                <div className='flex relative justify-center z-40 items-center h-full w-full'>
                    hi there
                </div>
                <div className=' relative z-30 bg-white w-full h-40'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
