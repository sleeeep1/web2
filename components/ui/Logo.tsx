import Image from "next/image";
import clsx from "clsx";

// TODO: 当前图标由 AI 生成(已裁去水印、去除文字部分),仅作为上线前的过渡版本;
// 如项目团队提供正式品牌规范/矢量商标文件,请替换 /public/logo-icon.png
export function Logo({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <span
      className={clsx("inline-flex flex-none overflow-hidden rounded-lg", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo-icon.png"
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-cover"
        priority
      />
    </span>
  );
}
