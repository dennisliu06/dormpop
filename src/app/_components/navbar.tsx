import Image from "next/image";

export default function NavBar() {

  return (
    <>
      <header className=" h-20  bg-husky-red ">
        <nav className=" flex justify-between items-center  ">
          <div className="flex items-center   ">
            <Image
              src="/Northeastern_Huskies_.svg.png"
              alt=" Northeastern Logo "
              width={90}
              height={50}
            ></Image>
            <h1 className= "font-bold text-white"> DormPop </h1>
          </div>
          <div>
            <input
              className=" font-semibold w-[500px] pl-3 p-1 rounded-full border-4 border-black focus:outline-none "
              type="text"
              placeholder="Search..."

            />
          </div>
          <ul className="p-7 space-x-5 text-white ">
            <a href=""> About </a>
            <a href=""> Contact </a>
            <a href=""> Home </a>
            <a href=""> Shop </a>
          </ul>
        </nav>
      </header>
    </>
  );
}
