/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { ChakraProvider, Icon, grid, ring } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Hero from "./hero";
import { 
  Stack,
  Heading,
  Text,
  ListIcon,
          } from "@chakra-ui/react";

export default function JobList() {
  return (
    <html>
      <body>
        <ChakraProvider>
          <Navbar />
          <Hero />
          <section>
            <Text fontSize={ { base: '100px'} }
            fontFamily={ { base: 'Toggle Navigation'} }
            bg={'gray.400'}>Job list</Text>
            <Stack direction={ { base: 'column', md: 'row'} }
            // spacing={'900px'}
            w={'full'}>
              <div className="ofertas">
                <p style={ {marginLeft:'30px', textAlign:'center'} }>Programador senior encargado de capacitar a los programadores junior</p>
                <img src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Codigo en computadora" style={{width: '20vw', marginLeft: '30px', height: '200px', borderRadius: '10px'}}/>
              </div>
              <div className="caracteristicas">
                <section>
                  <p style={ {position: 'absolute', right: '0', marginRight: '30px'} }>
                    Conocimientos en:
                    <ul> 
                      <li>HTML5</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Next.js</li>
                    </ul>
                  </p>
                </section>
              </div>
            </Stack>
          </section>
          
          {/* <Contenido /> */}
        </ChakraProvider>
      </body>
    </html>
  );
}
