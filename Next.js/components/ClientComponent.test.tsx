import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import ClientComponent from "./ClientComponent";

vi.mock("@unleash/nextjs", () => ({
  useFlag: vi.fn(),
  useFlagsStatus: vi.fn(),
}));

import { useFlag, useFlagsStatus } from "@unleash/nextjs";

const mockUseFlag = vi.mocked(useFlag);
const mockUseFlagsStatus = vi.mocked(useFlagsStatus);

describe("ClientComponent", () => {
  it("shows loading state while flags are not ready", () => {
    mockUseFlagsStatus.mockReturnValue({ flagsReady: false, flagsError: null });
    mockUseFlag.mockReturnValue(false);

    render(<ClientComponent />);

    expect(screen.getByText("Loading…")).toBeInTheDocument();
  });

  it("shows ENABLED when flag is on", () => {
    mockUseFlagsStatus.mockReturnValue({ flagsReady: true, flagsError: null });
    mockUseFlag.mockReturnValue(true);

    render(<ClientComponent />);

    expect(screen.getByText("ENABLED")).toBeInTheDocument();
  });

  it("shows DISABLED when flag is off", () => {
    mockUseFlagsStatus.mockReturnValue({ flagsReady: true, flagsError: null });
    mockUseFlag.mockReturnValue(false);

    render(<ClientComponent />);

    expect(screen.getByText("DISABLED")).toBeInTheDocument();
  });
});
