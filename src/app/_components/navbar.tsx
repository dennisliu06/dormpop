import Image from "next/image";

export default function NavBar() {

  return (
    <>
      <header className="p-10 place-content-center bg-husky-red ">
        <nav className=" flex justify-items-end ">
          <div className="flex items-center">
            <Image
              src="/Northeastern_Huskies_.svg.png"
              alt=" Northeastern Logo "
              width={90}
              height={50}
            ></Image>
            <h1> DormPop </h1>
          </div>
          <ul className="p-10 flex items-center ">
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
