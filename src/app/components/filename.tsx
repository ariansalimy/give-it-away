'use server'
import React from "react";
import RunRandom from "./run";
import { readFile,readdir, readdirSync, stat } from 'fs';
import path from "path";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export async function FileName() {


   
    const dir = (process.cwd()+'/public'+ '/storage');
   
    const fileArray = readdirSync(dir, {withFileTypes: true})
.filter(item => !item.isDirectory() && item.name != 'undefined')
.map(item => item.name)

console.log(fileArray);
const listItems = fileArray.map(file => { return (<ListItem disablePadding><ListItemButton><ListItemText>{file}</ListItemText></ListItemButton></ListItem>) });

return listItems;
}