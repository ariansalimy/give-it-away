'use server'

import React from 'react';
import { readFile,readdir, readdirSync, stat } from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
export default async function RunRandom() {

    
    
    const dir = (process.cwd()+'/public'+ '/storage');

    const fileArray: string[] = [];

    readdirSync(dir).forEach (filename => {
        if (filename != 'undefined') {
            const name = path.parse(filename).name;
            const ext = path.parse(filename).ext;
            const filepath = path.resolve(dir,filename);

            stat(filepath, function(error,stat) {
                if (error) throw error;

                const isFile = stat.isFile();

                if (isFile && filename != undefined) {
                    console.log('fileNamename',filename);
                    console.log('file path: ',filepath);
                    console.log('file name:',name);
                    console.log('file extension:', ext);
                    
                    fileArray.push(filename);
                       
                    
                   
                 
                }
            
            
        })
    }});


return fileArray;

    

  

    
    
    

}