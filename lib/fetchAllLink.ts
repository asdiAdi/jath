// utils/fetchAllData.ts

type GithubRelease = {
  prerelease: boolean;
  target_commitish: string;
  tag_name: string;
  zipball_url: string;
  assets: {
    browser_download_url: string;
    name: string;
  }[];
}[];

type CurseforgeRelease = {};

export async function fetchAllLink(version?: string): Promise<CollatedData> {
  const manifestData = await fetch(
    "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json",
  ).then((res) => res.json());
  const { latest, versions } = manifestData as {
    latest: { release: string };
    versions: { id: string; url: string }[];
  };

  if (typeof version === "string") {
    latest.release = version;
  }

  const latestRelease = versions.find(({ id }) => id === latest.release)!;

  const [jarData, fabricLoader, fabricInstaller, fabricApiMod, lithiumMod] =
    await Promise.all([
      fetch(latestRelease.url).then((res) => res.json()),
      fetch("https://meta.fabricmc.net/v2/versions/loader").then((response) =>
        response.json(),
      ),
      fetch("https://meta.fabricmc.net/v2/versions/installer").then((res) =>
        res.json(),
      ),

      fetch("https://api.github.com/repos/FabricMC/fabric/releases").then(
        (res) =>
          res.json().then((data: GithubRelease) => {
            for (let i = 0; i < data.length; i++) {
              if (
                data[i].prerelease === false &&
                data[i].target_commitish === latest.release
              ) {
                return data[i].assets[0].browser_download_url;
              }
            }
            return "";
          }),
      ),
      await fetch("https://api.github.com/repos/CaffeineMC/lithium/releases")
        .then((res) => res.json())
        .then((data: GithubRelease) => {
          for (let i = 0; i < data.length; i++) {
            if (
              data[i].prerelease === false &&
              data[i].tag_name.includes(latest.release)
            ) {
              const assets = data[i].assets;
              for (let j = 0; j < data[i].assets.length; j++) {
                if (
                  assets[j].name.includes("lithium-fabric") &&
                  assets[j].name.includes(`${latest.release}.jar`)
                ) {
                  return assets[j].browser_download_url;
                }
              }
            }
          }
          return "";
        }),
    ]);

  // Pick only needed fields
  return {
    latestRelease: latest.release,
    versions: versions,
    vanillaServerLink: jarData.downloads.server.url,
    vanillaServerName: `server-${latest.release}.jar`,
    fabricData: {
      mcVersion: latest.release,
      loaderVersion: fabricLoader[0].version,
    },
    fabricServerLink: `https://meta.fabricmc.net/v2/versions/loader/${latest.release}/${fabricLoader[0].version}/${fabricInstaller[0].version}/server/jar`,
    fabricServerName: `fabric-server-mc.${latest.release}-loader.${fabricLoader[0].version}-launcher.${fabricInstaller[0].version}.jar`,
    fabricApiModLink: fabricApiMod,
    lithiumModLink: lithiumMod,
  };
}
