"use client";
import { createContext, ReactNode, useEffect } from "react";
import { useLinkStore } from "@/stores/linkStore";

const LinkContext = createContext<{ testData: boolean }>(null!);
const DEFAULT_VERSION = "1.21.1"; //TODO: Add to DATABASE the chosen default server version

export default function LinkProvider({ children }: { children: ReactNode }) {
  const fetchData = useLinkStore((state) => state.fetchData);
  const testData = useLinkStore((state) => state.latestRelease);

  useEffect(() => {
    if (!testData) {
      fetchData(DEFAULT_VERSION);
    }
  }, [testData, fetchData]);

  return (
    <LinkContext.Provider value={{ testData: !!testData }}>
      {children}
    </LinkContext.Provider>
  );
}
