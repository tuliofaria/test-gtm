import "@/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-WLG2GSX5" />
      <Component {...pageProps} />
    </>
  );
}
