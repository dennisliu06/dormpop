import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import ProfilePicture from "./ProfilePicture";

export default async function NavBar() {
  const session = await auth();

  return (
    <>
      <header className=" h-20  bg-husky-red ">
        <nav className="flex justify-between items-center  ">
          <div className="flex items-center   ">
            <Image
              src="/Northeastern_Huskies_.svg.png"
              alt=" Northeastern Logo "
              width={90}
              height={50}
            ></Image>
            <h1 className="font-bold text-white text-xl">
              <Link href="/"> DormPop </Link>
            </h1>
          </div>
          <div>
            <input
              className=" font-semibold md:w-[500px] sm:w-[200px] pl-3 p-1 rounded-full border-2 border-black focus:outline-none "
              type="text"
              placeholder="Search..."
            />
          </div>
          <ul className="flex items-center p-7 space-x-5 text-white text-lg">
            <Link href="/wishlist" className="hover:underline">
              Wishlist
            </Link>
            <Link href="/cart" className="hover:underline">
              Cart
            </Link>
            {!session ? (
              <>
                <Link href="/login" className="hover:underline">
                  Log In
                </Link>
                <Link href="/signup" className="hover:underline">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <ProfilePicture profile={session.user.image} />
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
