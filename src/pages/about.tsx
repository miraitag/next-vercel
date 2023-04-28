import { Inter } from "next/font/google";
import { ReactElement } from "react";
import { LightLayout } from "../../components/layouts/LightLayout";
import { MainLayout } from "../../components/layouts/MainLayout";
import styles from "../../components/layouts/MainLayout/MainLayout.module.scss";
import type { NextPageWithLayout } from "./_app";

const inter = Inter({ subsets: ["latin"] });

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <div className={styles.grid}>
        <h2 className={inter.className}>
          About
          <code className={styles.code}> src/pages/about.tsx </code>
        </h2>
      </div>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};

export default AboutPage;
