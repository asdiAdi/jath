"use client";

import CodeBlock from "@/components/ui/codeblock";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function useOpen() {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen: isOpen,
    toggle: () => setIsOpen(!isOpen),
  };
}

function TitleToggle(props: {
  title: string;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <h3 className="text-xl font-bold mt-4">
      {props.title}{" "}
      <Button className="cursor-pointer" onClick={props.toggle}>
        {props.isOpen ? "Close" : "Open"}
      </Button>
    </h3>
  );
}

export default function Page() {
  const mcC = useOpen();
  const mcBg = useOpen();

  return (
    <div>
      <TitleToggle title="Minecraft Commands" {...mcC} />
      {mcC.isOpen && (
        <div className="pl-4 flex gap-2 flex-col">
          <CodeBlock title="Save all" code="save-all" />
          <CodeBlock title="Add to whitelist" code="whitelist add asdiadi" />
          <CodeBlock title="Teleport" code="tp asdiadi kangkang" />
          <CodeBlock title="Add server permisssions" code="op asdiadi" />
          <CodeBlock title="stop server" code="stop" />
        </div>
      )}

      <TitleToggle title="Run Minecraft in Background" {...mcBg} />
      {mcBg.isOpen && (
        <div className="pl-4 flex gap-2 flex-col">
          <CodeBlock
            title="Install tmux"
            code="sudo apt update && sudo apt install tmux -y"
          />
          <CodeBlock title="Start a tmux session" code="tmux new -s mc" />
          <CodeBlock
            title="Start Minecraft Server"
            code="java -Xms2G -Xmx4G -jar serverName.jar --nogui"
          />
          <CodeBlock
            title="Detach from tmux (leave server running)"
            code="Ctrl + b, then d"
          />
          <CodeBlock
            title="Reattach to the session later"
            code="tmux attach -t mc"
          />
          <CodeBlock
            title="Send a command to Minecraft from outside tmux, C-m simulates the Enter key"
            code={`tmux send-keys -t mc "say Hello from tmux!" C-m`}
          />
          <CodeBlock title="List tmux sessions" code="tmux ls" />
          <CodeBlock
            title="Kill a specific session by name"
            code="tmux kill-session -t session-name"
          />
        </div>
      )}
    </div>
  );
}
