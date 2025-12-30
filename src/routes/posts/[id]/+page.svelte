<script lang="ts">
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.css"
    integrity="sha384-mXD7x5S50Ko38scHSnD4egvoExgMPbrseZorkbE49evAfv9nNcbrXJ8LLNsDgh9d"
    crossorigin="anonymous"
  />
</svelte:head>

<div class="mx-auto mt-12 max-w-3xl px-4 py-8">
  <article class="prose prose-neutral dark:prose-invert lg:prose-xl">
    {@html data.html}
  </article>
</div>
