import { Inter } from "next/font/google";
import { MainLayout } from "../../../components/layouts/MainLayout";
import styles from "../../../components/layouts/MainLayout/MainLayout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <MainLayout>
      <div className={styles.grid}>
        <h2 className={inter.className}>
          Contact
          <code className={styles.code}> src/pages/contact/index.tsx </code>
        </h2>
      </div>
    </MainLayout>
  );
}
