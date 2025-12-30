<script lang="ts">
  import thumbnail from "$lib/assets/thumbnail.jpg";

  interface BlogCard {
    title: string;
    description: string;
    tags: string[];
    date: string;
    readingTime: string;
    thumbnail: string;
  }

  const posts: BlogCard[] = [
    {
      id: 1,
      title: "SvelteKit으로 블로그 만들기",
      description:
        "SvelteKit을 사용하여 현대적이고 빠른 블로그를 만드는 방법을 알아봅니다.",
      tags: ["Svelte", "Web", "Tutorial"],
      date: "2025-12-30",
      readingTime: "5분",
      thumbnail: thumbnail,
    },
    {
      id: 2,
      title: "TypeScript 시작하기",
      description: "TypeScript의 기본 개념과 실전 활용법을 배워봅니다.",
      tags: ["TypeScript", "JavaScript"],
      date: "2025-12-28",
      readingTime: "8분",
      thumbnail: thumbnail,
    },
    {
      id: 3,
      title: "TypeScript 시작하기",
      description: "TypeScript의 기본 개념과 실전 활용법을 배워봅니다.",
      tags: ["TypeScript", "JavaScript"],
      date: "2025-12-28",
      readingTime: "8분",
      thumbnail: thumbnail,
    },
  ];
</script>

<main class="mt-6 flex flex-col items-center justify-center gap-8 py-8">
  <h1 class="text-">Recent Posts</h1>
  <div class="grid max-w-3xl grid-cols-2 gap-6 px-4">
    {#each posts as post}
      <article
        class="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
      >
        <img
          src={post.thumbnail}
          alt={post.title}
          class="h-48 w-full object-cover"
        />

        <div class="p-6">
          <div class="mb-3 flex items-center gap-2 text-sm text-gray-500">
            <time datetime={post.date}>{post.date}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          <h2 class="mb-3 text-xl font-bold text-gray-900">
            {post.title}
          </h2>

          <p class="mb-4 line-clamp-2 text-sm text-gray-600">
            {post.description}
          </p>

          <div class="flex flex-wrap gap-2">
            {#each post.tags as tag}
              <span
                class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500"
              >
                {tag}
              </span>
            {/each}
          </div>
        </div>
      </article>
    {/each}
  </div>
</main>
