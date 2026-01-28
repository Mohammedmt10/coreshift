"use client";
import Image from 'next/image'
import { easeIn, motion, useAnimate, useMotionValueEvent, useScroll } from "motion/react"
import { useRef } from 'react';


export const LeftRotator = () => {
    
    
    const [scope, animate] = useAnimate();
    const isScrolled = useRef<boolean>(false)
    const { scrollYProgress } = useScroll();


    const leftPositions = [{
        x : 0,
        y : 0,

    },{
        x : 0,
        y : 200
    },{
        x : -140,
        y : 240
    },{
        x : -280,
        y : 250
    },{
        x : -410,
        y : 200
    },{
        x : -410,
        y :0
    },{
        x : -280,
        y : -100
    },{
        x : -130,
        y : -85
    }]

         
    const handleAnimation = async (duration : number) => {
        console.log(isScrolled)
        if(isScrolled.current) {
            return;
        }
        isScrolled.current = true
        await Promise.all([
            animate([
                [".image1" , leftPositions[1] , { duration : duration , ease : easeIn}],
                [".image1" , leftPositions[2] , { duration : duration , ease : easeIn}],
                [".image1" , leftPositions[3] , { duration : duration , ease : easeIn}],
                [".image1" , leftPositions[4] , { duration : duration , ease : easeIn}],
                [".image1" , leftPositions[5] , { duration : duration , ease : easeIn}],
                [".image1" , leftPositions[6] , { duration : duration , ease : easeIn}],
                [".image1" , leftPositions[7] , { duration : duration , ease : easeIn}],
                [".image1" , leftPositions[0] , { duration : duration , ease : easeIn}]
            ]),
            
            animate([
                [".image2" , leftPositions[2] , { duration : duration , ease : easeIn}],
                [".image2" , leftPositions[3] , { duration : duration , ease : easeIn}],
                [".image2" , leftPositions[4] , { duration : duration , ease : easeIn}],
                [".image2" , leftPositions[5] , { duration : duration , ease : easeIn}],
                [".image2" , leftPositions[6] , { duration : duration , ease : easeIn}],
                [".image2" , leftPositions[7] , { duration : duration , ease : easeIn}],
                [".image2" , leftPositions[0] , { duration : duration , ease : easeIn}],
                [".image2" , leftPositions[1] , { duration : duration , ease : easeIn}]
            ]),
            
            animate([
                [".image3" , leftPositions[3] , { duration : duration , ease : easeIn}],
                [".image3" , leftPositions[4] , { duration : duration , ease : easeIn}],
                [".image3" , leftPositions[5] , { duration : duration , ease : easeIn}],
                [".image3" , leftPositions[6] , { duration : duration , ease : easeIn}],
                [".image3" , leftPositions[7] , { duration : duration , ease : easeIn}],
                [".image3" , leftPositions[0] , { duration : duration , ease : easeIn}],
                [".image3" , leftPositions[1] , { duration : duration , ease : easeIn}],
                [".image3" , leftPositions[2] , { duration : duration , ease : easeIn}]
            ]),
            
            animate([
                [".image4" , leftPositions[4] , { duration : duration , ease : easeIn}],
                [".image4" , leftPositions[5] , { duration : duration , ease : easeIn}],
                [".image4" , leftPositions[6] , { duration : duration , ease : easeIn}],
                [".image4" , leftPositions[7] , { duration : duration , ease : easeIn}],
                [".image4" , leftPositions[0] , { duration : duration , ease : easeIn}],
                [".image4" , leftPositions[1] , { duration : duration , ease : easeIn}],
                [".image4" , leftPositions[2] , { duration : duration , ease : easeIn}],
                [".image4" , leftPositions[3] , { duration : duration , ease : easeIn}]
            ]),

            animate([
                [".image5" , leftPositions[5] , { duration : duration , ease : easeIn}],
                [".image5" , leftPositions[6] , { duration : duration , ease : easeIn}],
                [".image5" , leftPositions[7] , { duration : duration , ease : easeIn}],
                [".image5" , leftPositions[0] , { duration : duration , ease : easeIn}],
                [".image5" , leftPositions[1] , { duration : duration , ease : easeIn}],
                [".image5" , leftPositions[2] , { duration : duration , ease : easeIn}],
                [".image5" , leftPositions[3] , { duration : duration , ease : easeIn}],
                [".image5" , leftPositions[4] , { duration : duration , ease : easeIn}]
            ]),

            animate([
                [".image6" , leftPositions[6] , { duration : duration , ease : easeIn}],
                [".image6" , leftPositions[7] , { duration : duration , ease : easeIn}],
                [".image6" , leftPositions[0] , { duration : duration , ease : easeIn}],
                [".image6" , leftPositions[1] , { duration : duration , ease : easeIn}],
                [".image6" , leftPositions[2] , { duration : duration , ease : easeIn}],
                [".image6" , leftPositions[3] , { duration : duration , ease : easeIn}],
                [".image6" , leftPositions[4] , { duration : duration , ease : easeIn}],
                [".image6" , leftPositions[5] , { duration : duration , ease : easeIn}]
            ]),

            animate([
                [".image7" , leftPositions[7] , { duration : duration , ease : easeIn}],
                [".image7" , leftPositions[0] , { duration : duration , ease : easeIn}],
                [".image7" , leftPositions[1] , { duration : duration , ease : easeIn}],
                [".image7" , leftPositions[2] , { duration : duration , ease : easeIn}],
                [".image7" , leftPositions[3] , { duration : duration , ease : easeIn}],
                [".image7" , leftPositions[4] , { duration : duration , ease : easeIn}],
                [".image7" , leftPositions[5] , { duration : duration , ease : easeIn}],
                [".image7" , leftPositions[6] , { duration : duration , ease : easeIn}]
            ]),

            animate([
                [".image8" , leftPositions[0] , { duration : duration , ease : easeIn}],
                [".image8" , leftPositions[1] , { duration : duration , ease : easeIn}],
                [".image8" , leftPositions[2] , { duration : duration , ease : easeIn}],
                [".image8" , leftPositions[3] , { duration : duration , ease : easeIn}],
                [".image8" , leftPositions[4] , { duration : duration , ease : easeIn}],
                [".image8" , leftPositions[5] , { duration : duration , ease : easeIn}],
                [".image8" , leftPositions[6] , { duration : duration , ease : easeIn}],
                [".image8" , leftPositions[7] , { duration : duration , ease : easeIn}]
            ]),
        ])
    isScrolled.current = false
    }

    useMotionValueEvent(scrollYProgress , "change" , (latest) => {
        if(latest - scrollYProgress.getPrevious() > 0) {
            handleAnimation(0.4);
        }
    })
       

  return (
        <div className='flex ml-40' ref={scope}>
        <div>
            <motion.div
            initial={leftPositions[0]}
            className='image1 absolute max-w-30 rounded-2xl overflow-hidden'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
            <motion.div
            initial={leftPositions[1]}
            className='image2 max-w-30 rounded-2xl overflow-hidden absolute my-2'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
            <motion.div
            initial={leftPositions[2]}
            className='image3 max-w-30 rounded-2xl overflow-hidden my-2 absolute'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
            <motion.div
            initial={leftPositions[3]}
            className='image4 max-w-30 rounded-2xl overflow-hidden absolute'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
        </div>
        <div className=''>
            <motion.div
            initial={leftPositions[4]}
            className='image5 max-w-30 rounded-2xl overflow-hidden absolute'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
            <motion.div
            initial ={leftPositions[5]}
            className='image6 max-w-30 rounded-2xl overflow-hidden my-2 absolute'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
            <motion.div
            initial={leftPositions[6]}
            className='image7 max-w-30 rounded-2xl overflow-hidden my-2 absolute'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
            <motion.div 
            initial = {leftPositions[7]}
            className='image8 max-w-30 rounded-2xl overflow-hidden  absolute'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
        </div>
    </div>
  )
}

