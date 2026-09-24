import { Post, ProviderContext } from "../types";

export const getPosts = async function ({
  filter,
  page,
  providerValue,
  signal,
  providerContext,
}: {
  filter: string;
  page: number;
  providerValue: string;
  signal?: AbortSignal;
  providerContext: ProviderContext;
}): Promise<Post[]> {
  return [
    {
      title: "Example Post",
      link: "https://example.com/post",
      image: "https://example.com/image.jpg",
    },
  ];
};

