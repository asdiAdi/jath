"use client";
import Code from "@/components/ui/code";
import React from "react";

export default function CodeBlock(props: {
  title: string;
  code: string | React.ReactNode;
}) {
  const { title, code } = props;
  return (
    <div>
      <p>{title}</p>
      <pre className="pl-4">
        <Code>{code}</Code>
      </pre>
    </div>
  );
}
