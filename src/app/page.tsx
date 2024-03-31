import Image from "next/image";
import ButtonUsage from "./components/testbutton";
import Header from "./components/header"
import {Upload} from "./components/upload"
import RunRandom from './components/run';
import RunRandomButton from "./components/runbutton"
import FileName from "./components/filename";
import UploadButton from './components/uploadbutton'
export default function Home() {

  return (
    <main className=" p-12">
      <Header></Header>
      

      <div className = "grid grid-rows-2 justify-center text-center gap-2 mb-15">
        <div className = "text-xl">Upload</div>

     <Upload></Upload>

 
      </div>
      
      <div className = "grid grid-rows-2 justify-center text-center gap-5 mb-15">
   
      <FileName></FileName>
      <RunRandomButton></RunRandomButton>
      </div>
     
     
 

    </main>
  );
}
