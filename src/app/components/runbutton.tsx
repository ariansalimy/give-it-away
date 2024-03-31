'use client'
import Button from '@mui/material/Button';
import React from 'react';
import RunRandom from './run';

export default function RunRandomButton () {
    return (
        <>
    <Button variant="contained" onClick={() => RunRandom()} >Read files</Button>
    </>
    )
}