import React from 'react';
import '../styles/globals.css';
import "tailwindcss/tailwind.css";
import '../styles/bootstrap.min.css'



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
