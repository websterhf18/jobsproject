"use client"
import Link from "next/link";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./hero";

export default function CreateJob () {
  return (
  <html>
    <body>
      <ChakraProvider>
        <Navbar/>
        <Hero />
      </ChakraProvider>
    </body>
  
  </html>
  )
}