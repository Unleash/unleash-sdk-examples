'use client';

import styles from "./page.module.css";
import { FlagProvider } from "@unleash/nextjs";
import ClientComponent from "../components/ClientComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FlagProvider>
          <ClientComponent />
        </FlagProvider>
      </main>
    </div>
  );
}
