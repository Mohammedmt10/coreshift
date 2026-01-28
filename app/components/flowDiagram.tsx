import { Balloon } from "../icons/balloon";
import { Bulb } from "../icons/bulb";
import { Eyes } from "../icons/eyes";
import { LeftLines } from "../icons/leftLines";
import { RightLines } from "../icons/rightLines";
import { Shield } from "../icons/shield";
import { Tick } from "../icons/tick";
import { PurpleDots } from "./purpleDots";
import Image from "next/image";

export const FlowDiagram = () => {
  return (
    <div className="relative mx-auto mt-10 flex w-fit">
      <div className="inset-0 left-0 z-10">
        <LeftLines />
        <div className="after:shadow- absolute inset-0 -top-1/4 left-5 flex h-15 w-15 items-center justify-center overflow-hidden rounded-xl bg-linear-to-b from-[#fde97d] to-[#fdd841] shadow-[inset_0px_-1px_2px_rgba(0,0,0,0.2),inset_0px_2px_4px_rgba(255,255,255,0.4),0px_2px_4px_rgba(0,0,0,0.1)] after:absolute after:inset-0 after:shadow-sm">
          <Bulb />
        </div>

        <PurpleDots />

        <div className="bg-neutral-white absolute inset-0 top-1/6 -left-15 flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-1 shadow-xl">
          <Image
            src={"/images/leftPic.png"}
            className="h-full w-full"
            alt="leftPic"
            height={500}
            width={500}
          />
        </div>
        <div className="after: after:shadow-[inset_0px_-1px_4px_rgba(70 , 0 , 250, 1)] absolute -bottom-2/7 left-10 flex h-18 w-18 items-center justify-center overflow-hidden rounded-xl bg-linear-to-b from-[#61d6fc] to-[#18bbf3] text-white shadow-[inset_0px_-1px_2px_rgba(0,0,0,0.2),inset_0px_2px_4px_rgba(255,255,255,0.4),0px_2px_4px_rgba(0,0,0,0.1)] after:absolute after:inset-0">
          <Balloon />
        </div>

        <PurpleDots className="translate-x-45 translate-y-28" />
      </div>
      <div className="relative z-11 overflow-hidden rounded-3xl bg-[#976CFF] p-4 text-white shadow-[inset_0px_0px_24px] after:absolute after:inset-0 after:rounded-3xl after:shadow-[inset_0px_-2px_4px_rgba(0,0,0,0.5)]">
        <Tick />
      </div>
      <div className="-top-5 z-10">
        <RightLines />

        <PurpleDots className="translate-x-157 -translate-y-1" />

        <div className="absolute -top-2/7 right-1/19 flex h-18 w-18 items-center justify-center rounded-2xl bg-[#fd522b] text-white shadow-[inset_0px_-1px_4px_rgba(0,0,0,0.4),inset_0px_2px_6px_rgba(255,255,255,0.6),0px_2px_4px_rgba(0,0,0,0.1)]">
          <Shield />
        </div>
        <div className="absolute inset-y-1/6 -right-1/14 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-neutral-400 bg-neutral-100 shadow-md">
          <Eyes />
        </div>
        <PurpleDots className="translate-x-172 translate-y-28" />
        <div className="absolute right-6 -bottom-1/4 h-16 w-16 overflow-hidden rounded-2xl bg-white p-1 shadow-sm">
          <Image
            src={"/images/rightPic2.png"}
            className="h-full w-full"
            alt="rightPic"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};
