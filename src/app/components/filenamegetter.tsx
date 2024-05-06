

import React from "react";
import RunRandom from "./run";
import { readFile,readdir, readdirSync, stat } from 'fs';
import path from "path";

import { FileName } from "./filename";
//import  {FileName} from './filename'
export async function FileNameGetter() {


    const result = await FileName();
    return result;
}