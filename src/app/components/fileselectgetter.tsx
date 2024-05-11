'use server'
import React from "react";
import RunRandom from "./run";
import { readFile,readFileSync,readdir, readdirSync, stat } from 'fs';


export async function FileSelectGetter() {

    console.log("Getter ran");
   
    const dir = ('/tmp/');
    
    
   
    const fileArray = readdirSync(process.cwd(), {withFileTypes: true})
.filter(item => !item.isDirectory() && item.name != 'undefined')
.map(item => item.name)
    console.log('file array',fileArray)




return fileArray;
}

export async function FileGetter(f :string) {
    console.log('filegetter ran',f)
    //const dir = (process.cwd()+'/public'+ '/storage/')
    
    const data = readFileSync((process.cwd() +f),'utf8')
    return data;
    
    
}