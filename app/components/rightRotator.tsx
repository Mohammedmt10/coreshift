"use client";
import { motion, useAnimate } from 'motion/react'
import Image from 'next/image'
import { useEffect } from 'react';

export const RightRotator = () => {

    const [scope , animate] = useAnimate();

    const rightPositions = [{
        x : 0,
        y : 0,

    },{
        x : 0,
        y : 200
    },{
        x : 140,
        y : 240
    },{
        x : 280,
        y : 250
    },{
        x : 410,
        y : 200
    },{
        x : 410,
        y :0
    },{
        x : 280,
        y : -100
    },{
        x : 130,
        y : -85
    }]

    useEffect(() => {
        animate([
            [".image1" , rightPositions[1] , { duration : 0.5}],
            [".image1" , rightPositions[2] , { duration : 0.5}],
            [".image1" , rightPositions[3] , { duration : 0.5}],
            [".image1" , rightPositions[4] , { duration : 0.5}],
            [".image1" , rightPositions[5] , { duration : 0.5}],
            [".image1" , rightPositions[6] , { duration : 0.5}],
            [".image1" , rightPositions[7] , { duration : 0.5}],
            [".image1" , rightPositions[0] , { duration : 0.5}]
        ])
        
        animate([
            [".image2" , rightPositions[2] , { duration : 0.5}],
            [".image2" , rightPositions[3] , { duration : 0.5}],
            [".image2" , rightPositions[4] , { duration : 0.5}],
            [".image2" , rightPositions[5] , { duration : 0.5}],
            [".image2" , rightPositions[6] , { duration : 0.5}],
            [".image2" , rightPositions[7] , { duration : 0.5}],
            [".image2" , rightPositions[0] , { duration : 0.5}],
            [".image2" , rightPositions[1] , { duration : 0.5}]
        ])
        
        animate([
            [".image3" , rightPositions[3] , { duration : 0.5}],
            [".image3" , rightPositions[4] , { duration : 0.5}],
            [".image3" , rightPositions[5] , { duration : 0.5}],
            [".image3" , rightPositions[6] , { duration : 0.5}],
            [".image3" , rightPositions[7] , { duration : 0.5}],
            [".image3" , rightPositions[0] , { duration : 0.5}],
            [".image3" , rightPositions[1] , { duration : 0.5}],
            [".image3" , rightPositions[2] , { duration : 0.5}]
        ])
        
        animate([
            [".image4" , rightPositions[4] , { duration : 0.5}],
            [".image4" , rightPositions[5] , { duration : 0.5}],
            [".image4" , rightPositions[6] , { duration : 0.5}],
            [".image4" , rightPositions[7] , { duration : 0.5}],
            [".image4" , rightPositions[0] , { duration : 0.5}],
            [".image4" , rightPositions[1] , { duration : 0.5}],
            [".image4" , rightPositions[2] , { duration : 0.5}],
            [".image4" , rightPositions[3] , { duration : 0.5}]
        ])

        animate([
            [".image5" , rightPositions[5] , { duration : 0.5}],
            [".image5" , rightPositions[6] , { duration : 0.5}],
            [".image5" , rightPositions[7] , { duration : 0.5}],
            [".image5" , rightPositions[0] , { duration : 0.5}],
            [".image5" , rightPositions[1] , { duration : 0.5}],
            [".image5" , rightPositions[2] , { duration : 0.5}],
            [".image5" , rightPositions[3] , { duration : 0.5}],
            [".image5" , rightPositions[4] , { duration : 0.5}]
        ])

        animate([
            [".image6" , rightPositions[6] , { duration : 0.5}],
            [".image6" , rightPositions[7] , { duration : 0.5}],
            [".image6" , rightPositions[0] , { duration : 0.5}],
            [".image6" , rightPositions[1] , { duration : 0.5}],
            [".image6" , rightPositions[2] , { duration : 0.5}],
            [".image6" , rightPositions[3] , { duration : 0.5}],
            [".image6" , rightPositions[4] , { duration : 0.5}],
            [".image6" , rightPositions[5] , { duration : 0.5}]
        ])

        animate([
            [".image7" , rightPositions[7] , { duration : 0.5}],
            [".image7" , rightPositions[0] , { duration : 0.5}],
            [".image7" , rightPositions[1] , { duration : 0.5}],
            [".image7" , rightPositions[2] , { duration : 0.5}],
            [".image7" , rightPositions[3] , { duration : 0.5}],
            [".image7" , rightPositions[4] , { duration : 0.5}],
            [".image7" , rightPositions[5] , { duration : 0.5}],
            [".image7" , rightPositions[6] , { duration : 0.5}]
        ])

        animate([
            [".image8" , rightPositions[0] , { duration : 0.5}],
            [".image8" , rightPositions[1] , { duration : 0.5}],
            [".image8" , rightPositions[2] , { duration : 0.5}],
            [".image8" , rightPositions[3] , { duration : 0.5}],
            [".image8" , rightPositions[4] , { duration : 0.5}],
            [".image8" , rightPositions[5] , { duration : 0.5}],
            [".image8" , rightPositions[6] , { duration : 0.5}],
            [".image8" , rightPositions[7] , { duration : 0.5}]
        ])
        
    },[animate])
    
  return (
    <div ref={scope} className=''>
        <div className=''>
            <motion.div
            initial={rightPositions[0]}
            className='image1 max-w-30 absolute right-0 top-1/4 mr-40 rounded-2xl overflow-hidden'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
            <motion.div 
            initial={rightPositions[1]}
            className='image2 max-w-30 right-0 top-1/4 absolute mr-40 rounded-2xl overflow-hidden'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
            <motion.div 
            initial={rightPositions[2]}
            className='image3 max-w-30 absolute right-0 top-1/4 mr-40 rounded-2xl overflow-hidden'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
            <motion.div 
            initial={rightPositions[3]}
            className='image4 max-w-30 absolute right-0 top-1/4 mr-40 rounded-2xl overflow-hidden'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
        </div>
        <div className=''>
            <motion.div
            initial={rightPositions[4]}
            className='image5 max-w-30 rounded-2xl overflow-hidden right-0 top-1/4 absolute mr-40'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
            <motion.div
            initial ={rightPositions[5]}
            className=' image6 max-w-30 rounded-2xl overflow-hidden my-2 right-0 top-1/4 mr-40 absolute'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
            <motion.div
            initial={rightPositions[6]}
            className=' image7 max-w-30 rounded-2xl overflow-hidden my-2 right-0 top-1/4 mr-40 absolute'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
            <motion.div 
            initial = {rightPositions[7]}
            className=' image8 max-w-30 rounded-2xl overflow-hidden right-0 top-1/4 mr-40 absolute'>
                <Image src={"/images/leftRotator1.png"} className='h-full w-full' height={500} width={500} alt='image' />
            </motion.div>
        </div>
    </div>
  )
}
