import Head from "next/head";

export default function PageWrapper({children}:{children: React.ReactNode}) {
    return (
      <>
        <Head>
          <title>Aleodev: Web Agency for all your need</title>
  
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
          <link
            href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap"
            rel="stylesheet"
          />
        </Head>
  

<div>
  {children}
</div>

  </>
    )}