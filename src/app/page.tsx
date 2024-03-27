import Image from "next/image";
import ButtonUsage from "./components/testbutton";

export default function Home() {
  return (
    <main className=" p-12">
      <div className= "flex flex-row justify-center">
     <h1 className="text-3xl font-bold text-black">Give-It-Away</h1>
     </div>
     <div className= "flex flex-row justify-center">
    <h2 className = "text-2xl"> A giveaway randomizer tool.</h2>
    </div>

    <div className = "flex flex-row justify-center gap-2">
      <div className = "flex flex-col">
      1
      </div>
      <div className = "flex flex-col">
        25
      </div>
    </div>

    </main>
  );
}
