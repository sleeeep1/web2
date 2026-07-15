import { type ReactNode } from "react";
import clsx from "clsx";

// TODO: 替换为真实产品录屏视频,朱琪负责制作;当前为轻量动效插画占位
export function FeatureIllustration({
  icon,
  label,
  accent = "blue",
}: {
  icon: ReactNode;
  label: string;
  accent?: "blue" | "orange";
}) {
  return (
    <div
      className={clsx(
        "relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-black/5",
        accent === "blue" ? "bg-brand-blue/5" : "bg-brand-orange/5"
      )}
    >
      <div
        className={clsx(
          "flex h-20 w-20 items-center justify-center rounded-2xl text-white motion-safe:animate-pulse-soft",
          accent === "blue" ? "bg-brand-blue" : "bg-brand-orange-deep"
        )}
      >
        {icon}
      </div>
      <span className="absolute bottom-3 right-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-medium text-ink-muted">
        {label}
      </span>
    </div>
  );
}
