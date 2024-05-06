'use client'
import * as React from 'react';

import { FileSelectGetter } from './fileselectgetter';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Randomizer  from './randomizer';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

import { useToast } from "@/components/ui/use-toast"


export default function FileSelector() {


  const [file, setFile] = React.useState('');
  const [fileSelect, changeFileSelect] = React.useState<React.ReactNode[]>([]);
  const [winText,setWinText] = React.useState('');
  const [count,setCount] = React.useState(Number);
  const [date, setDate] = React.useState<Date>();
  const [venue, setVenue] = React.useState('');
  const [promoter, setPromoter] = React.useState('');
  const [artist, setArtist] = React.useState('');

  const[template, setTemplate] = React.useState('');

  const { toast } = useToast()
  
 

  const handleChange = (event: any) => {
      
    const test = async () => {
      const fileArray = await FileSelectGetter();
      const selectItems = fileArray.map(file => { return (<SelectItem 
        key={file} value={file}
        >
        {file}</SelectItem>) });
      changeFileSelect(selectItems)
    }
  test()  


    
  };



  const handleFileChange = (event:any) => {
    setFile(event);
  }

  function runGiveaway(file:string,count:number) {
    if (file != '') {

  
    Randomizer(file,count).then(st => {
      console.log("Winner (from fileselect)",st)
      setWinText("Winner(s): "+ st.toString());
      setTemplate(createMessage());
    }).catch((error) => {
      alert(error);
    } );
  }
  else {
    console.log("WOW error")
    toast({
      variant: "default",
      title: "No file selected!",
      description: "Please select a file and try running again.",
     
    })
  }
  }

  function createMessage() {
    if (count == 1) {
      var ticket = 'ticket'
    }
    var ticket = 'tickets' 
    return `Hello! This is ${promoter} letting you know that you have WON ${count} pair of ${ticket} for ${artist}'s concert at ${venue} on ${date?.toLocaleDateString()}! Can we confirm that you are able to attend the concert?`
  }
 
  

  return (
    <>
  <div className = 'grid justify-center gap-7 mb-9'>
    <div className = 'grid justify-center text-center'>
        <Select onOpenChange={handleChange} onValueChange={handleFileChange}>
          <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a file"/>
          </SelectTrigger>
          
          <SelectContent>
          <SelectGroup>
            <SelectLabel>Files</SelectLabel>
          </SelectGroup>
       
          <SelectItem value="null">
            <em>None</em>
          </SelectItem>
          
          {fileSelect}
          </SelectContent>

        </Select>

      </div>
      <div className = 'grid justify-center text-center'>
      <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Event Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </div>
    <div className = 'grid grid-cols-2 gap-2 mb-5 justify-center align-bottom'>
      <div>
      <Label className='font-mono' htmlFor="artist">Artist</Label>
      <Input onChangeCapture={e => setArtist(e.currentTarget.value)} type="artist" id="artist" placeholder="Artist" />
      </div>
      <div>
      <Label className='font-mono' htmlFor="count">Number of Winners</Label>
      <Input onChangeCapture={e => setCount(parseInt(e.currentTarget.value))} type="count" id="count" placeholder="1" />
      



      </div>
      <div>
      <Label className='font-mono' htmlFor="venue">Venue</Label>
      <Input onChangeCapture={e => setVenue(e.currentTarget.value)} type="venue" id="venue" placeholder="A Music Venue" />
      </div>
      <div>
      <Label className='font-mono' htmlFor="promoter">Promoter</Label>
      <Input onChangeCapture={e => setPromoter(e.currentTarget.value)} type="promoter" id="promoter" placeholder="COOL FM" />
      </div>
      </div>
  
  
      <Button variant='outline' onClick={() => runGiveaway(file,count)}>RUN</Button>
      

      </div>
  <div className = 'grid  gap-7'>
   
    <div className = "text-2xl font-bold">{winText}</div>

    <div className= "text-xl">{template}</div>
    

  </div>
 


    </>
  );
}
