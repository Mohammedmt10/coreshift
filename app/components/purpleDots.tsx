import { cn } from "../lib/utils/cn";

export const PurpleDots = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex h-3 w-3 translate-x-30.5 -translate-y-1 items-center justify-center rounded-full bg-white shadow-sm",
        className,
      )}
    >
      <div className="h-full w-full scale-80 rounded-2xl bg-purple-500"></div>
    </div>
  );
};
