"use client";

import { Link } from "@nextui-org/react";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <div className="w-full flex justify-center items-center gap-y-4">
      <Link
        className="font-normal text-sm text-black"
        underline="hover"
        href={href}
      >
        {label}
      </Link>
    </div>
  );
};
