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
import { Shield } from "../icons/shield";
import { Page3Shield } from "../icons/page3Shield";
import { Files } from "../icons/files";
import { Card5Rotator } from "../components/card5Rotator";

export const Page3 = () => {
  const t = useMotionValue(0);
  const [scope, animate1] = useAnimate();
  const CardTwo1stRotation = async () => {
    await animate1(
      ".component1",
      { scale: [1, 1.3], opacity: 0 },
      { duration: 0.4 },
    );
    await animate1(
      ".component2",
      { scale: 1.2, zIndex: 10, y: -20 },
      { duration: 0.4 },
    );
    await animate1(
      ".component3",
      { scale: 1.2, zIndex: 5, y: -25 },
      { duration: 0.4 },
    );

    await animate1(
      ".component1",
      { scale: 0.8, y: 30, zIndex: 0 },
      { duration: 0.4 },
    );

    await animate1(".component1", { opacity: 1 }, { duration: 0.2 });
  };

  const CardTwo2ndRotation = async () => {
    await animate1(
      ".component2",
      { scale: [1, 1.2], y: -25, opacity: 0 },
      { duration: 0.4 },
    );
    await animate1(
      ".component3",
      { scale: 1.3, zIndex: 10, y: -50 },
      { duration: 0.4 },
    );
    await animate1(
      ".component1",
      { scale: 0.9, zIndex: 5, y: 10 },
      { duration: 0.4 },
    );

    await animate1(
      ".component2",
      { scale: 0.85, y: 25, zIndex: 0 },
      { duration: 0.4 },
    );

    await animate1(".component2", { opacity: 1 }, { duration: 0.2 });
  };

  const CardTwo3rdRotation = async () => {
    await animate1(
      ".component3",
      { scale: [1, 1.3], y: -55, opacity: 0 },
      { duration: 0.4 },
    );
    await animate1(
      ".component1",
      { scale: 1, zIndex: 10, y: 0 },
      { duration: 0.4 },
    );
    await animate1(
      ".component2",
      { scale: 1, zIndex: 5, y: 0 },
      { duration: 0.4 },
    );

    await animate1(
      ".component3",
      { scale: 1, y: 0, zIndex: 0 },
      { duration: 0.4 },
    );

    await animate1(".component3", { opacity: 1 }, { duration: 0.2 });
  };

  const Card2Animations = async () => {
    while (true) {
      // div 1
      await CardTwo1stRotation();

      // div 2
      await CardTwo2ndRotation();

      // 3rd div
      await CardTwo3rdRotation();
    }
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
    <div ref={scope} className="mt-15 min-h-screen pb-10">
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
                    <motion.div className="rounded-xl bg-linear-to-br from-[#5ed7ff] via-[#16baf0] to-[#30beee] p-2.5 text-white shadow-subcontainer">
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
        <Card
          mainComponent={
            <div className="relative flex h-full w-full items-end justify-center bg-[repeating-linear-gradient(to_right,transparent_0px,transparent_calc(1.5rem-1px),#e5e7eb_calc(1.5rem-1px),#e5e7eb_1.5rem)] pb-10">
              <div className="z-10 flex h-17 w-17 items-center justify-center rounded-2xl bg-linear-to-br from-[#9166fd] to-[#9166fd] text-purple-100 shadow-subcontainer">
                <Page3Shield />
              </div>
              <motion.div
                whileInView={{
                  x: -60,
                  y: -40,
                  rotate: -10,
                  scale: 1.4,
                  boxShadow: "0px 3px 4px rgba(0,0,0,0.2)",
                }}
                transition={{
                  duration: 0.4,
                }}
                className="absolute flex h-17 w-15 flex-col justify-between rounded-lg border border-neutral-100 bg-white p-2"
              >
                <div className="h-5 w-5 rounded bg-neutral-200"></div>
                <div className="flex flex-col gap-1">
                  <div className="h-2 rounded-2xl bg-neutral-200"></div>
                  <div className="h-2 rounded-2xl bg-neutral-200"></div>
                </div>
              </motion.div>
              <motion.div
                whileInView={{
                  x: 60,
                  y: -40,
                  rotate: 10,
                  scale: 1.4,
                  boxShadow: "0px 3px 4px rgba(0,0,0,0.2)",
                }}
                transition={{
                  duration: 0.4,
                }}
                className="absolute flex h-17 w-15 flex-col items-end justify-between rounded-lg border border-neutral-100 bg-white p-2"
              >
                <div className="h-5 w-5 rounded bg-neutral-200"></div>
                <div className="flex w-full flex-col gap-1">
                  <div className="h-2 rounded-2xl bg-neutral-200"></div>
                  <div className="h-2 rounded-2xl bg-neutral-200"></div>
                </div>
              </motion.div>
            </div>
          }
          title="For legal teams"
          paragraph="CoreShift helps legal teams by streamlining compliance, managing contracts and policies."
        />
        <Card
          className="col-span-2"
          mainComponent={
            <div className="flex h-full justify-between overflow-hidden pt-3 pr-0 pl-8">
              <div className="h-fit w-fit rounded-full border-4 p-2 text-orange-600">
                <Files />
              </div>
              <motion.div className="grid h-full translate-x-10 grid-cols-4 gap-2 mask-b-from-30">
                <div></div>
                <motion.div
                  className="col-span-2"
                  whileInView={{
                    x: "60%",
                  }}
                  transition={{
                    duration: 1.3,
                    repeat: 1,
                    repeatType: "reverse",
                  }}
                >
                  <Image
                    src={"/images/card4pic2.png"}
                    alt="chat image"
                    className="h-full w-full overflow-hidden rounded-2xl border-2 border-neutral-200 shadow-2xl"
                    height={250}
                    width={150}
                  />
                </motion.div>
                <motion.div
                  whileInView={{
                    x: "-190%",
                  }}
                  transition={{
                    duration: 1.3,
                    repeat: 1,
                    repeatType: "reverse",
                  }}
                >
                  <Image
                    src={"/images/card4pic1.png"}
                    alt="chat image"
                    className="aspect-auto h-full w-full overflow-hidden rounded-2xl border-2 border-neutral-200 shadow-2xl"
                    height={250}
                    width={150}
                  />
                </motion.div>
              </motion.div>
            </div>
          }
          title="All employee data at once"
          paragraph="Contact and personal information, paid and unpaid leave balances, career history, projects and more."
        />
        <Card
          className="relative overflow-hidden"
          mainComponent={
            <div className="flex h-full items-center justify-center mask-y-from-30">
              <div className="h-full translate-y-25">
                <Card5Rotator />
              </div>
              <div className="rounded-full p-2 shadow-[0px_2px_3px_rgba(0,0,0,0.4)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8 text-[#4f4e4e]"
                  fill="#4f4e4e"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </div>
            </div>
          }
          title="For teams & employees"
          paragraph="Get know who is going to be out of office and be aware of upcoming events"
        />
      </div>
    </div>
  );
};
