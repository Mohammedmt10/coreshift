import { NavBar } from "@/app/components/navBar";
import { Tick } from "./icons/tick";
import { LeftLines } from "./icons/leftLines";
import { RightLines } from "./icons/rightLines";
import { Bulb } from "./icons/bulb";
import Image from "next/image";
import { Balloon } from "./icons/balloon";
import { Shield } from "./icons/shield";
import { Eyes } from "./icons/eyes";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-8">
      <div>
        <NavBar />
      </div>
      <div className="relative mx-auto mt-10 flex w-fit">
        <div className="inset-0 left-0 z-10">
          <LeftLines />
          <div className="after:shadow- absolute inset-0 -top-1/4 left-5 flex h-15 w-15 items-center justify-center overflow-hidden rounded-xl bg-linear-to-b from-[#fde97d] to-[#fdd841] shadow-[inset_0px_-1px_2px_rgba(0,0,0,0.2),inset_0px_2px_4px_rgba(255,255,255,0.4),0px_2px_4px_rgba(0,0,0,0.1)] after:absolute after:inset-0 after:shadow-sm">
            <Bulb />
          </div>

          <div className="absolute inset-0 flex h-3 w-3 translate-x-30.5 -translate-y-1 items-center justify-center rounded-full bg-white shadow-sm">
            <div className="h-full w-full scale-80 rounded-2xl bg-purple-500"></div>
          </div>

          <div className="bg-neutral-white absolute inset-0 top-1/6 -left-15 flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-1 shadow-xl">
            <Image
              src={"/images/leftPic.png"}
              className="h-full w-full rounded-xl"
              alt="leftPic"
              height={500}
              width={500}
            />
          </div>
          <div className="after: after:shadow-[inset_0px_-1px_4px_rgba(70 , 0 , 250, 1)] absolute -bottom-1/4 left-10 flex h-15 w-15 items-center justify-center overflow-hidden rounded-xl bg-linear-to-b from-[#61d6fc] to-[#18bbf3] text-white shadow-[inset_0px_-1px_2px_rgba(0,0,0,0.2),inset_0px_2px_4px_rgba(255,255,255,0.4),0px_2px_4px_rgba(0,0,0,0.1)] after:absolute after:inset-0">
            <Balloon />
          </div>
          <div className="absolute inset-0 z-100 flex h-3 w-3 translate-x-45 translate-y-28 items-center justify-center rounded-full bg-white shadow-sm">
            <div className="z-100 h-full w-full scale-80 rounded-2xl bg-purple-500"></div>
          </div>
        </div>
        <div className="relative z-11 overflow-hidden rounded-3xl bg-[#976CFF] p-4 text-white shadow-[inset_0px_0px_24px] after:absolute after:inset-0 after:rounded-3xl after:shadow-[inset_0px_-2px_4px_rgba(0,0,0,0.5)]">
          <Tick />
        </div>
        <div className="-top-5 z-10">
          <RightLines />

          <div className="absolute -top-1/4 right-1/19 flex h-15 w-15 items-center justify-center rounded-2xl bg-[#fd522b] text-white shadow-[inset_0px_-1px_4px_rgba(0,0,0,0.4),inset_0px_2px_6px_rgba(255,255,255,0.6),0px_2px_4px_rgba(0,0,0,0.1)]">
            <Shield />
          </div>
          <div className="absolute inset-y-1/4 -right-1/14 flex h-15 w-15 items-center justify-center rounded-2xl border-2 border-neutral-400 bg-neutral-100">
            <Eyes />
          </div>
          <div className="absolute right-6 -bottom-1/4 h-15 w-15 border"></div>
        </div>
      </div>
    </div>
  );
}
