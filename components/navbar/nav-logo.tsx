"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

//nav logo component
export const NavLogo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <Image
        src={`/logo-${theme !== "dark" ? "light" : "dark"}.png`}
        alt="logo"
        width={50}
        height={50}
        className="h-12 w-12 rounded-full"
      />
    </Link>
  );
};
