'use server'
import React from "react";
import RunRandom from "./run";
import { readFile,readdir, readdirSync, stat } from 'fs';
import path from "path";

export async function FileName() {


   
    const dir = (process.cwd()+'/public'+ '/storage');
   
    const fileArray = readdirSync(dir, {withFileTypes: true})
.filter(item => !item.isDirectory() && item.name != 'undefined')
.map(item => item.name)


const listItems: never[] = [];

return listItems;
}