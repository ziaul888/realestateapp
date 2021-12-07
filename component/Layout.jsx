import React from 'react'
import Head from "next/head"
import {Box} from "@chakra-ui/react"

 const Layout = ({Children}) => {
    return (
        <>
          <Head>
           <title>Real Estate </title>
         </Head>  
         <Box maxWidth="1280px" m="auto">
             <header>
                 Navbar
             </header>
             <main>
                 {Children}
             </main>
         </Box>
        </>
    )
}
export default Layout