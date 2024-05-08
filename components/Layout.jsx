// import Head from 'next/head'
// // import { Metadata } from 'next'
// import React, { Children } from 'react'
// import Header from './Header'
// import Footer from './Footer'
// // import { lang } from 'moment'


// const Layout = ({ children }) => {
//   return (
//     <>
//       <Head>
//         <title>Vilcabamba</title>
//         <meta name="description" content="Sitio web oficial del gobierno de Vilcabamba" />
//         <link rel="icon" href="/logo.PNG" sizes="any" />
//       </Head>
//       <Header />
//       {children}
//       <Footer />
//     </>
//   )
// }

// export default Layout

// export const metadata = {
//   title: 'Vilcabamba',
//   description: 'Sitio web oficial del gobierno de Vilcabamba',
//   image: '/logo.PNG',
//   url: 'https://vilcabamba.gob.ec',
//   type: 'website',
//   siteName: 'Vilcabamba',
//   locale: 'es_EC',
//   email: 'collaborate@example.com',
//   siteUrl: 'https://vilcabamba.gob.ec',
//   facebook: 'https://www.facebook.com/gad.vilcabamba?locale=es_LA',
//   keywords: ['Vilcabamba', 'Gobierno', 'Municipalidad', 'oficial', 'sitio web', 'website', 'gob.ec', 'Ecuador', 'Loja', 'Vilcabamba Ecuador', 'Gobierno Parroquial', 'Valle de la Longevidad', 'Valley of Longevity', 'Vilcabamba Government'],
// }

import Head from 'next/head';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  // Destructure the metadata object
  const { title, description, image, url, type, siteName, locale, email, siteUrl, facebook, keywords } = metadata;

  return (
    <>
      <Head>
        {/* Dynamically set the title */}
        <title>{title}</title>
        {/* Dynamically set the description */}
        <meta name="description" content={description} />
        {/* Dynamically set the favicon */}
        <link rel="icon" href={image} sizes="any" />
        {/* Additional metadata can be set here using the destructured properties */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={locale} />
        <meta property="og:email" content={email} />
        <meta property="og:site_url" content={siteUrl} />
        <meta property="og:facebook" content={facebook} />
        <meta name="keywords" content={keywords.join(', ')} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

// Assuming metadata is defined in the same file or imported from another module
const metadata = {
  title: 'Vilcabamba',
  description: 'Sitio web oficial del gobierno de Vilcabamba',
  image: '/logo.PNG',
  url: 'https://vilcabamba.gob.ec',
  type: 'website',
  siteName: 'Vilcabamba',
  locale: 'es_EC',
  email: 'collaborate@example.com',
  siteUrl: 'https://vilcabamba.gob.ec',
  facebook: 'https://www.facebook.com/gad.vilcabamba?locale=es_LA',
  keywords: ['Vilcabamba', 'Gobierno', 'Municipalidad', 'oficial', 'sitio web', 'website', 'gob.ec', 'Ecuador', 'Loja', 'Vilcabamba Ecuador', 'Gobierno Parroquial', 'Valle de la Longevidad', 'Valley of Longevity', 'Vilcabamba Government'],
};
