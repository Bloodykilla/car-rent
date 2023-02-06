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
        <title>BRONX - Car Rent</title>
        <meta
          name="description"
          content="Car rent in Vienna with huge collection of cars for all tastes."
        />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
