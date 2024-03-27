'use server'
import Button from '@mui/material/Button';
import React from 'react';
import { readFile,readdir, readdirSync, stat } from 'fs';
import path from 'path';
export default async function RunRandom() {

    
    
    const dir = '/tmp/'
    const fileArray: string[] = [];
    readdirSync(dir).forEach (file => {
        fileArray.push(file)
    });
    console.log('files',fileArray);
    readdir(dir,(error,fileNames) => {
        if (error) throw error;

        fileNames.forEach(filename => {
            const name = path.parse(filename).name;
            const ext = path.parse(filename).ext;
            const filepath = path.resolve(dir,filename);

            stat(filepath, function(error,stat) {
                if (error) throw error;

                const isFile = stat.isFile();

                if (isFile) {
                    console.log('file path: ',filepath);
                    console.log('file name:',name);
                    console.log('file extension:', ext);
               
                    fileArray.push(filename);
                 
                }
            })
            
        })
        console.log('files',fileArray); })

  

    
    
    

}