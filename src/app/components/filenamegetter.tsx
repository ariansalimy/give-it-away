

import React from "react";
import RunRandom from "./run";
import { readFile,readdir, readdirSync, stat } from 'fs';
import path from "path";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FileName } from "./filename";
//import  {FileName} from './filename'
export async function FileNameGetter() {


    const result = await FileName();
    return result;
}