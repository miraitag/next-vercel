import { Inter } from "next/font/google";
import { MainLayout } from "../../components/layouts/MainLayout";
import styles from "../../components/layouts/MainLayout/MainLayout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <MainLayout>
      <div className={styles.grid}>
        <h2 className={inter.className}>
          Home
          <code className={styles.code}> src/pages/index.tsx </code>
        </h2>
      </div>
    </MainLayout>
  );
}
