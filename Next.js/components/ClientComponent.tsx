"use client";

import { useFlag, useFlagsStatus } from "@unleash/nextjs/client";

export default function ClientComponent() {
  const isEnabled = useFlag("example-flag");
  const { flagsReady } = useFlagsStatus();

  if (!flagsReady) {
    return "Loading…";
  }

  return isEnabled ? (
    <p>
      Example flag is <strong>enabled</strong>
    </p>
  ) : (
    <p>
      Example flag is <strong>disabled</strong>
    </p>
  );
}
