<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  $: posts = data.posts;
</script>

<main class="flex min-h-screen flex-col items-center justify-center gap-8 py-8">
  <h1 class="text-xl text-gray-800">Recent Posts</h1>
  <div class="grid max-w-3xl grid-cols-2 gap-6 px-4">
    {#each posts as post}
      <article
        class="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
      >
        <a href="/posts/{post.id}" class="flex flex-1 flex-col">
          <img
            src={post.thumbnail}
            alt={post.title}
            class="h-48 w-full object-cover"
          />

          <div class="flex flex-1 flex-col p-6">
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

            <div class="mt-auto flex flex-wrap gap-2">
              {#each post.tags as tag}
                <span
                  class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500"
                >
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        </a>
      </article>
    {/each}
  </div>
</main>
