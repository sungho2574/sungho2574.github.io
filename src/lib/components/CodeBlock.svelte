<script lang="ts">
  import { onMount } from "svelte";
  import { Copy, Check } from "@lucide/svelte";
  import hljs from "highlight.js";

  let { code, language }: { code: string; language: string } = $props();
  let copied = $state(false);
  let preElement: HTMLElement;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  onMount(() => {
    if (preElement) {
      hljs.highlightElement(preElement);
    }
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/github-dark.min.css"
  />
</svelte:head>

<div class="group relative">
  <button
    onclick={copyCode}
    class="absolute top-2 right-2 rounded-md bg-neutral-700 p-2 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-neutral-600"
    aria-label="코드 복사"
  >
    {#if copied}
      <Check class="h-4 w-4 text-green-400" />
    {:else}
      <Copy class="h-4 w-4 text-neutral-300" />
    {/if}
  </button>
  <pre bind:this={preElement} class="language-{language} !mt-0">{code}</pre>
</div>
