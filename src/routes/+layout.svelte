<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  // import { Moon, Sun } from '@lucide/svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
    integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
    crossorigin="anonymous"
  />
</svelte:head>

<nav
  class="fixed top-0 right-0 left-0 flex items-center justify-between bg-white p-4"
>
  <div>
    <a href="/" class="mx-4">Home</a>
    <a href="/about" class="mx-4">About</a>
  </div>
  <div class="flex items-center gap-4">github | theme</div>
</nav>

{@render children()}

<footer class="mt-8 bg-gray-50 p-12">
  <p class="text-sm text-gray-500">
    &copy; 2025 My Tech Blog. All rights reserved.
  </p>
  <p class="text-sm text-gray-500">Made with SvelteKit</p>
</footer>
