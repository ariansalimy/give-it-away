import Image from "next/image";
import ButtonUsage from "./components/testbutton";
import Header from "./components/header"
import {Upload} from "./components/upload"
import RunRandom from './components/run';
import RunRandomButton from "./components/runbutton"
export default function Home() {
  return (
    <main className=" p-12">
      <Header></Header>
      

      <div className = "grid grid-rows-2 justify-center text-center gap-2">
        <div className = "text-xl">Upload</div>
     <div>
     <Upload></Upload>
      </div>
      <RunRandomButton></RunRandomButton>

     
     
  </div>

    </main>
  );
}
