'use server'
import Button from '@mui/material/Button';
import { writeFile } from 'fs/promises';
import { useRouter } from 'next/navigation';
import { join } from 'path';
import React from 'react';

export async function Upload() {

  
    async function upload(data: FormData) {
      'use server'
  
      const file: File | null = data.get('file') as unknown as File
      if (!file) {
        throw new Error('No file uploaded')
      }
  
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
  
      // With the file data in the buffer, you can do whatever you want with it.
      // For this, we'll just write it to the filesystem in a new location
      const path = join('/', 'tmp', file.name)
      await writeFile(path, buffer)
      console.log(`open ${path} to see the uploaded file`)
  
      return { success: true }
    }
   

   
    
    return ( <><form action={upload}> <input type="file" name="file"/><Button variant="contained" type="submit" value="upload">Upload</Button></form></>);
}