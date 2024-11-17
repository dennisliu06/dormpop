import HomeBanner from "@/components/homeBanner/page";
import NavBar from "./_components/navbar";

export default function Home() {
  return (
    <div className="bg-husky-red text-text-color">
      <NavBar />
      <HomeBanner />
    </div>
  );
}
