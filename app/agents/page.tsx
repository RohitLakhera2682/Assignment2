"use client";
import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ListAgents } from "@/lib/actions/agents"
import { useEffect, useState } from "react"

interface AgentResponse {
    agent_id: string,
    voice_id: string

  }
  
export default function Agents() {
    const [agents, setAgents]  = useState<AgentResponse[]>([]);

    useEffect(() => {
        const fetchAgents = async () => {
          try {
            const agentsj = await ListAgents();
            setAgents(agentsj);
          } catch (error) {
            console.error("Error fetching agents:", error);
          }
        };
    
        fetchAgents();
      }, []);
    return <div>
        <Card className="m-30">
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Agent Name</TableHead>
      <TableHead>Agent Id</TableHead>
      <TableHead>Voice</TableHead>
      <TableHead className="text-right">Phone</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {agents.map((agent)=> {
        return( <TableRow key={agent.agent_id}>
            <TableCell className="font-medium">Agent NAme </TableCell>
            <TableCell>{agent.agent_id}</TableCell>
            <TableCell>{agent.voice_id}</TableCell>
            <TableCell className="text-right">_</TableCell>
        </TableRow>)
           
    })}  
  </TableBody>
</Table>
        </Card>
        

    </div>
}