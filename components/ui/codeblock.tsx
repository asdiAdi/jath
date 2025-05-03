"use client";

export default function CodeBlock(props: {
  title: string;
  code: string | React.ReactNode;
}) {
  const { title, code } = props;
  return (
    <div>
      <p>{title}</p>
      <pre>
        <code
          onClick={(e) => {
            const target = e.target as HTMLElement;
            void navigator.clipboard.writeText(target.textContent || "");
          }}
          className="cursor-pointer pl-4"
        >
          {code}
        </code>
      </pre>
    </div>
  );
}
