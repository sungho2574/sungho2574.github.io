<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { Moon, Sun, Github } from "@lucide/svelte";
  import { onMount } from "svelte";

  let { children } = $props();
  let darkMode = $state(false);

  onMount(() => {
    // 로컬 스토리지에서 테마 설정 불러오기
    const stored = localStorage.getItem("theme");
    darkMode =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    updateTheme();
  });

  function toggleTheme() {
    darkMode = !darkMode;
    updateTheme();
  }

  function updateTheme() {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
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
  class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
>
  <div>
    <a
      href="/"
      class="mx-4 transition-colors hover:text-neutral-600 dark:hover:text-neutral-400"
      >Home</a
    >
    <a
      href="/about"
      class="mx-4 transition-colors hover:text-neutral-600 dark:hover:text-neutral-400"
      >About</a
    >
  </div>
  <div class="flex items-center gap-3">
    <a
      href="https://github.com/sungho2574"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-md p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
      aria-label="GitHub"
    >
      <Github class="h-5 w-5" />
    </a>
    <button
      onclick={toggleTheme}
      class="rounded-md p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
      aria-label="테마 전환"
    >
      <div class="transition-transform duration-500" class:rotate-90={darkMode}>
        {#if darkMode}
          <Sun class="h-5 w-5" />
        {:else}
          <Moon class="h-5 w-5" />
        {/if}
      </div>
    </button>
  </div>
</nav>

{@render children()}

<footer class="mt-8 bg-neutral-50 p-12 dark:bg-neutral-900">
  <p class="text-sm text-neutral-500 dark:text-neutral-400">
    &copy; 2025 My Tech Blog. All rights reserved.
  </p>
  <p class="text-sm text-neutral-500 dark:text-neutral-400">
    Made with SvelteKit
  </p>
</footer>
