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


  const handleChange = (event: any) => {
      
      setFile(event.target.value);


    
  };
  React.useEffect( () => {
    
  test()
  },[])
  const test = async () => {
    const fileArray = await FileSelectGetter();
    const selectItems = fileArray.map(file => { return (<SelectItem 
      key={file} value={file}
      >
      {file}</SelectItem>) });
    changeFileSelect(selectItems)
  }
  

  return (
    <>
    <div>
        <Select onValueChange={setFile}>
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
      <Button onClick={() => Randomizer(file)}>RUN</Button>
    </div>
    </>
  );
}
