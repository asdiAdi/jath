"use client";
import CodeBlock from "@/components/ui/codeblock";
import { useLinkStore } from "@/stores/linkStore";
import Link from "next/link";
import Image from "next/image";
export default function Page() {
  const { fabricApiModLink, lithiumModLink } = useLinkStore((state) => state);

  return (
    <div>
      <h2 className="text-2xl font-bold">List of mods required</h2>
      <h3 className="text-xl font-bold mt-4">
        Easy Method: Download{" "}
        <Link
          href="https://modrinth.com/app"
          target="_blank"
          className="text-blue-500 underline"
        >
          Modrinth app
        </Link>
      </h3>

      <h3 className="text-xl font-bold mt-4">Hard Method</h3>
      <h4 className="text-lg font-bold pl-2 mt-2">
        NOTE: IBACKUP MUNA MGA UNMODDED WORLDS IF IOOPEN NYO SYA SA MODDED
        MINECRAFT baka lang masira, wag din iopen modded world gamit unmodded
        launcer.
      </h4>
      <ul className="pl-6 flex gap-2 flex-col">
        <li>
          1. Follow Installation for Fabric with the correct minecraft version
          and loader -{" "}
          <Link
            className="underline text-blue-500 text-xl font-bold"
            href="https://fabricmc.net/use/installer/"
            target="_blank"
          >
            LINK
          </Link>{" "}
          {/*<div className="pl-2">
            Client Tab, Minecraft Version: {fabricData.mcVersion}, Loader
            Version: {fabricData.loaderVersion}, Launcher Location: Don't
            Change, Check Create profile
          </div>*/}
        </li>
        <li>
          2. Download{" "}
          <Link
            className="underline text-blue-500 text-xl font-bold"
            href="https://modrinth.com/mods"
            target="_blank"
          >
            Mods
          </Link>
        </li>
        <li>
          3. Open Windows Explorer and Go to %appdata%
          <div>
            <Image src="/step3.png" alt="step3" width={512} height={100} />
          </div>
        </li>
        <li>4. Go to ".minecraft" folder</li>
        <li>
          5. Go to "mods" folder or create one if not found (Create shortcut to
          desktop para mas madali sa susunod)
        </li>
        <li>6. Paste all mods here</li>
        <li>7. Launch Minecraft</li>
        <li>8. Select fabric-loader</li>
        <li>9. Play</li>
      </ul>

      <h3 className="text-xl font-bold mt-4">Server Side</h3>
      <ul className="pl-6 flex gap-2 flex-col">
        <li>
          <CodeBlock
            title="Fabric API -  Required for mods"
            code={`wget --show-progress ${fabricApiModLink}`}
          />
        </li>
        <li>
          <CodeBlock
            title="Lithium - Game logic optimization"
            code={`wget --show-progress ${lithiumModLink}`}
            //https://www.curseforge.com/minecraft/mc-mods/lithium/download/6290412
          />
        </li>
        <li>Just Copy All Mods(jar files) to mod folder then run the server</li>
        <li>Config files for mods are located at config folder</li>
      </ul>
    </div>
  );
}
