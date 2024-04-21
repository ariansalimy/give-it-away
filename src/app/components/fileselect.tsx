'use client'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import { FileSelectGetter } from './fileselectgetter';
import { Button } from "@/components/ui/button"
import Randomizer  from './randomizer';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export default function FileSelector() {


  const [file, setFile] = React.useState('');
  const [fileSelect, changeFileSelect] = React.useState<React.ReactNode[]>([]);
  const [winText,setWinText] = React.useState('');
  
 

  const handleChange = (event: any) => {
      
    const test = async () => {
      const fileArray = await FileSelectGetter();
      const selectItems = fileArray.map(file => { return (<SelectItem 
        key={file} value={file}
        >
        {file}</SelectItem>) });
      changeFileSelect(selectItems)
    }
  test()  


    
  };

  const handleFileChange = (event:any) => {
    setFile(event);
  }

  function runGiveaway(file:string,count:number) {
    Randomizer(file,count).then(st => {
      console.log("Winner (from fileselect)",st)
      setWinText("Winner(s): "+ st.toString());
    });
    
  }
 
  

  return (
    <>
    <div>
        <Select onOpenChange={handleChange} onValueChange={handleFileChange}>
          <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a file"/>
          </SelectTrigger>
          
          <SelectContent>
          <SelectGroup>
            <SelectLabel>Files</SelectLabel>
          </SelectGroup>
       
          <SelectItem value="null">
            <em>None</em>
          </SelectItem>
          
          {fileSelect}
          </SelectContent>

        </Select>

      </div>

    <div>
      <Button onClick={() => runGiveaway(file,1)}>RUN</Button>
    </div>
   
    <div className = "text-xl">{winText}</div>

    </>
  );
}
