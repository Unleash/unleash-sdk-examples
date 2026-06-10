"use client";

import { FlagProvider } from "@unleash/nextjs/client";
import ClientComponent from "../components/ClientComponent";
import styles from "./page.module.css";

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
