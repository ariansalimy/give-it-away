import Image from "next/image";
import Header from "./components/header"
import {Upload} from "./components/upload"
import RunRandom from './components/run';


import UploadButton from './components/uploadbutton'
import Example from "./components/example";
import { FileName } from "./components/filename";
import { Suspense } from "react";
import Loading from "./loading";
import { FileNameGetter } from "./components/filenamegetter";
import FileSelector from "./components/fileselect";

export default function Home() {

  return (
    <main className=" p-12">
      <Header></Header>
      

      <div className = "grid grid-rows-2 justify-center text-center gap-2 mb-15">
        <div className = " font-mono text-xl">Upload</div>

     <UploadButton></UploadButton>
   

 
      </div>
      
    
   


  <FileSelector>

</FileSelector>





 

      


  <footer className="font-mono">Developed by <a className="hover:underline font-mono" href="https://basedari.com">Arian Salimy</a></footer>


     
     
 

    </main>
  
  );
}
