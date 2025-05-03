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
              title="Forge Config API Port"
              link="https://modrinth.com/mod/forge-config-api-port"
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
              {/*<li>
                <DownloadLink
                  title="Inventory Profiles Next"
                  link="https://modrinth.com/mod/inventory-profiles-next"
                  description="Add Inventory shorcut (Warning: a bit bloated)"
                />
              </li>
              <li>
                <DownloadLink
                  title="Chest Tracker"
                  link="https://modrinth.com/mod/chest-tracker"
                  description="Search chest inventory"
                />
              </li>*/}
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
              title="Silk"
              link="https://modrinth.com/mod/silk"
              description="Veinminer API"
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
            <DownloadLink
              title="Balm"
              link="https://modrinth.com/mod/balm"
              description="JourneyMap Dependency"
            />
          </li>

          <li>
            <DownloadLink
              title="Xaero's Worldmap"
              link="https://modrinth.com/mod/xaeros-world-map"
              description="It's just here to disable some settings"
            />
          </li>
          <li>
            <DownloadLink
              title="Xaero's Worldmap"
              link="https://modrinth.com/mod/xaeros-minimap"
              description="It's just here to disable some settings"
            />
          </li>
          <li>
            <DownloadLink
              title="JEI"
              link="https://modrinth.com/mod/jei"
              description="Recipe Viewer, Enable some features"
            />
          </li>
          <li>
            <DownloadLink
              title="EMI"
              link="https://modrinth.com/mod/emi"
              description="Recipe Viewer, Enable some features"
            />
          </li>
          <li>
            <DownloadLink
              title="Polymorph"
              link="https://modrinth.com/mod/polymorph"
              description={`Add support for "/polymorph conflicts" command`}
            />
          </li>
          <li>
            <DownloadLink
              title="Jade"
              link="https://modrinth.com/mod/jade"
              description="Add support server-side"
            />
          </li>
          <li>
            <DownloadLink
              title="AppleSkin"
              link="https://modrinth.com/mod/appleskin"
              description="Add support server-side"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

//https://modrinth.com/mod/better-combat
//https://modrinth.com/mod/playeranimator
//https://modrinth.com/mod/combat-roll

// wizard
//https://modrinth.com/mod/azurelib
//https://modrinth.com/mod/runes
// https://modrinth.com/mod/spell-engine
// https://modrinth.com/mod/spell-power
// https://modrinth.com/mod/structure-pool-api
// https://modrinth.com/mod/wizards

// paladins & priests
//https://modrinth.com/mod/shield-api
// https://modrinth.com/mod/paladins-and-priests

// archer
// https://modrinth.com/mod/bundle-api
// https://modrinth.com/mod/ranged-weapon-api
// https://modrinth.com/mod/archers

// https://modrinth.com/mod/rogues-and-warriors

// https://modrinth.com/mod/trinkets
// https://modrinth.com/mod/jewelry

//if you have an error installing make sure you have these installed

// https://modrinth.com/mod/explorers-compass
// https://modrinth.com/mod/natures-compass

// https://modrinth.com/mod/zombie-awareness
// https://modrinth.com/mod/coroutil

//https://modrinth.com/mod/adventurez
//modrinth.com/mod/voidz

//https://modrinth.com/plugin/simple-voice-chat

// world gen
// https://modrinth.com/datapack/tectonic
// https://modrinth.com/mod/lithostitched
//https://modrinth.com/datapack/terralith

// https://modrinth.com/mod/yungs-api
//https://modrinth.com/mod/yungs-better-nether-fortresses
// https://modrinth.com/mod/yungs-better-dungeons
// https://modrinth.com/mod/yungs-better-mineshafts
//https://modrinth.com/mod/yungs-better-ocean-monuments
//https://modrinth.com/mod/yungs-better-jungle-temples
//https://modrinth.com/mod/yungs-better-strongholds
// https://modrinth.com/mod/yungs-better-witch-huts
// https://modrinth.com/mod/yungs-better-end-island
// https://modrinth.com/mod/yungs-bridges
//https://modrinth.com/mod/yungs-better-desert-temples
// https://modrinth.com/mod/yungs-extras

// https://modrinth.com/mod/betternether
// https://modrinth.com/mod/worldweaver
// https://modrinth.com/mod/bclib
// https://modrinth.com/mod/betterend

//https://modrinth.com/datapack/nullscape

//https://modrinth.com/mod/ct-overhaul-village
// https://modrinth.com/mod/better-village
// https://modrinth.com/mod/library-ferret

//https://www.curseforge.com/minecraft/mc-mods/ftb-essentials
//https://www.curseforge.com/minecraft/mc-mods/ftb-library-fabric
// https://modrinth.com/mod/architectury-api

///dh pregen start <dimension> <x> <z> <radius in chunks>
