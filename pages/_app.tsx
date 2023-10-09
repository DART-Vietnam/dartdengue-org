import Layout from "@/components/layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

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
        <meta
          name="description"
          content="DART - Dengue Advanced Readiness Tools, is a multifaceted dengue outbreak forecasting system. It is an ongoing project by Oxford University Clinical Research Unit (OUCRU), funded by the Wellcome Trust. The project is supported by a international multidisciplinary team."
          key="desc"
        />
        <meta
          property="og:title"
          content="Dengue Advanced Readiness Tools"
        />
        <meta
          property="og:description"
          content="DART - Dengue Advanced Readiness Tools, is a multifaceted dengue outbreak forecasting system"
        />
        <meta
          property="og:image"
          content="/dart_logo.png"
        />
      </Head>
      <main className={foundrySterling.className}>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </main>
    </>
  );
}
