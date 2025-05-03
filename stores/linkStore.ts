import { create } from "zustand";
import { fetchAllLink } from "@/lib/fetchAllLink";

export const useLinkStore = create<
  CollatedData & { fetchData: (version: string) => void }
>((set) => ({
  latestRelease: "",
  versions: [],
  vanillaServerLink: "",
  vanillaServerName: "",
  fabricData: {
    mcVersion: "",
    loaderVersion: "",
  },
  fabricServerLink: "",
  fabricServerName: "",
  fabricApiModLink: "",
  lithiumModLink: "",
  fetchData: async (version) => {
    try {
      const data = await fetchAllLink(version);
      set((state) => ({ ...state, ...data }));
    } catch (e: any) {
      console.error(e);
    }
  },
}));
