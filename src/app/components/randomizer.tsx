
import * as React from 'react';
import { FileGetter } from './fileselectgetter';
import randomItem from 'random-item';


export default function randomFunc(f: any, count:number) : Promise<string[]> {
    console.log("Count = ",count)
    console.log(typeof count);
    console.log(f);
    console.log("calling file getter")
    var entries: string[] = []
   
    var win = FileGetter(f).then ((file) => {
        file.split('\n').forEach(element => {
            var trim = element.trim();
            entries.push(trim)
            
        });
        var winner: string[] = []
        console.log("Entries",entries)
        for (let i  = 0; i < count; i ++) {
            var pick = randomItem(entries);
            winner.push(pick);
            entries = entries.filter(function(item) {
                return item != pick
            })
        }
        console.log("Winner is",winner);
        return winner
    }
  
   
    
    )
    return win
  
   

}