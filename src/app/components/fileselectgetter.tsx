'use server'
import React from "react";
import RunRandom from "./run";
import { readFile,readFileSync,readdir, readdirSync, stat } from 'fs';
import path from "path";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export async function FileSelectGetter() {


   
    const dir = (process.cwd()+'/public'+ '/storage');
   
    const fileArray = readdirSync(dir, {withFileTypes: true})
.filter(item => !item.isDirectory() && item.name != 'undefined')
.map(item => item.name)


const selectItems = fileArray.map(file => { return (<MenuItem 
value={file}
>
{file}</MenuItem>) });



return fileArray;
}

export async function FileGetter(f :string) {
    console.log('filegetter ran',f)
    const dir = (process.cwd()+'/public'+ '/storage/')
    
    const data = readFileSync((process.cwd()+'/public'+ '/storage/'+f),'utf8')
    return data;
    
    
}