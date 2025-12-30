<script lang="ts">
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import { mount, unmount } from "svelte";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
  import TableOfContents from "$lib/components/TableOfContents.svelte";

  let { data }: { data: PageData } = $props();
  let articleElement: HTMLElement;
  let mountedComponents: Array<{ target: Element; component: any }> = [];

  onMount(() => {
    // 모든 코드 블록 래퍼 찾기
    const codeWrappers = articleElement.querySelectorAll(".code-block-wrapper");

    codeWrappers.forEach((wrapper) => {
      const code = wrapper.getAttribute("data-code") || "";
      const language = wrapper.getAttribute("data-language") || "plaintext";

      // HTML 엔티티 디코딩
      const decodedCode = code
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&amp;/g, "&");

      // CodeBlock 컴포넌트 마운트
      const component = mount(CodeBlock, {
        target: wrapper,
        props: {
          code: decodedCode,
          language: language,
        },
      });

      mountedComponents.push({ target: wrapper, component });
    });

    // cleanup
    return () => {
      mountedComponents.forEach(({ component }) => {
        unmount(component);
      });
      mountedComponents = [];
    };
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.css"
    integrity="sha384-mXD7x5S50Ko38scHSnD4egvoExgMPbrseZorkbE49evAfv9nNcbrXJ8LLNsDgh9d"
    crossorigin="anonymous"
  />
</svelte:head>

<TableOfContents />

<div class="mx-auto mt-12 max-w-3xl px-4 py-8">
  <article
    bind:this={articleElement}
    class="prose prose-neutral dark:prose-invert lg:prose-xl"
  >
    {@html data.html}
  </article>
</div>
