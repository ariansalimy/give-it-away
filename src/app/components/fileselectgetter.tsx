'use server'
import React from "react";
import RunRandom from "./run";
import { readFile,readFileSync,readdir, readdirSync, stat } from 'fs';


export async function FileSelectGetter() {

    console.log("Getter ran");
   

    
    
    console.log('read dir',readdirSync('/tmp'))
   
    const fileArray = readdirSync('/tmp/', {withFileTypes: true})
.filter(item => !item.isDirectory() && item.name != 'undefined')
.map(item => item.name)
    console.log('file array',fileArray)




return fileArray;
}

export async function FileGetter(f :string) {
    console.log('filegetter ran',f)
    //const dir = (process.cwd()+'/public'+ '/storage/')
    
    const data = readFileSync(('/tmp/' +f),'utf8')
    return data;
    
    
}