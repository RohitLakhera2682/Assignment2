import { GalleryVerticalEnd } from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ListVoices } from "@/lib/actions/agents"

const voices= await ListVoices();


// This is sample data.
const data = {
  navMain: [
    {
      title: "Voice",
      url: "#",
      items: voices.map(agent => {
        return {
          title : agent.voice_id || "",
          url : "#"
        }
      })
    },
    {
      title: "Create an Agent",
      url: "#",
      items: [
        {
          title: "Single Prompt Agent",
          url: "/SinglePromptAgent",
        },
        {
          title: "Multi-Prompt Agent",
          url: "/MultiPromptAgent",
        },
        {
          title: "Custom LLM",
          url: "/CustomLLM",
        },
      ],
    },
    {
      title: "Agents",
      url: "/agents",
      items: [
        {
          title: "Show Agents",
          url: "/agents"
        }
      ]
    },
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>
  )
}
