import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SelectScrollable } from "./selector";


export  function TextareaWithText() {
    return (
      <div className="h-full">
        <div className="grid w-full gap-1.5">
          <Label className="ml-40 mt-6" htmlFor="message-2">Name</Label>
          <Textarea placeholder="Type your name here." id="message-2" />
        </div>
        <br />
        <div className="h-full">
          <div className="grid w-full gap-1.5">
            <Label className="ml-40" htmlFor="message-2">Prompt</Label>
            <Textarea 
              placeholder="Type your prompt here." 
              id="message-2" 
              className="min-h-[506px] pb-6" 
            />
          </div>
        </div>
      </div>
    );
  }

  export  function TextareaWithText2() {
    return (
      <div className="h-full">
        <div className="grid w-full gap-1.5">
          <div className="flex flex-col">
          <Label className="ml-40 mt-6" htmlFor="message-2">Name</Label>
          <div className="flex place-content-center">
            <SelectScrollable/>
          </div>
          </div>
        
          
        </div>
        <br />
        <div className="h-full">
          <div className="grid w-full gap-1.5">
            <Label className="ml-40" htmlFor="message-2">Prompt</Label>
            <Textarea 
              placeholder="Type your prompt here." 
              id="message-2" 
              className="min-h-[506px] pb-6" 
            />
          </div>
        </div>
      </div>
    );
  }
  
