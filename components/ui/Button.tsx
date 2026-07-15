import Link from "next/link";
import clsx from "clsx";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "text";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-[#0060c2] shadow-sm shadow-brand-blue/20",
  secondary:
    "bg-white text-ink border border-black/10 hover:border-brand-blue/40 hover:text-brand-blue",
  text: "text-brand-blue hover:text-brand-orange px-0",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "primary", size = "md", className } = props;
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200",
    variantClasses[variant],
    variant !== "text" && sizeClasses[size],
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} target={props.target} rel={props.rel} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      name={buttonProps.name}
      value={buttonProps.value}
      aria-label={buttonProps["aria-label"]}
      className={classes}
    >
      {children}
    </button>
  );
}
