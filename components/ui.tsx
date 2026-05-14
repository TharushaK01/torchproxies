import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────
// BUTTON
// Usage:
//   <Button variant="primary" href="/contact">Contact Us</Button>
//   <Button variant="secondary" onClick={fn}>Learn More</Button>
//   <Button variant="ghost">Cancel</Button>
// ─────────────────────────────────────────────────────────────

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
}

const buttonStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-orange-500 hover:bg-orange-600 text-white font-semibold
    shadow-[0_0_20px_rgba(234,88,12,0.35)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]
  `,
  secondary: `
    bg-transparent border border-white/10 text-stone-300 font-medium
    hover:border-white/25 hover:text-white hover:bg-white/5
  `,
  ghost: `
    bg-transparent text-stone-400 font-medium
    hover:text-white hover:bg-white/5
  `,
  danger: `
    bg-red-600 hover:bg-red-700 text-white font-semibold
    shadow-[0_0_20px_rgba(220,38,38,0.3)]
  `,
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-xs rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-lg",
  lg: "px-7 py-3.5 text-base rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  fullWidth,
  className = "",
  ...props
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center gap-2
    transition-all duration-200 cursor-pointer
    ${buttonStyles[variant]}
    ${buttonSizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={base}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// CONTAINER
// Usage:
//   <Container>...</Container>
//   <Container size="sm">...</Container>
// ─────────────────────────────────────────────────────────────

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

const containerSizes: Record<ContainerSize, string> = {
  sm:   "max-w-2xl",
  md:   "max-w-4xl",
  lg:   "max-w-6xl",
  xl:   "max-w-7xl",
  full: "max-w-full",
};

export function Container({
  children,
  size = "xl",
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto px-6 w-full ${containerSizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}

// ─────────────────────────────────────────────────────────────
// BADGE
// Usage:
//   <Badge>New</Badge>
//   <Badge variant="orange">Pro</Badge>
//   <Badge variant="green">Active</Badge>
// ─────────────────────────────────────────────────────────────

type BadgeVariant = "default" | "orange" | "green" | "red" | "blue";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const badgeStyles: Record<BadgeVariant, string> = {
  default: "bg-white/5 border-white/10 text-stone-400",
  orange:  "bg-orange-500/10 border-orange-500/30 text-orange-400",
  green:   "bg-green-500/10 border-green-500/30 text-green-400",
  red:     "bg-red-500/10 border-red-500/30 text-red-400",
  blue:    "bg-blue-500/10 border-blue-500/30 text-blue-400",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full
        text-xs font-medium border
        ${badgeStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION HEADER
// Usage:
//   <SectionHeader
//     eyebrow="Features"
//     title="Everything you need"
//     description="..."
//     centered
//   />
// ─────────────────────────────────────────────────────────────

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 mb-3 ${centered ? "justify-center" : ""}`}>
          <span className="w-4 h-px bg-orange-500" />
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">
            {eyebrow}
          </span>
          <span className="w-4 h-px bg-orange-500" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3">
        {title}
      </h2>
      {description && (
        <p className={`text-stone-400 text-base leading-relaxed ${centered ? "max-w-xl mx-auto" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// CARD
// Usage:
//   <Card>...</Card>
//   <Card hover>...</Card>
//   <Card glow>...</Card>
// ─────────────────────────────────────────────────────────────

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  glow?: boolean;
  className?: string;
}

export function Card({ children, hover, glow, className = "" }: CardProps) {
  return (
    <div
      className={`
        bg-[#111] border border-white/6 rounded-xl p-6
        ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]" : ""}
        ${glow ? "shadow-[0_0_30px_rgba(234,88,12,0.08)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// DIVIDER
// Usage:  <Divider />
// ─────────────────────────────────────────────────────────────

export function Divider({ className = "" }: { className?: string }) {
  return <hr className={`border-white/5 ${className}`} />;
}