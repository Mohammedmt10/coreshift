"use client"
import { LeftRotator } from "../components/leftRotator"
import { User } from "@/app/icons/user"
import { RightRotator } from "../components/rightRotator"
import { motion } from "motion/react"
export const Page2 = () => {

    const container = {
        hidden : { opacity : 0 },
        visible : {
            opacity : 1,
            transition : {
                staggerChildren : 0.05
            }
        }
    }

    const container2 = {
        hidden : { opacity : 0 },
        visible : {
            opacity : 1,
            transition : {
                delay : 0.4,
                staggerChildren : 0.08,
            }
        }
    }

    const children1 = {
        hidden : { opacity : 0 , filter : "blur(10px)"},
        visible : { opacity : 1 , filter : "blur(0px)", transition : { duration : 0.3 }},
    }

    const children2 = {
        hidden : { opacity : 0 , filter : "blur(10px)"},
        visible : { opacity : 1 , filter : "blur(0px)", transition : { duration : 0.3 }},
    }

return (
    <div className="pt-50 min-h-screen items-center relative w-full overflow-hidden">
        <LeftRotator />
        <div className=" w-fit mx-auto flex flex-col items-center gap-10 text-center">
            <motion.div
            initial={{
                scale : 0
            }}
             whileInView={{
                scale :1
             }}
             transition={{
                duration : 0.3
             }}
            >
                <User />
            </motion.div>
            <motion.div className="font-bold text-7xl text-center font-inter tracking-tighter">
                <motion.div className="flex justify-center" variants={container} initial={"hidden"} whileInView={"visible"}>
                    {["C","o","r","e"," ","H","R"].map((alphabet , idx) => (
                    <motion.span
                    variants={children1}
                    key={idx} className="inline-block">
                        {alphabet == " " ? <>&nbsp;</> : alphabet}
                    </motion.span>
                ))}
                </motion.div>
                <motion.div className="flex justify-center" variants={container2} initial={"hidden"} whileInView={"visible"}>
                    {["S","o","l","u","t","i","o","n","s"].map((alphabet , idx) => (
                    <motion.span
                    variants={children2}
                    key={idx} className="inline-block">
                        {alphabet == " " ? <>&nbsp;</> : alphabet}
                    </motion.span>
                ))}
                </motion.div>
            </motion.div>
            <motion.div 
            initial={{
                opacity : 0,
            }}
            whileInView={{
                opacity : 1,
            }}
            transition={{
                duration : 0.4
            }}
            className="text-neutral-500">
                Streamline HR processes in one centralized <br />
                platform enhancing team transparency
            </motion.div>
            <motion.button
            initial={{
                scale : 0
            }}
            whileInView={{
                scale : 1
            }}
            transition={{
                duration : 0.3
            }}
            className="py-2 px-16 rounded-xl bg-[#865bf4] shadow-[inset_0px_-3px_5px_rgb(112, 52, 253,0.3)] shadow-[inset_0px_3px_3px_rgba(255,255,255,0.3)] text-white cursor-pointer">
                Learn more
            </motion.button>
        </div>
        <RightRotator />
    </div>
  )
}
