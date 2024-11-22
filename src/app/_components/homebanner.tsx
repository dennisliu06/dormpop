import Image from "next/image";
import neuBackground from "/public/neu-snow-hero.png";

export default function HomeBanner() {
  return (
    <div className="pt-1 relative w-full h-[700px]">
      <div className="absolute inset-0">
        <Image
          src={neuBackground}
          alt="Vercel logomark"
          fill
          className="object-cover"
        ></Image>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-48 flex items-center justify-end w-full">
        <div className="w-[600px] h-[400px] bg-white rounded-lg shadow-lg p-8">
          <p className="text-sm font-semibold text-text-color mb-2">
            dormpop
          </p>
          
            <h2 className="text-5xl font-bold text-husky-red mb-2">
              Buy for less.
            </h2>
          
          <div className="flex flex-row-reverse">
            <div className="p-8"></div>
            <h2 className="text-5xl font-bold text-husky-red mb-4">
              Sell for free.
            </h2>
          </div>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="p-2"></div>
          <button className="bg-husky-red text-white font-bold py-8 px-16 rounded-sm hover:bg-red-700 transition">
            SELL NOW
          </button>
        </div>
      </div>
    </div>
  );
}
