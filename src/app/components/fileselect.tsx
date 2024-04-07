'use client'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function FileSelector({
    children,
  }: {
    children: React.ReactNode;
  })  {
  const [file, setFile] = React.useState('');
  console.log(file,setFile)

  const handleChange = (event: SelectChangeEvent) => {
    console.log("Handle change")
    setFile(event.target.value);
  };
  console.log("Selector")

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
         <div>{children}</div>
        </Select>
      </FormControl>
    </div>
  );
}