import React from 'react';
import Navbar from '../components/Navbar'
import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';

Router.onRouteChangeStart = url => {
    nProgress.start();
}
Router.onRouteChangeComplete = () => nProgress.done();
Router.onRouteChangeError = () => nProgress.done();

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Masper</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
            </Head>

            <Navbar />

            {children}

            {/* <Footer /> */}
        </div>
    )
}