type StorageGetUrlOutput = {
  expiresAt: Date;
  url: URL;
};

type CollatedData = {
  latestRelease: string;
  versions: { id: string; url: string }[];
  vanillaServerLink: string;
  vanillaServerName: string;
  fabricData: {
    mcVersion: string;
    loaderVersion: string;
  };
  fabricServerLink: string;
  fabricServerName: string;
  fabricApiModLink: string;
  lithiumModLink: string;
  clientModpackLink?: StorageGetUrlOutput;
  serverModpackLink?: StorageGetUrlOutput;
};
