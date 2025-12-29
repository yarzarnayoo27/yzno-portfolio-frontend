"use client";

import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

interface ProfileButtonProps {
  children: ReactNode;
  href: string;
  variant?: "filled" | "outline";
  icon?: ReactNode;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({
  children,
  href,
  variant = "outline",
  icon,
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const baseClasses =
    "border-3 font-bold mt-4 px-4 py-2 rounded flex items-center gap-2";

  const outline = `bg-transparent ${
    theme === "dark"
      ? "border-[#eab308] text-[#eab308] hover:bg-[#eab308] hover:text-[#000000]"
      : "border-[#a855f7] text-[#a855f7] hover:bg-[#a855f7] hover:text-[#ffffff]"
  }`;

  const solid = `hover:bg-transparent ${
    theme === "dark"
      ? "border-[#eab308] bg-[#eab308] text-black hover:text-[#eab308]"
      : "border-[#a855f7] bg-[#a855f7] text-white hover:text-[#a855f7]"
  }`;

  return (
    <a
      className={`${baseClasses} ${
        variant === "outline" ? outline : solid
      } cursor-pointer`}
      href={href}
    >
      {icon && icon}
      {children}
    </a>
  );
};

export default ProfileButton;
