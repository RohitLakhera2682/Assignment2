"use server";

import Retell from 'retell-sdk';

const client = new Retell({
  apiKey: process.env.RETELL_API || "",
});

export async function ListAgents() {
  const voiceResponses = await client.voice.list();

  return voiceResponses;
}

  
export async function CreateAgents() {
    const agentResponse = await client.agent.create({
      response_engine: { llm_id: 'llm_234sdertfsdsfsdf', type: 'retell-llm' },
      voice_id: '11labs-Adrian',
    });
  
    console.log(agentResponse.agent_id); 
}

    // async function getAgents() {
    //   const agentResponse = await client.agent.retrieve('16b980523634a6dc504898cda492e939');
    
    //   console.log(agentResponse.agent_id);
    // }

    // async function deleteAgents() {
    //   await client.agent.delete('oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD');
    // }