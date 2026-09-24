import { Stream, ProviderContext } from "../types";

export const getStream = async function ({
  link,
  type,
  signal,
  providerContext,
  isDownload,
}): Promise<Stream[]> {
  return [
    {
      server: "Example Server",
      link: "https://example.com/stream.m3u8",
      quality: "1080",
    },
  ];
};
