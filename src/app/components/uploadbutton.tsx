'use client'
import React from 'react';
import Button from '@mui/material/Button';
import { Upload } from './upload';


export default function UploadButton() {
    
    return (
        <><form action={Upload}> <input type="file" name="file"/><Button variant="contained" type="submit" value="uploaded">Upload</Button></form>  </>
    )
}