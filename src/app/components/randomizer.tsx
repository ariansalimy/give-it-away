
import * as React from 'react';
import { FileGetter } from './fileselectgetter';
import randomItem from 'random-item';


export default function randomFunc(f: any, count:number) : Promise<string[]> {
    console.log(f);
    console.log("calling file getter")
    var entries: string[] = []
    var win = FileGetter(f).then ((file) => {
        file.split('\n').forEach(element => {
            var trim = element.trim();
            entries.push(trim)
            
        });
        console.log("Entries",entries)
        var winner = randomItem.multiple(entries,count);
        console.log("Winner is",winner);
        return winner
    }
  
   
    
    )
    return win
  
   

}