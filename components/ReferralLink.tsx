"use client";

import Link from "next/link";
import { ComponentProps } from "react";
import { getReferralUrl, clearReferralCode } from "@/lib/referral";

type ReferralLinkProps = ComponentProps<typeof Link>;

export default function ReferralLink({
  href,
  onClick,
  children,
  ...props
}: ReferralLinkProps) {
  const targetUrl = typeof href === "string" ? href : href.toString();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    clearReferralCode();
  };

  return (
    <Link {...props} href={getReferralUrl(targetUrl)} onClick={handleClick}>
      {children}
    </Link>
  );
}
