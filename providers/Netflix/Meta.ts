import { Info, ProviderContext } from "../types";

export const getMeta = async function ({
  link,
  providerContext,
}: {
  link: string;
  providerContext: ProviderContext;
}): Promise<Info> {
  return {
    title: "Example Movie",
    synopsis: "A sample synopsis.",
    image: "https://example.com/image.jpg",
    imdbId: "tt1234567",
    type: "movie",
    linkList: [],
  };
};
