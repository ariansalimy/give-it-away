import Image from "next/image";
import ButtonUsage from "./components/testbutton";
import Header from "./components/header"
import Upload from "./components/upload"

export default function Home() {
  return (
    <main className=" p-12">
      <Header></Header>
      

      <div className = "grid justify-center text-center gap-2">
        <div className="col-start-3">Upload</div>
      <div className="col-start-3">
        <Upload></Upload>
      </div>
     
  </div>

    </main>
  );
}
