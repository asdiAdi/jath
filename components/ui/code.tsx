"use client";
import React from "react";
import { toast } from "sonner";

export default function Code(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <code
      className="bg-accent p-1 cursor-pointer"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        void navigator.clipboard.writeText(target.textContent || "");
        toast("Code copied!");
      }}
    >
      {children}
    </code>
  );
}
