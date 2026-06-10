"use client";

import { FlagProvider } from "@unleash/nextjs/client";
import ClientComponent from "../components/ClientComponent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <FlagProvider
          config={{
            url: process.env.NEXT_PUBLIC_UNLEASH_FRONTEND_API_URL ?? "",
            clientKey: process.env.NEXT_PUBLIC_UNLEASH_FRONTEND_API_TOKEN ?? "",
            appName: process.env.NEXT_PUBLIC_UNLEASH_APP_NAME ?? "",
          }}
        >
          <ClientComponent />
        </FlagProvider>
      </main>
    </div>
  );
}
