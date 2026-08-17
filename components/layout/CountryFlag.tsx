"use client";
import Flag from "react-world-flags";
export default function CountryFlag(props: { code: string; className?: string }) {
  return <Flag code={props.code} className={props.className} />;
}