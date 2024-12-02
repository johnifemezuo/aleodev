import Head from "next/head";

export default function PageWrapper({children, title}:{children: React.ReactNode; title?: string}) {
    return (
      <>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/images/logo-tab.png" />
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