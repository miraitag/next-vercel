import Head from "next/head";
import { ReactElement } from "react";
import { Navbar } from "../../Navbar";
import styles from "./MainLayout.module.scss";

interface IMainLayoutProps {
  children: ReactElement;
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </>
  );
};
