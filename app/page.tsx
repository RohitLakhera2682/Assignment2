"use client";

import {TextareaWithText} from "@/components/text-aa";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <>
    <nav className=" py-5 flex justify-center text-3xl bg-violet-900 text-white">{name || "Agent Name"}</nav>
    <TextareaWithText/>
    </>
    
   
  );
}
