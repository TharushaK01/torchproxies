"use client";

import Link from "next/link";
import { ComponentProps, useState, useEffect } from "react";
import { getReferralUrl, clearReferralCode } from "@/lib/referral";

type ReferralLinkProps = ComponentProps<typeof Link>;

export default function ReferralLink({
  href,
  onClick,
  children,
  ...props
}: ReferralLinkProps) {
  const baseHref = typeof href === "string" ? href : href.toString();

  // 1. Initialize state with baseHref so server HTML & initial client render match perfectly
  const [targetUrl, setTargetUrl] = useState<string>(baseHref);

  // 2. Attach the referral query param after initial client hydration
  useEffect(() => {
    setTargetUrl(getReferralUrl(baseHref));
  }, [baseHref]);

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
