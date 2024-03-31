'use client'
import React from 'react';
import Button from '@mui/material/Button';
import { Upload } from './upload';


export default function UploadButton() {
    return (
    <><Button variant="contained" type="submit" value="upload" onClick={() => Upload()}>Upload</Button></>
    )
}