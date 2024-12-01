import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ListAgents } from "@/lib/actions/agents"


export async function SelectScrollable() {
    const agents = await ListAgents();
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select Voices" />
      </SelectTrigger>
      <SelectContent>
        {agents.map(agent => {
                return <SelectItem value={agent.voice_id} >{agent.voice_name}</SelectItem>
        })}
      </SelectContent>
    </Select>
  )
}
