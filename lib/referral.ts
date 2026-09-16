export function getReferralUrl(targetHref: string): string {
  if (typeof window === "undefined") return targetHref;

  const refValue = localStorage.getItem("ref");
  const url = new URL(targetHref, window.location.origin);

  if (refValue) {
    url.searchParams.set("ref", refValue);
  }

  return url.toString();
}

export function clearReferralCode(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("ref");
  }
}

export function handleReferralNavigation(targetHref: string): void {
  if (typeof window === "undefined") return;

  const destinationUrl = getReferralUrl(targetHref);
  clearReferralCode();
  setTimeout(() => {
    window.location.href = destinationUrl;
  }, 0);
}
