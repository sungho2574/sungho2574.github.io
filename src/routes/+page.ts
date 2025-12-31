import { loadPosts } from "$lib/posts";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load: PageLoad = async () => {
  const posts = await loadPosts();

  return {
    posts,
  };
};
