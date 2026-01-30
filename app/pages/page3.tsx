"use client";
import Image from "next/image";
import {
  animate,
  motion,
  useAnimate,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useEffect } from "react";
import { Card } from "@/app/components/card";
import { Clock } from "../icons/clock";

export const Page3 = () => {
  const t = useMotionValue(0);
  const [scope, animate1] = useAnimate();
  const CardTwo1stRotation = async () => {
    await animate1(
      ".component1",
      { scale: [1, 1.3], opacity: 0 },
      { duration: 0.3 },
    );
    await animate1(
      ".component2",
      { scale: 1.2, zIndex: 10, y: -20 },
      { duration: 0.3 },
    );
    await animate1(
      ".component3",
      { scale: 1.2, zIndex: 5, y: -25 },
      { duration: 0.3 },
    );

    await animate1(
      ".component1",
      { scale: 0.8, y: 30, zIndex: 0 },
      { duration: 0.3 },
    );

    await animate1(".component1", { opacity: 1 }, { duration: 0.3 });
  };

  const CardTwo2ndRotation = async () => {
    await animate1(
      ".component2",
      { scale: [1, 1.2], y: -25, opacity: 0 },
      { duration: 0.3 },
    );
    await animate1(
      ".component3",
      { scale: 1.3, zIndex: 10, y: -35 },
      { duration: 0.3 },
    );
    await animate1(
      ".component1",
      { scale: 0.9, zIndex: 5, y: 25 },
      { duration: 0.3 },
    );

    await animate1(
      ".component2",
      { scale: 0.85, y: 25, zIndex: 0 },
      { duration: 0.3 },
    );

    await animate1(".component2", { opacity: 1 }, { duration: 0.2 });
  };

  const CardTwo3rdRotation = async () => {
    await animate1(
      ".component3",
      { scale: [1, 1.2], y: -25, opacity: 0 },
      { duration: 0.3 },
    );
    await animate1(
      ".component1",
      { scale: 1, zIndex: 10, y: 0 },
      { duration: 0.3 },
    );
    await animate1(
      ".component2",
      { scale: 1, zIndex: 5, y: 0 },
      { duration: 0.3 },
    );

    await animate1(
      ".component3",
      { scale: 1, y: 0, zIndex: 0 },
      { duration: 0.3 },
    );

    await animate1(".component3", { opacity: 1 }, { duration: 0.2 });
  };

  const Card2Animations = async () => {
    // div 1
    await CardTwo1stRotation();

    // div 2
    await CardTwo2ndRotation();

    // 3rd div
    await CardTwo3rdRotation();
  };
  useEffect(() => {
    const controls = animate(t, 1, {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    });
    Card2Animations();
    return () => controls.stop();
  }, []);

  return (
    <div ref={scope} className="mt-15 min-h-screen">
      <div>
        <h1 className="mx-auto w-fit font-inter text-7xl font-semibold tracking-tighter">
          Built for everyone
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-center leading-5 tracking-tight text-neutral-400">
          Thousand of business, from startups to enterprises, use CoreShift to
          handle payments.
        </p>
      </div>
      <div className="mx-auto mt-10 grid grid-cols-3 grid-rows-2 gap-2 px-30">
        <Card
          mainComponent={
            <div className="flex h-full w-full items-center justify-around gap-4 overflow-hidden py-10">
              <div className="h-full w-full max-w-20 rounded-r-2xl bg-linear-to-b from-neutral-200 via-neutral-300 to-neutral-200"></div>
              <div className="">
                <Image
                  src={"/images/p3topleftPic.png"}
                  className="h-35 shadow-xl"
                  alt={"someImage"}
                  height={500}
                  width={500}
                />
              </div>
              <div className="h-full w-full max-w-20 rounded-l-2xl bg-linear-to-b from-neutral-200 via-neutral-300 to-neutral-200"></div>
            </div>
          }
          title={"For HR professionals"}
          paragraph="Use a single cloud system for your empoloyee candidate and HR processes info."
        />
        <Card
          className="relative"
          mainComponent={
            <div className="h-full">
              <div className="absolute inset-0 z-0 h-full mask-x-from-10%">
                {Array.from({ length: 4 }).map((_, index) => {
                  const phase = index * 0.25;
                  const scale = useTransform(t, (v) => (v + phase) % 1);

                  return (
                    <motion.div
                      style={{
                        scale,
                      }}
                      key={index}
                      className="absolute inset-x-0 z-10 mx-auto aspect-square h-65 -translate-y-5 rounded-full border-2 border-neutral-400"
                    ></motion.div>
                  );
                })}
              </div>
              <div className="relative z-40 flex h-full w-full flex-col items-center justify-center">
                <motion.div className="flex h-fit flex-col">
                  <motion.div
                    style={{}}
                    className="component1 z-10 flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-2 font-medium tracking-tight shadow-p3c2container"
                  >
                    <motion.div className="rounded-xl bg-linear-to-br from-[#5ed7ff] via-[#16baf0] to-[#30beee] p-2.5 text-white shadow-p3c2subcontainer">
                      <Clock />
                    </motion.div>
                    Access Real-Time Insights
                  </motion.div>
                  <div className="component2 z-5 -mt-8 flex scale-90 items-center gap-3 rounded-lg border border-neutral-200 bg-white p-2 shadow-p3c2container">
                    <div className="rounded-md bg-blue-400 p-1.5 text-white">
                      <Clock />
                    </div>
                    Access Real-Time Insights
                  </div>
                  <div className="component3 -mt-8 flex scale-80 items-center gap-3 rounded-lg border border-neutral-200 bg-white p-2 shadow-p3c2container">
                    <div className="rounded-md bg-blue-400 p-1.5 text-white">
                      <Clock />
                    </div>
                    Access Real-Time Insights
                  </div>
                </motion.div>
              </div>
            </div>
          }
          title="For managers & leaders"
          paragraph="Get always up-to-date data and monitor performance of the company."
        />
        <div className="h-full w-full rounded-2xl border-2 border-neutral-200 bg-white"></div>
      </div>
    </div>
  );
};
