import Head from "next/head";
import React from "react";
import "twin.macro";

export default function Layout({children, title}:{children:React.ReactNode, title:string}){
    return(
        <div tw='bg-gray-100'>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main tw="mx-auto p-8 min-h-screen">
                {children}
            </main>
        </div>
    )
}