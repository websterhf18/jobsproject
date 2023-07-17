"use client"
import Link from "next/link";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Hero from "./hero";

export default function JobDetail () {
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