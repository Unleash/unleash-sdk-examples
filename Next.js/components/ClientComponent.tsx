"use client";

import { useFlag, useFlagsStatus } from "@unleash/nextjs";

export default function ClientComponent() {
  const isEnabled = useFlag("example-flag");
  const { flagsReady } = useFlagsStatus();

  if (!flagsReady) {
    return "Loading…"
  }

  return (
    <>
      Feature toggle is: <strong>{isEnabled ? "ENABLED" : "DISABLED"}</strong>
    </>
  );
}
