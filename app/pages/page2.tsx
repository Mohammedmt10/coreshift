"use client";
import { LeftRotator } from "../components/leftRotator";
import { User } from "@/app/icons/user";
import { RightRotator } from "../components/rightRotator";
import { motion } from "motion/react";
export const Page2 = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const container2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.08,
      },
    },
  };

  const children1 = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3 } },
  };

  const children2 = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3 } },
  };

  return (
    <div className="relative min-h-screen w-full items-center overflow-hidden pt-60">
      <LeftRotator />
      <div className="mx-auto flex w-fit flex-col items-center gap-10 text-center">
        <motion.div
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <User />
        </motion.div>
        <motion.div className="text-center font-inter text-7xl font-bold tracking-tighter">
          <motion.div
            className="flex justify-center"
            variants={container}
            initial={"hidden"}
            whileInView={"visible"}
          >
            {["C", "o", "r", "e", " ", "H", "R"].map((alphabet, idx) => (
              <motion.span
                variants={children1}
                key={idx}
                className="inline-block"
              >
                {alphabet == " " ? <>&nbsp;</> : alphabet}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center"
            variants={container2}
            initial={"hidden"}
            whileInView={"visible"}
          >
            {["S", "o", "l", "u", "t", "i", "o", "n", "s"].map(
              (alphabet, idx) => (
                <motion.span
                  variants={children2}
                  key={idx}
                  className="inline-block"
                >
                  {alphabet == " " ? <>&nbsp;</> : alphabet}
                </motion.span>
              ),
            )}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="text-neutral-500"
        >
          Streamline HR processes in one centralized <br />
          platform enhancing team transparency
        </motion.div>
        <motion.button
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className="shadow-[inset_0px_-3px_5px_rgb(112, 52, 253,0.3)] cursor-pointer rounded-xl bg-[#865bf4] px-16 py-2 text-white shadow-[inset_0px_3px_3px_rgba(255,255,255,0.3)]"
        >
          Learn more
        </motion.button>
      </div>
      <RightRotator />
    </div>
  );
};
