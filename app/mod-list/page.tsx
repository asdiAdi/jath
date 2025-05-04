"use client";
import { useLinkStore } from "@/stores/linkStore";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function DownloadLink(props: {
  title: string;
  link: string;
  description?: string;
  customLink?: boolean;
}) {
  const latestRelease = useLinkStore((state) => state.latestRelease);

  return (
    <div>
      <Link
        href={
          props.customLink
            ? props.link
            : `${props.link}/versions?version=${latestRelease}&loader=fabric#download`
        }
        target="_blank"
        className="text-blue-500 underline"
      >
        {props.title}
      </Link>
      {props.description && (
        <span>
          {" - "}
          {props.description}
        </span>
      )}
    </div>
  );
}

export default function Page() {
  const latestRelease = useLinkStore((state) => state.latestRelease);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-bold">Client Side Mods</h2>
      <div>
        <h4 className="text-lg font-semibold pl-4">
          Optimization/Debugging tools (Can be used in Vanilla)
        </h4>
        <ul className="pl-12 list-disc font-normal flex gap-2 flex-col">
          <li>
            Just Download Modpack for desired version:{" "}
            <Link
              href={`https://modrinth.com/modpack/fabulously-optimized?version=${latestRelease}#download`}
              target="_blank"
              className="text-blue-500 underline"
            >
              Fabulously Optimized
            </Link>
            <p className="pl-8">
              Or Download them 1 by 1{" "}
              <Button
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
              >
                {isOpen ? "Close" : "Open"}
              </Button>
            </p>
            {isOpen && (
              <pre>
                {`        https://modrinth.com/mod/fastquit
        https://modrinth.com/mod/cit-resewn
        https://modrinth.com/mod/modelfix
        https://modrinth.com/mod/entity-model-features
        https://modrinth.com/mod/iris
        https://modrinth.com/resourcepack/fast-better-grass
        https://modrinth.com/mod/dynamic-fps
        https://modrinth.com/mod/nuit
        https://modrinth.com/mod/fabric-api
        https://modrinth.com/resourcepack/chat-reporting-helper
        https://modrinth.com/mod/optigui
        https://modrinth.com/mod/immediatelyfast
        https://modrinth.com/mod/fabrishot
        https://modrinth.com/mod/cloth-config
        https://modrinth.com/mod/moreculling
        https://modrinth.com/mod/cubes-without-borders
        https://modrinth.com/mod/language-reload
        https://modrinth.com/mod/mixintrace
        https://modrinth.com/mod/modmenu
        https://modrinth.com/mod/better-mount-hud
        https://modrinth.com/mod/polytone
        https://modrinth.com/mod/continuity
        https://modrinth.com/mod/nuit-interop
        https://modrinth.com/mod/e4mc
        https://modrinth.com/mod/sodium
        https://modrinth.com/mod/puzzle
        https://modrinth.com/mod/lambdynamiclights
        https://modrinth.com/mod/yosbr
        https://modrinth.com/mod/paginatedadvancements
        https://modrinth.com/mod/modernfix
        https://modrinth.com/mod/sodium-extra
        https://modrinth.com/mod/fabric-language-kotlin
        https://modrinth.com/mod/controlify
        https://modrinth.com/resourcepack/translations-for-sodium
        https://modrinth.com/mod/animatica
        https://modrinth.com/mod/entitytexturefeatures
        https://modrinth.com/mod/lithium
        https://modrinth.com/mod/no-chat-reports
        https://modrinth.com/mod/ebe
        https://modrinth.com/mod/morechathistory
        https://modrinth.com/mod/main-menu-credits
        https://modrinth.com/mod/yacl
        https://modrinth.com/mod/debugify
        https://modrinth.com/mod/zoomify
        https://modrinth.com/mod/reeses-sodium-options
        https://modrinth.com/mod/entityculling
        https://modrinth.com/mod/capes
        https://modrinth.com/mod/rrls
        https://modrinth.com/mod/ferrite-core
        `}
              </pre>
            )}
          </li>
          <li>
            Additional (Optional)
            <ul className="pl-12 list-disc font-normal flex gap-2 flex-col">
              <li>
                <DownloadLink
                  title="Controlling"
                  link="https://modrinth.com/mod/controlling"
                  description="Search for Keybinds, resolve keybind conflicts"
                />
              </li>
              <li>
                <DownloadLink
                  title="BetterF3"
                  link="https://modrinth.com/mod/betterf3"
                  description="Debug HUD replacement"
                />
              </li>
              <li>
                <DownloadLink
                  title="Concurrent Chunk Management Engine (C2ME)"
                  link="https://modrinth.com/mod/c2me-fabric"
                  description="Improve the chunk performance of Minecraft, useful for distant horizons"
                />
              </li>
              <li>
                <DownloadLink
                  title="ScalableLux"
                  link="https://modrinth.com/mod/scalablelux"
                  description="Improves the performance of light updates in Minecraft, used in conjunction with C2ME"
                />
              </li>
            </ul>
          </li>
        </ul>

        <h4 className="text-lg font-semibold pl-4">
          GameState Mods - required to play in server, version should be the
          same with the server.
        </h4>
        <ul className="pl-12 list-disc font-normal flex gap-2 flex-col">
          <li>
            <DownloadLink
              title="JourneyMap"
              link="https://modrinth.com/mod/journeymap"
              description="Worldmap and Minimap, radar and cave mapping disabled"
            />
          </li>
          <li>
            <DownloadLink
              title="Waystones"
              link="https://modrinth.com/mod/waystones"
              description="Adds teleportation methods via Waystones"
            />
          </li>
          <li>
            <DownloadLink
              title="Veinminer"
              link="https://modrinth.com/datapack/veinminer"
              description="Mine whole vine when mining a single ore."
            />
          </li>
          <li>
            <DownloadLink
              title="Veinminer Enchantment"
              link="https://modrinth.com/datapack/veinminer-enchantment"
              description="Add enchantment to balance veinminer (Requires bookshelf mod, install manually)"
            />
          </li>
          <li>
            <DownloadLink
              title="Sophisticated Backpacks (Unoffical Fabric port)"
              link="https://modrinth.com/mod/sophisticated-backpacks-(unoffical-fabric-port)"
              description="Backpack solution"
            />
          </li>
          <li>
            <DownloadLink
              title="Sophisticated Storage (Unofficial Fabric port)"
              link="https://modrinth.com/mod/sophisticated-storage-(unofficial-fabric-port)"
              description="Storage Solution"
            />
          </li>
          <li>
            <DownloadLink
              title="Sophisticated Core (Unofficial Fabric port)"
              link="https://modrinth.com/mod/sophisticated-core-(unofficial-fabric-port)"
              description="Backpack and Storage solution dependency"
            />
          </li>
          <li>
            <DownloadLink
              title="Immersive Aircraft"
              link="https://modrinth.com/mod/immersive-aircraft"
              description="Add aircraft mod"
            />
          </li>
          <li>
            <DownloadLink
              title="Man of Many Planes"
              link="https://modrinth.com/mod/man-of-many-planes"
              description="Add more aircraft"
            />
          </li>
          <li>
            <DownloadLink
              title="Small Ships"
              link="https://modrinth.com/mod/small-ships"
              description="Add ship mod"
            />
          </li>
          <li>
            <DownloadLink
              title="Better Combat"
              link="https://modrinth.com/mod/better-combat"
              description="Combat Animations"
            />
          </li>
          <li>
            <DownloadLink
              title="Combat Roll"
              link="https://modrinth.com/mod/combat-roll"
              description="Press R to roll"
            />
          </li>
          <li>
            <DownloadLink
              title="Runes"
              link="https://modrinth.com/mod/runes"
              description="Add Runes for magic"
            />
          </li>
          <li>
            <DownloadLink
              title="Wizards"
              link="https://modrinth.com/mod/wizards"
              description="Add Wizard Items"
            />
          </li>

          <li>
            <DownloadLink
              title="Paladins and Priests"
              link="https://modrinth.com/mod/paladins-and-priests"
              description="Add Paladins and Priests Items"
            />
          </li>
          <li>
            <DownloadLink
              title="Archers"
              link="https://modrinth.com/mod/archers"
              description="Add Archer Items"
            />
          </li>
          <li>
            <DownloadLink
              title="Rouges and Warriors"
              link="https://modrinth.com/mod/rogues-and-warriors"
              description="Add Rouges and Warriors Item"
            />
          </li>
          <li>
            <DownloadLink
              title="Trinkets"
              link="https://modrinth.com/mod/trinkets"
              description="Add Trinkets"
            />
          </li>
          <li>
            <DownloadLink
              title="Jewelry"
              link="https://modrinth.com/mod/jewelry"
              description="Add Jewelry"
            />
          </li>
          <li>
            <DownloadLink
              title="Natures Compass"
              link="https://modrinth.com/mod/natures-compass"
              description="Find Biomes"
            />
          </li>
          <li>
            <DownloadLink
              title="Explorers Compass"
              link="https://modrinth.com/mod/explorers-compass"
              description="Find Structures"
            />
          </li>
          <li>
            <DownloadLink
              title="Zombie Awareness"
              link="https://modrinth.com/mod/zombie-awareness"
              description="Add zombie AI"
            />
          </li>
          <li>
            <DownloadLink
              title="AdventureZ"
              link="https://modrinth.com/mod/adventurez"
              description="Add more enemies"
            />
          </li>
          <li>
            <DownloadLink
              title="Voidz"
              link="https://modrinth.com/mod/voidz"
              description="Add more enemies"
            />
          </li>
          <li>
            <DownloadLink
              title="Simple Voice Chat"
              link="https://modrinth.com/plugin/simple-voice-chat"
              description="Add proximity voice chat"
            />
          </li>
          <li>
            <DownloadLink
              title="FTB Essentials"
              link="https://www.curseforge.com/minecraft/mc-mods/ftb-essentials"
              customLink
              description="Add more commands"
            />
          </li>
          <li>
            <DownloadLink
              title="Tectonic"
              link="https://modrinth.com/datapack/tectonic"
              description="Large mountains"
            />
          </li>

          <li>
            <DownloadLink
              title="Terralith"
              link="https://modrinth.com/datapack/terralith"
              description="More Biomes"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Nether Fortresses"
              link="https://modrinth.com/mod/yungs-better-nether-fortresses"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Dungeon"
              link="https://modrinth.com/mod/yungs-better-dungeons"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Mineshafts"
              link="https://modrinth.com/mod/yungs-better-mineshafts"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Ocean Monuments"
              link="https://modrinth.com/mod/yungs-better-ocean-monuments"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Jungle Temples"
              link="https://modrinth.com/mod/yungs-better-jungle-temples"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Strongholds"
              link="https://modrinth.com/mod/yungs-better-strongholds"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Witch Huts"
              link="https://modrinth.com/mod/yungs-better-witch-huts"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better End Island"
              link="https://modrinth.com/mod/yungs-better-end-island"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Bridges"
              link="https://modrinth.com/mod/yungs-bridges"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Desert Temples"
              link="https://modrinth.com/mod/yungs-better-desert-temples"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Extras"
              link="https://modrinth.com/mod/yungs-extras"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Better Nether"
              link="https://modrinth.com/mod/betternether"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Nullscape"
              link="https://modrinth.com/datapack/nullscape"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Better End"
              link="https://modrinth.com/mod/betterend"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="CT Overhaul Village"
              link="https://modrinth.com/mod/ct-overhaul-village"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Better Village"
              link="https://modrinth.com/mod/better-village"
              description="Structure revamp"
            />
          </li>
        </ul>

        <h4 className="text-lg font-semibold pl-4">
          API - required to play in server, game needs this to run gamestate
          mods
        </h4>
        <ul className="pl-12 list-disc font-normal flex gap-2 flex-col">
          <li>
            <DownloadLink
              title="Forge Config API Port"
              link="https://modrinth.com/mod/forge-config-api-port"
            />
          </li>
          <li>
            <DownloadLink title="Balm" link="https://modrinth.com/mod/balm" />
          </li>
          <li>
            <DownloadLink
              title="Player Animator"
              link="https://modrinth.com/mod/playeranimator"
            />
          </li>
          <li>
            <DownloadLink
              title="Azure Lib"
              link="https://modrinth.com/mod/azurelib"
            />
          </li>
          <li>
            <DownloadLink
              title="Spell Engine"
              link="https://modrinth.com/mod/spell-engine"
            />
          </li>
          <li>
            <DownloadLink
              title="Spell Power"
              link="https://modrinth.com/mod/spell-power"
            />
          </li>
          <li>
            <DownloadLink
              title="Structure Pool API"
              link="https://modrinth.com/mod/structure-pool-api"
            />
          </li>
          <li>
            <DownloadLink
              title="Bundle"
              link="https://modrinth.com/mod/bundle-api"
            />
          </li>
          <li>
            <DownloadLink
              title="Ranged Weapon"
              link="https://modrinth.com/mod/ranged-weapon-api"
            />
          </li>
          <li>
            <DownloadLink
              title="Coroutil"
              link="https://modrinth.com/mod/coroutil"
            />
          </li>
          <li>
            <DownloadLink
              title="FTB Library"
              link="https://www.curseforge.com/minecraft/mc-mods/ftb-library-fabric"
              customLink
            />
          </li>
          <li>
            <DownloadLink
              title="Architectury"
              link="https://modrinth.com/mod/architectury-api"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs API"
              link="https://modrinth.com/mod/yungs-api"
            />
          </li>
          <li>
            <DownloadLink title="BCLib" link="https://modrinth.com/mod/bclib" />
          </li>
          <li>
            <DownloadLink
              title="Library Ferret"
              link="https://modrinth.com/mod/library-ferret"
            />
          </li>
          <li>
            <DownloadLink
              title="Lithostitched"
              link="https://modrinth.com/mod/lithostitched"
            />
          </li>
          <li>
            <DownloadLink
              title="WorldWeaver"
              link="https://modrinth.com/mod/worldweaver"
            />
          </li>
          <li>
            <DownloadLink title="Silk" link="https://modrinth.com/mod/silk" />
          </li>
          <li>
            <DownloadLink
              title="Shield API"
              link="https://modrinth.com/mod/shield-api"
            />
          </li>
        </ul>

        <h4 className="text-lg font-semibold pl-4">
          Optional Mods (Can be deleted or not installed)
        </h4>
        <ul className="pl-12 list-disc font-normal flex gap-2 flex-col">
          <li>
            <b>Aesthethics</b>
            <ul className="pl-12 list-disc font-normal flex gap-2 flex-col">
              <li>
                <DownloadLink
                  title="3D Skin Layers"
                  link="https://modrinth.com/mod/3dskinlayers"
                  description="3D Modeled Player Skins"
                />
              </li>
              <li>
                <DownloadLink
                  title="Visuality"
                  link="https://modrinth.com/mod/visuality"
                  description="Add more particle effects"
                />
              </li>
              <li>
                <DownloadLink
                  title="Falling Leaves"
                  link="https://modrinth.com/mod/fallingleaves"
                  description="Add particle effect of falling leaves"
                />
              </li>
              <li>
                <DownloadLink
                  title="Cave Dust"
                  link="https://modrinth.com/mod/cave-dust"
                  description="Add particle effect inside caves"
                />
              </li>
              <li>
                <DownloadLink
                  title="Particle Rain"
                  link="https://modrinth.com/mod/particle-rain"
                  description="Add particle effect for rain (might reduce fps)"
                />
              </li>
              <li>
                <DownloadLink
                  title="Blur+"
                  link="https://modrinth.com/mod/blur-plus"
                  description="Blur Environment when opening up chests"
                />
              </li>
              <li>
                <DownloadLink
                  title="Not Enough Animations"
                  link="https://modrinth.com/mod/not-enough-animations"
                  description="Add 3rd person animations"
                />
              </li>
              <li>
                <DownloadLink
                  title="Fresh Animations"
                  link="https://modrinth.com/resourcepack/fresh-animations"
                  description="Animations for mobs (Edit in resource packs to see)"
                />
              </li>
              <li>
                <DownloadLink
                  title="Distant Horizons"
                  link="https://modrinth.com/mod/distanthorizons"
                  description="See beyond viewing distance (WARNING: PERFORMANCE HIT)"
                />
              </li>
              <li>
                <DownloadLink
                  title="Shaders"
                  link="https://modrinth.com/shaders"
                  customLink
                  description="Recommended: Complementary Shaders Reimagined/Unbound (Add Iris shaders first but it's already included in the Modpack)"
                />
              </li>
            </ul>
          </li>

          <li>
            <b>Quality of Life</b>
            <ul className="pl-12 list-disc font-normal flex gap-2 flex-col">
              <li>
                <DownloadLink
                  title="JEI"
                  link="https://modrinth.com/mod/jei"
                  customLink
                  description="Item and recipe viewing mod (can't download on modrinth, download and put directly in mod folder)"
                />
              </li>
              <li>
                <DownloadLink
                  title="EMI"
                  link="https://modrinth.com/mod/emi"
                  description="Item and recipe viewing mod, can be used with JEI"
                />
              </li>
              <li>
                <DownloadLink
                  title="Polymorph"
                  link="https://modrinth.com/mod/polymorph"
                  description="Avoid recipe conflicts"
                />
              </li>
              <li>
                <DownloadLink
                  title="Jade"
                  link="https://modrinth.com/mod/jade"
                  description="Information HUD mod"
                />
              </li>
              <li>
                <DownloadLink
                  title="AppleSkin"
                  link="https://modrinth.com/mod/appleskin"
                  description="Show saturation and exhaustion"
                />
              </li>
              <li>
                <DownloadLink
                  title="Mouse Tweaks"
                  link="https://modrinth.com/mod/mouse-tweaks"
                  description="Enhance inventory management by adding more mouse functions"
                />
              </li>

              <li>
                <DownloadLink
                  title="Item Borders"
                  link="https://modrinth.com/mod/item-borders"
                  description="Highlight rare items"
                />
              </li>
              <li>
                <DownloadLink
                  title="Item Highlighter"
                  link="https://modrinth.com/mod/item-highlighter"
                  description="Highlight newly picked items"
                />
              </li>

              <li>
                <DownloadLink
                  title="Pick Up Notifier"
                  link="https://modrinth.com/mod/pick-up-notifier"
                  description="Notifies user when item is picked up"
                />
              </li>
              <li>
                <DownloadLink
                  title="Enchantment Descriptions"
                  link="https://modrinth.com/mod/enchantment-descriptions"
                  description="Add enchantment descriptions"
                />
              </li>
              <li>
                <DownloadLink
                  title="Shulker Box Tooltip"
                  link="https://modrinth.com/mod/shulkerboxtooltip"
                  description="View contents of shulker boxes from inventory"
                />
              </li>

              <li>
                <DownloadLink
                  title="Better Advancements"
                  link="https://modrinth.com/mod/better-advancements"
                  description="Revamp advancements UI"
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-4">Server Side Mods</h3>
      <div>
        <h4 className="text-lg font-semibold pl-4">Optimization tools</h4>
        <ul className="pl-12 list-disc font-normal flex gap-2 flex-col">
          <li>
            <DownloadLink
              title="Fabric API"
              link="https://modrinth.com/mod/fabric-api"
            />
          </li>
          <li>
            <DownloadLink
              title="Lithium"
              link="https://modrinth.com/mod/lithium"
            />
          </li>
          <li>
            <DownloadLink
              title="FerriteCore"
              link="https://modrinth.com/mod/ferrite-core"
            />
          </li>
          <li>
            <DownloadLink
              title="ModernFix"
              link="https://modrinth.com/mod/modernfix"
            />
          </li>
          <li>
            <DownloadLink
              title="Debugify"
              link="https://modrinth.com/mod/debugify"
            />
          </li>
          <li>
            <DownloadLink
              title="MixinTrace"
              link="https://modrinth.com/mod/mixintrace"
            />
          </li>
          <li>
            <DownloadLink
              title="Fabric Language Kotlin"
              link="https://modrinth.com/mod/fabric-language-kotlin"
            />
          </li>
          <li>
            <DownloadLink
              title="C2ME"
              link="https://modrinth.com/mod/c2me-fabric"
              description="Improve the chunk performance of Minecraft, useful for distant horizons"
            />
          </li>
          <li>
            <DownloadLink
              title="ScalableLux"
              link="https://modrinth.com/mod/scalablelux"
              description="Improves the performance of light updates in Minecraft, used in conjunction with C2ME"
            />
          </li>
        </ul>

        <h4 className="text-lg font-semibold pl-4 mt-4">World Generation</h4>
        <ul className="pl-12 list-disc font-normal flex gap-2 flex-col">
          <li>
            <DownloadLink
              title="Fabric API"
              link="https://modrinth.com/mod/fabric-api"
            />
          </li>
        </ul>

        <h4 className="text-lg font-semibold pl-4 mt-4">GameState Mods</h4>
        <ul className="pl-12 list-disc font-normal flex gap-2 flex-col">
          <li>
            <DownloadLink
              title="JourneyMap"
              link="https://modrinth.com/mod/journeymap"
              description="Worldmap and Minimap, radar and cave mapping disabled"
            />
          </li>
          <li>
            <DownloadLink
              title="Waystones"
              link="https://modrinth.com/mod/waystones"
              description="Adds teleportation methods via Waystones"
            />
          </li>
          <li>
            <DownloadLink
              title="Veinminer"
              link="https://modrinth.com/datapack/veinminer"
              description="Mine whole vine when mining a single ore."
            />
          </li>
          <li>
            <DownloadLink
              title="Veinminer Enchantment"
              link="https://modrinth.com/datapack/veinminer-enchantment"
              description="Add enchantment to balance veinminer"
            />
          </li>
          <li>
            <DownloadLink
              title="Sophisticated Backpacks (Unoffical Fabric port)"
              link="https://modrinth.com/mod/sophisticated-backpacks-(unoffical-fabric-port)"
              description="Backpack solution"
            />
          </li>
          <li>
            <DownloadLink
              title="Sophisticated Storage (Unofficial Fabric port)"
              link="https://modrinth.com/mod/sophisticated-storage-(unofficial-fabric-port)"
              description="Storage Solution"
            />
          </li>
          <li>
            <DownloadLink
              title="Sophisticated Core (Unofficial Fabric port)"
              link="https://modrinth.com/mod/sophisticated-core-(unofficial-fabric-port)"
              description="Backpack and Storage solution dependency"
            />
          </li>
          <li>
            <DownloadLink
              title="Immersive Aircraft"
              link="https://modrinth.com/mod/immersive-aircraft"
              description="Add aircraft mod"
            />
          </li>
          <li>
            <DownloadLink
              title="Man of Many Planes"
              link="https://modrinth.com/mod/man-of-many-planes"
              description="Add more aircraft"
            />
          </li>
          <li>
            <DownloadLink
              title="Small Ships"
              link="https://modrinth.com/mod/small-ships"
              description="Add ship mod"
            />
          </li>
          <li>
            <DownloadLink
              title="Better Combat"
              link="https://modrinth.com/mod/better-combat"
              description="Combat Animations"
            />
          </li>
          <li>
            <DownloadLink
              title="Combat Roll"
              link="https://modrinth.com/mod/combat-roll"
              description="Press R to roll"
            />
          </li>
          <li>
            <DownloadLink
              title="Runes"
              link="https://modrinth.com/mod/runes"
              description="Add Runes for magic"
            />
          </li>
          <li>
            <DownloadLink
              title="Wizards"
              link="https://modrinth.com/mod/wizards"
              description="Add Wizard Items"
            />
          </li>

          <li>
            <DownloadLink
              title="Paladins and Priests"
              link="https://modrinth.com/mod/paladins-and-priests"
              description="Add Paladins and Priests Items"
            />
          </li>
          <li>
            <DownloadLink
              title="Archers"
              link="https://modrinth.com/mod/archers"
              description="Add Archer Items"
            />
          </li>
          <li>
            <DownloadLink
              title="Rouges and Warriors"
              link="https://modrinth.com/mod/rogues-and-warriors"
              description="Add Rouges and Warriors Item"
            />
          </li>
          <li>
            <DownloadLink
              title="Trinkets"
              link="https://modrinth.com/mod/trinkets"
              description="Add Trinkets"
            />
          </li>
          <li>
            <DownloadLink
              title="Jewelry"
              link="https://modrinth.com/mod/jewelry"
              description="Add Jewelry"
            />
          </li>
          <li>
            <DownloadLink
              title="Natures Compass"
              link="https://modrinth.com/mod/natures-compass"
              description="Find Biomes"
            />
          </li>
          <li>
            <DownloadLink
              title="Explorers Compass"
              link="https://modrinth.com/mod/explorers-compass"
              description="Find Structures"
            />
          </li>
          <li>
            <DownloadLink
              title="Zombie Awareness"
              link="https://modrinth.com/mod/zombie-awareness"
              description="Add zombie AI"
            />
          </li>
          <li>
            <DownloadLink
              title="AdventureZ"
              link="https://modrinth.com/mod/adventurez"
              description="Add more enemies"
            />
          </li>
          <li>
            <DownloadLink
              title="Voidz"
              link="https://modrinth.com/mod/voidz"
              description="Add more enemies"
            />
          </li>
          <li>
            <DownloadLink
              title="Simple Voice Chat"
              link="https://modrinth.com/plugin/simple-voice-chat"
              description="Add proximity voice chat"
            />
          </li>
          <li>
            <DownloadLink
              title="FTB Essentials"
              link="https://www.curseforge.com/minecraft/mc-mods/ftb-essentials"
              customLink
              description="Add more commands"
            />
          </li>
          <li>
            <DownloadLink
              title="Tectonic"
              link="https://modrinth.com/datapack/tectonic"
              description="Large mountains"
            />
          </li>
          <li>
            <DownloadLink
              title="Terralith"
              link="https://modrinth.com/datapack/terralith"
              description="More Biomes"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Nether Fortresses"
              link="https://modrinth.com/mod/yungs-better-nether-fortresses"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Dungeon"
              link="https://modrinth.com/mod/yungs-better-dungeons"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Mineshafts"
              link="https://modrinth.com/mod/yungs-better-mineshafts"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Ocean Monuments"
              link="https://modrinth.com/mod/yungs-better-ocean-monuments"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Jungle Temples"
              link="https://modrinth.com/mod/yungs-better-jungle-temples"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Strongholds"
              link="https://modrinth.com/mod/yungs-better-strongholds"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Witch Huts"
              link="https://modrinth.com/mod/yungs-better-witch-huts"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better End Island"
              link="https://modrinth.com/mod/yungs-better-end-island"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Bridges"
              link="https://modrinth.com/mod/yungs-bridges"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Better Desert Temples"
              link="https://modrinth.com/mod/yungs-better-desert-temples"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs Extras"
              link="https://modrinth.com/mod/yungs-extras"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Better Nether"
              link="https://modrinth.com/mod/betternether"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Nullscape"
              link="https://modrinth.com/datapack/nullscape"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Better End"
              link="https://modrinth.com/mod/betterend"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="CT Overhaul Village"
              link="https://modrinth.com/mod/ct-overhaul-village"
              description="Structure revamp"
            />
          </li>
          <li>
            <DownloadLink
              title="Better Village"
              link="https://modrinth.com/mod/better-village"
              description="Structure revamp"
            />
          </li>
        </ul>

        <h4 className="text-lg font-semibold pl-4 mt-4">Support</h4>
        <ul className="pl-12 list-disc font-normal flex gap-2 flex-col">
          <li>
            <DownloadLink
              title="Distant Horizons (PLEASE READ LINK AGAIN) (LODs will automatically be sent to each connected user that has DH installed and has Distant Generation Enabled set to true)"
              link="https://gitlab.com/distant-horizons-team/distant-horizons/-/wikis/1-user-guide/1-frequently-asked-questions/5-server-owners/Server-Owners"
              customLink
              description={`Support fast lod rendering for the client, just put the client jar in the server mod, run "/dh pregen"`}
            />
          </li>
          <li>
            <DownloadLink title="Balm" link="https://modrinth.com/mod/balm" />
          </li>
          <li>
            <DownloadLink
              title="Xaero's Worldmap"
              link="https://modrinth.com/mod/xaeros-world-map"
            />
          </li>
          <li>
            <DownloadLink
              title="Xaero's Worldmap"
              link="https://modrinth.com/mod/xaeros-minimap"
            />
          </li>
          <li>
            <DownloadLink title="JEI" link="https://modrinth.com/mod/jei" />
          </li>
          <li>
            <DownloadLink title="EMI" link="https://modrinth.com/mod/emi" />
          </li>
          <li>
            <DownloadLink
              title="Polymorph"
              link="https://modrinth.com/mod/polymorph"
            />
          </li>
          <li>
            <DownloadLink title="Jade" link="https://modrinth.com/mod/jade" />
          </li>
          <li>
            <DownloadLink
              title="AppleSkin"
              link="https://modrinth.com/mod/appleskin"
            />
          </li>

          <li>
            <DownloadLink
              title="Player Animator"
              link="https://modrinth.com/mod/playeranimator"
            />
          </li>
          <li>
            <DownloadLink
              title="Azure Lib"
              link="https://modrinth.com/mod/azurelib"
            />
          </li>
          <li>
            <DownloadLink
              title="Spell Engine"
              link="https://modrinth.com/mod/spell-engine"
            />
          </li>
          <li>
            <DownloadLink
              title="Spell Power"
              link="https://modrinth.com/mod/spell-power"
            />
          </li>
          <li>
            <DownloadLink
              title="Structure Pool API"
              link="https://modrinth.com/mod/structure-pool-api"
            />
          </li>
          <li>
            <DownloadLink
              title="Bundle"
              link="https://modrinth.com/mod/bundle-api"
            />
          </li>
          <li>
            <DownloadLink
              title="Ranged Weapon"
              link="https://modrinth.com/mod/ranged-weapon-api"
            />
          </li>
          <li>
            <DownloadLink
              title="Coroutil"
              link="https://modrinth.com/mod/coroutil"
            />
          </li>
          <li>
            <DownloadLink
              title="FTB Library"
              link="https://www.curseforge.com/minecraft/mc-mods/ftb-library-fabric"
              customLink
            />
          </li>
          <li>
            <DownloadLink
              title="Architectury"
              link="https://modrinth.com/mod/architectury-api"
            />
          </li>
          <li>
            <DownloadLink
              title="Yungs API"
              link="https://modrinth.com/mod/yungs-api"
            />
          </li>
          <li>
            <DownloadLink title="BCLib" link="https://modrinth.com/mod/bclib" />
          </li>
          <li>
            <DownloadLink
              title="Library Ferret"
              link="https://modrinth.com/mod/library-ferret"
            />
          </li>
          <li>
            <DownloadLink
              title="Lithostitched"
              link="https://modrinth.com/mod/lithostitched"
            />
          </li>
          <li>
            <DownloadLink
              title="WorldWeaver"
              link="https://modrinth.com/mod/worldweaver"
            />
          </li>
          <li>
            <DownloadLink title="Silk" link="https://modrinth.com/mod/silk" />
          </li>
          <li>
            <DownloadLink
              title="Shield API"
              link="https://modrinth.com/mod/shield-api"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
