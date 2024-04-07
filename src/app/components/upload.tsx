'use server'
import Button from '@mui/material/Button';
import { writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';
import { join } from 'path';
import React from 'react';
import RunRandom from './run';
import { readdirSync } from 'fs';

export async function Upload(data: FormData) {

 
    
      'use server'
      try {

     
      const file: File | null = data.get('file') as unknown as File
      console.log(file);
      if (!file || file.name == 'undefined') {
        throw new Error('No file uploaded')
      }
      
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
  
      // With the file data in the buffer, you can do whatever you want with it.
      // For this, we'll just write it to the filesystem in a new location
      const rootDir = process.cwd();
      console.log(rootDir);

      const path = join(rootDir, 'public', 'storage', file.name);

      await writeFile(path, buffer)
      console.log(`open ${path} to see the uploaded file`)

      revalidatePath(path);


      
      
        }

        catch (error) {
          console.log(error);
        }
   

   
    
  
}

