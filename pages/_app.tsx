import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Link from 'next/link';
import * as React from 'react';
import Navbar from "@/components/home/Navbar"
import Footer from '@/components/home/Footer';
import { Grid, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { string } from 'yup';

import NavbarAuth from '@/components/home/NavbarAuth';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  React.useEffect(() => {
    authCheck();
  })

  function authCheck(){
    const status = localStorage.getItem('status');
    if (status != 'active') {
      setAuthorized(false);
    } else {
      setAuthorized(true);
    }
  }
  return (
  <>
      <Head>
        <title>Nodokter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
         {/* eslint-disable-next-line @next/next/no-css-tags */}
         <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
         <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/bttn.css/0.2.4/bttn.css"/>
     </Head>
     
     {authorized ? <NavbarAuth /> : <Navbar/>}
     <Box component="main" sx={{ paddingTop: 2 }} marginTop={6}>
          <Component {...pageProps}/>
          {/* credits */}
          </Box>
      <Footer />
  </>
  )
}
