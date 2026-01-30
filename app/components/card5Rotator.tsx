import { animate } from "motion";
import { useMotionValue, useSpring, useTransform, motion } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

export const Card5Rotator = () => {
  const rotation = useMotionValue(0);

  useEffect(() => {
    const controls = animate(rotation, Math.PI * 2, {
      duration: 6,
      ease: "linear",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [rotation]);

  return (
    <div>
      {Array.from({ length: 9 }).map((_, index) => {
        const angleStep = (2 * Math.PI) / 9;

        const angle = useTransform(rotation, (r) => r + index * angleStep);

        const x = useTransform(angle, (a) => Math.cos(a) * 70);
        const y = useTransform(angle, (a) => Math.sin(a) * 70);

        const angleDeg = useTransform(angle, (a) => a * (180 / Math.PI) + 90);

        return (
          <motion.div
            style={{ x, y, rotate: angleDeg }}
            key={index}
            className="absolute h-9 w-9 overflow-hidden rounded-lg p-0.5 shadow"
          >
            <Image
              src={"/images/leftRotator1.png"}
              alt="RotatorImage"
              height={30}
              width={30}
              className="h-full w-full rounded-lg object-cover object-top"
            />
          </motion.div>
        );
      })}
    </div>
  );
};
