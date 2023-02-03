import { Footer } from "@/components/Organisms/Footer/Footer";
import { Navbar } from "@/components/Organisms/Navbar/Navbar";
import Head from "next/head";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface TemplateMainProps {
  children: ReactNode;
}

export const TemplateMain = ({ children }: TemplateMainProps) => {
  return (
    <>
      {/* TODO: added meta */}
      <Head>
        <title>Bronx - Car Rent</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        /> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};