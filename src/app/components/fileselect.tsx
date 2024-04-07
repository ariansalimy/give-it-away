'use client'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FileSelectGetter } from './fileselectgetter';

export default function FileSelector() {


  const [file, setFile] = React.useState('');
  const [fileSelect, changeFileSelect] = React.useState<React.ReactNode[]>([]);
  console.log(file,setFile)

  const handleChange = (event: SelectChangeEvent) => {
    console.log("Handle change")
    setFile(event.target.value);
  };
  console.log("Selector")

  
  React.useEffect( () => {
    const test = async () => {
      const fileArray = await FileSelectGetter();
      const selectItems = fileArray.map(file => { return (<MenuItem 
        value={file}
        >
        {file}</MenuItem>) });
      changeFileSelect(selectItems)
    }
  test()
  })
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Files</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={file}
          onChange={handleChange}
          autoWidth
          label="Files"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
          {fileSelect}
          

        </Select>
      </FormControl>
    </div>
  );
}