import Link from "next/link";

interface Props {
  title?: string;
  className?: string;
}
export default function Logo({ title, className }:Props) {
  return (
    <Link href={"/"}>
    <h1 className={`text-3xl font-extrabold uppercase ${className}`}>{ title || "BloggerSty"}</h1>
    </Link>
  )
}
