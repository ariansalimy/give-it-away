
import * as React from 'react';
import { FileGetter } from './fileselectgetter';


export default function randomFunc(f: any) : void {
    console.log(f);
    console.log("calling file getter")
    var z = FileGetter(f).then ((file) => {
        console.log(file)
    }
    
    )
   

}