import HomeBanner from "@/app/_components/homebanner"
import { auth, signOut } from "@/auth";

export default async function Home(){
  const session = await auth()

  return (
    <div className="text-text-color">

      



      {/* <HomeBanner />
      {JSON.stringify(session)}
      <form action={async () => {
        "use server";

        await signOut();
      }}>
        <button type="submit">
            Sign Out
        </button>
      </form> */}
    </div>
  );
}
