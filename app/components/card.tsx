import React from "react";
import { cn } from "../lib/utils/cn";
export const Card = ({
  mainComponent,
  title,
  paragraph,
  className,
}: {
  mainComponent: React.ReactNode;
  title: string;
  paragraph: string;
  className?: string;
}) => {
  return (
    <div
      className={cn([
        "z-0 flex flex-col rounded-2xl border-2 border-neutral-200 bg-white",
        className,
      ])}
    >
      {mainComponent}
      <div className="px-8 pb-6">
        <h1 className="font-inter text-2xl font-semibold">{title}</h1>
        <p className="max-w-md tracking-tighter text-neutral-500">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
