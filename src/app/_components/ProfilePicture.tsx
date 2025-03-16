"use client";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { useEffect, useRef, useState } from "react";
import { Navbar, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import { signOut } from "@/auth";

export default function ProfilePicture({
  profile,
}: {
  profile?: string | null;
}) {
  const [menuClicked, setMenuClicked] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Reference for the menu
  const profileRef = useRef<HTMLDivElement | null>(null); // Reference for the profile picture

  const handleClick = () => {
    setMenuClicked(!menuClicked);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      profileRef.current &&
      !profileRef.current.contains(event.target as Node)
    ) {
      setMenuClicked(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={profileRef}
      onClick={handleClick}
      className="cursor-pointer"
      id="clickbox"
    >
      <div>
        {profile ? (
          <>
            <Image
              src={profile}
              width={30}
              height={30}
              alt="profile"
              className="rounded-full"
            />
          </>
        ) : (
          <>
            <div>
              <Image
                src="/default-avatar.jpg"
                width={30}
                height={30}
                alt="profile"
                className="rounded-full"
              />
            </div>
          </>
        )}
      </div>
      {menuClicked && (
        <div
          ref={menuRef}
          className="absolute z-10 bg-white w-40 shadow-large -mx-32 my-1"
        >
          <MenuItem href="/hello" name="Link 1" />
          <MenuItem href="/hello" name="Link 1" />
          <MenuItem href="/hello" name="Link 1" />
          <MenuItem href="/hello" name="Link 1" signOutButton />
        </div>
      )}
    </div>
  );
}
