import * as React from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ListVoices } from "@/lib/actions/agents"


export async function SelectScrollable() {
    const agents = await ListVoices();
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select Voices" />
      </SelectTrigger>
      <SelectContent>
        {agents.map(agent => {
                return <SelectItem key={agent.voice_id} value={agent.voice_id} >{agent.voice_name}</SelectItem>
        })}
      </SelectContent>
    </Select>
  )
}
