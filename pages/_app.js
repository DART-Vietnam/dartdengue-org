import "../styles/globals.css";
import localFont from "next/font/local";

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

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={foundrySterling.className}>
      <Component {...pageProps} />
    </main>
  );
}
