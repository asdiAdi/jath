"use client";
import CodeBlock from "@/components/ui/codeblock";
import { useLinkStore } from "@/stores/linkStore";

export default function Page() {
  const {
    vanillaServerLink,
    vanillaServerName,
    fabricServerLink,
    fabricServerName,
  } = useLinkStore((state) => state);

  return (
    <div>
      <h2 className="text-2xl font-bold">Setup/Commands etc...</h2>
      <h2 className="text-xl font-bold">
        Note: Requires 16GB of memory R7i instance
      </h2>

      <h3 className="text-xl font-bold mt-4">Vanilla Server Hardware</h3>
      <div className="pl-4 flex gap-2 flex-col">
        <CodeBlock
          title="Update Machine"
          code="sudo apt update && sudo apt upgrade -y"
        />

        <CodeBlock
          title="Install JDK"
          code="sudo apt install openjdk-21-jdk-headless"
        />

        <CodeBlock
          title="Make folder to store server"
          code="mkdir minecraft && cd minecraft"
        />

        <CodeBlock
          title="Download Latest Jar File"
          code={`wget --show-progress -O ${vanillaServerName} ${vanillaServerLink}`}
        />

        <CodeBlock
          title="Initially Start Server"
          code={`java -Xms8G -Xmx12G -jar ${vanillaServerName} --nogui`}
        />

        <CodeBlock title="Edit EULA to TRUE" code="nano eula.txt" />

        <CodeBlock
          title="Edit server.properties"
          code={`nano server.properties
  difficulty=normal
  enforce-whitelist=true
  level-name=Jath World
  sync-chunk-writes=false
  simulation-distance=8
  view-distance=10
  whitelist=true`}
        />

        <CodeBlock
          title="Start the Server"
          code={`java -Xms8G -Xmx12G -jar ${vanillaServerName} --nogui`}
        />

        <CodeBlock title="Add whitelists" code="whitelist add asdiadi" />
      </div>

      <h3 className="text-xl font-bold mt-4">Modded Server Hardware</h3>
      <div className="pl-4 flex gap-2 flex-col">
        <p>We will use Fabric to get as close as vanilla as possible</p>

        <CodeBlock
          title="Update Machine"
          code="sudo apt update && sudo apt upgrade -y"
        />

        <CodeBlock
          title="Install JDK"
          code="sudo apt install openjdk-21-jdk-headless"
        />

        <CodeBlock
          title="Make folder to store server"
          code="mkdir minecraft && cd minecraft"
        />

        <CodeBlock
          title="Download Fabric"
          code={`wget --show-progress -O ${fabricServerName} ${fabricServerLink}`}
        />

        <CodeBlock
          title="Initially Start Server"
          code={`java -Xms8G -Xmx12G -jar ${fabricServerName} --nogui`}
        />

        <CodeBlock title="Edit EULA to TRUE" code="nano eula.txt" />

        <CodeBlock
          title="Edit server.properties"
          code={`nano server.properties
  difficulty=normal
  enforce-whitelist=true
  level-name=Jath World
  sync-chunk-writes=false
  simulation-distance=8
  view-distance=10
  whitelist=true`}
        />

        <CodeBlock
          title="Start the Server"
          code={`java -Xms8G -Xmx12G -jar ${fabricServerName} --nogui`}
        />

        <CodeBlock title="Add whitelists" code="whitelist add asdiadi" />
      </div>

      <h3 className="text-xl font-bold mt-4">
        Alternate way using mrpack-install
      </h3>
      <div className="pl-4 flex gap-2 flex-col">
        <p>This will install all the mods included in a modpack</p>

        <CodeBlock
          title="Update Machine"
          code="sudo apt update && sudo apt upgrade -y"
        />

        <CodeBlock
          title="Install JDK"
          code="sudo apt install openjdk-21-jdk-headless"
        />

        <CodeBlock
          title="Download mrpack-install"
          code={`curl -sSL -o "/tmp/mrpack-install" "https://github.com/nothub/mrpack-install/releases/download/latest/mrpack-install-linux"`}
        />

        <CodeBlock
          title="Install to a place in PATH"
          code={`sudo install -t "/usr/local/bin" "/tmp/mrpack-install"`}
        />

        <CodeBlock
          title="Install modpack"
          code="mrpack-install <modpack-name> --server-dir minecraft --server-file server.jar"
        />

        <CodeBlock title="Go to folder" code="cd minecraft" />

        <CodeBlock title="Edit EULA to TRUE" code="nano eula.txt" />

        <CodeBlock
          title="Edit server.properties"
          code={`nano server.properties
  difficulty=normal
  enforce-whitelist=true
  level-name=Jath World
  sync-chunk-writes=false
  simulation-distance=8
  view-distance=10
  whitelist=true`}
        />

        <CodeBlock
          title="Start the Server"
          code="java -Xms8G -Xmx12G -jar server.jar --nogui"
        />

        <CodeBlock title="Add whitelists" code="whitelist add asdiadi" />

        <CodeBlock
          title="To update, download new modpack, delete mods folder and install again. BACKUP FILES FIRST"
          code="mrpack-install <modpack-name> --server-dir minecraft --server-file server.jar"
        />
      </div>
    </div>
  );
}
