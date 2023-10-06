import Layout from "@/components/layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";

const foundrySterling = localFont({
  src: [
    {
      path: "/fonts/FoundrySterling-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/FoundrySterling-Demi.otf",
      weight: "400",
    },
    {
      path: "/fonts/FoundrySterling-ExtraBold.otf",
      weight: "800",
    },
    {
      path: "/fonts/FoundrySterling-Light.otf",
      weight: "300",
    },
    {
      path: "/fonts/FoundrySterling-Medium.otf",
      weight: "500",
    },
  ],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dengue Advanced Readiness Tools</title>
      </Head>
      <main className={foundrySterling.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
