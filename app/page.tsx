"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { Button } from "@/components/ui/button";
import Code from "@/components/ui/code";
import { useLinkStore } from "@/stores/linkStore";

Amplify.configure(outputs);

export default function App() {
  const { clientModpackLink, serverModpackLink } = useLinkStore(
    (state) => state,
  );

  // return <Main/>
  return (
    <main>
      <h2 className="text-xl font-semibold">Server Status</h2>

      <h2 className="text-xl font-semibold">Download Minecraft</h2>
      <div className="flex flex-row gap-4 m-2">
        <Button className="cursor-pointer" disabled={!clientModpackLink}>
          {clientModpackLink ? (
            <a
              href={clientModpackLink.url.toString()}
              target="_blank"
              rel="noreferrer"
            >
              Client
            </a>
          ) : (
            "Client"
          )}
        </Button>
        <Button className="cursor-pointer" disabled={!serverModpackLink}>
          {serverModpackLink ? (
            <a
              href={serverModpackLink.url.toString()}
              target="_blank"
              rel="noreferrer"
            >
              Server
            </a>
          ) : (
            "Server"
          )}
        </Button>
      </div>

      <h2 className="text-xl font-semibold">Rules</h2>
      <ul className="list-disc pl-4">
        <li>Survival</li>
        <li>Normal Difficulty</li>
        <li>PVP On</li>
        <li>Keep Inventory on Death</li>
        <li>Only 1 player required to skip night</li>
        <li>
          Maximum World size of 12k x 12k blocks or around 144000 block area
        </li>
      </ul>

      <hr className="my-4" />

      <h2 className="text-xl font-semibold">Allowed Cheats</h2>
      <ul className="list-disc pl-4 flex gap-2 flex-col">
        <li>
          <Code>/spawn</Code> - Teleport to world spawn
        </li>
        <li>
          <Code>{"/tpa <player>"}</Code> - Teleport to player
        </li>
      </ul>

      <hr className="my-4" />
    </main>
  );
}
