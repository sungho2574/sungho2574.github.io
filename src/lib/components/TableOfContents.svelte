<script lang="ts">
  import { onMount } from "svelte";

  interface Heading {
    id: string;
    text: string;
    level: number;
  }

  let headings: Heading[] = $state([]);
  let activeId: string = $state("");

  onMount(() => {
    // 헤딩 요소 추출
    const articleElement = document.querySelector("article");
    if (!articleElement) return;

    const headingElements = articleElement.querySelectorAll(
      "h1, h2, h3, h4, h5, h6",
    );

    headings = Array.from(headingElements).map((heading, index) => {
      // ID가 없으면 자동 생성
      if (!heading.id) {
        const id = `heading-${index}`;
        heading.id = id;
      }

      return {
        id: heading.id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.substring(1)),
      };
    });

    // IntersectionObserver로 현재 스크롤 위치 추적
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        });
      },
      {
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0,
      },
    );

    headingElements.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  });

  function scrollToHeading(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
</script>

{#if headings.length > 0}
  <nav
    class="toc-container fixed top-24 right-8 hidden max-h-[calc(100vh-8rem)] w-64 overflow-y-auto xl:block"
  >
    <div
      class="rounded-lg border-neutral-200 p-4 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <h2
        class="mb-4 text-sm font-semibold tracking-wide text-neutral-700 uppercase dark:text-neutral-300"
      >
        목차
      </h2>
      <ul class="space-y-2 text-sm">
        {#each headings as heading}
          <li style="padding-left: {(heading.level - 1) * 0.75}rem">
            <button
              onclick={() => scrollToHeading(heading.id)}
              class="w-full cursor-pointer text-left transition-colors hover:text-neutral-900 dark:hover:text-neutral-100
                {activeId === heading.id
                ? 'font-medium text-neutral-900 dark:text-neutral-100'
                : 'text-neutral-600 dark:text-neutral-400'}"
            >
              {heading.text}
            </button>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
{/if}

<style>
  .toc-container::-webkit-scrollbar {
    width: 4px;
  }

  .toc-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .toc-container::-webkit-scrollbar-thumb {
    background: #a3a3a3;
    border-radius: 2px;
  }

  .toc-container::-webkit-scrollbar-thumb:hover {
    background: #737373;
  }
</style>
