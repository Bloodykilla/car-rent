import "@/styles/globals.scss";
import { Poppins } from "@next/font/google";
import type { AppProps } from "next/app";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}
