import Image from "next/image";
import ButtonUsage from "./components/testbutton";
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
import { FileSelectGetter } from "./components/fileselectgetter";
export default function Home() {

  return (
    <main className=" p-12">
      <Header></Header>
      

      <div className = "grid grid-rows-2 justify-center text-center gap-2 mb-15">
        <div className = "text-xl">Upload</div>

     <UploadButton></UploadButton>
   

 
      </div>
      
      <div className = "grid  justify-center text-center">
   
<Suspense fallback={<Loading/>}>
  <>
<Example>
  <FileNameGetter></FileNameGetter>
</Example>
</>
</Suspense>

<FileSelector>
  <FileSelectGetter></FileSelectGetter>
</FileSelector>

 
      </div>
      
     
     
 

    </main>
  );
}
