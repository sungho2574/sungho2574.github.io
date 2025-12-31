<script lang="ts">
  interface Skill {
    category: string;
    items: string[];
  }

  interface Education {
    degree: string;
    institution: string;
    period: string;
  }

  interface Publication {
    title: string;
    authors: string;
    venue: string;
    year: string;
    link?: string;
  }

  interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
  }

  // 프로필 데이터
  const profile = {
    email: "sungho2574@gmail.com",
    github: "https://github.com/sungho2574",
  };

  const skills: Skill[] = [
    {
      category: "Languages",
      items: ["Python", "C", "JavaScript", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React", "Vue", "Next", "Svelte", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["FastAPI", "Flask", "MySQL"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "Linux", "ROS"],
    },
    {
      category: "Machine Learning",
      items: ["PyTorch", "OpenCV"],
    },
  ];

  const education: Education[] = [
    {
      degree: "학사 · 인공지능공학",
      institution: "인하대학교",
      period: "2022 ~ 현재",
    },
  ];

  const publications: Publication[] = [
    {
      title:
        "목적 함수 변경을 통한 유전 알고리즘을 이용한 쿼드콥터 PID 제어이득 최적화 성능 개선",
      authors: "김성호, 김도국",
      venue: "한국정보과학회 2023 한국컴퓨터종합학술대회 논문집",
      year: "2023",
      link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11488547",
    },
  ];

  const projects: Project[] = [
    // {
    //   title: "개인 블로그",
    //   description:
    //     "SvelteKit과 Tailwind CSS로 만든 개인 블로그입니다. 마크다운 기반 포스팅과 코드 하이라이팅을 지원합니다.",
    //   tech: ["SvelteKit", "TypeScript", "Tailwind CSS", "Markdown"],
    //   github: "https://github.com/yourusername/blog",
    // },
    // {
    //   title: "머신러닝 프로젝트",
    //   description: "자연어 처리를 활용한 감정 분석 시스템을 개발했습니다.",
    //   tech: ["Python", "PyTorch", "FastAPI", "Docker"],
    //   github: "https://github.com/yourusername/ml-project",
    //   link: "https://demo.example.com",
    // },
  ];
</script>

<svelte:head>
  <title>{profile.name} - Profile</title>
</svelte:head>

<div class="mx-auto mt-20 max-w-5xl px-4 py-12">
  <!-- Profile Header -->
  <div
    class="mb-16 flex flex-col items-center gap-8 md:flex-row md:items-start"
  >
    <div
      class="h-48 w-48 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"
    >
      <img
        src="/profile.jpeg"
        alt="김성호"
        class="h-full w-full object-cover"
      />
    </div>

    <div class="flex-1 text-center md:text-left">
      <h1
        class="mb-2 text-3xl font-bold text-neutral-900 dark:text-neutral-100"
      >
        About Me
      </h1>

      <p class="mb-6 max-w-2xl text-neutral-700 dark:text-neutral-300">
        안녕하세요, 김성호입니다. 딥러닝과 드론에 관심이 많습니다. <br />
        도전적인 과제를 통해 성장하는 것을 좋아합니다.
      </p>

      <!-- Social Links -->
      <div class="flex flex-wrap justify-center gap-4 md:justify-start">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
        >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
          GitHub
        </a>
        <a
          href="mailto:{profile.email}"
          class="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <svg
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Email
        </a>
      </div>
    </div>
  </div>

  <!-- Skills Section -->
  <section class="mb-16">
    <h2 class="mb-6 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
      Skills
    </h2>
    <div class="grid gap-6 md:grid-cols-2">
      {#each skills as skill}
        <div
          class="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
        >
          <h3
            class="mb-3 text-lg font-semibold text-neutral-900 dark:text-neutral-100"
          >
            {skill.category}
          </h3>
          <div class="flex flex-wrap gap-2">
            {#each skill.items as item}
              <span
                class="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {item}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Education Section -->
  <section class="mb-16">
    <h2 class="mb-6 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
      Education
    </h2>
    <div class="space-y-6">
      {#each education as edu}
        <div
          class="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
        >
          <h3
            class="mb-1 text-xl font-semibold text-neutral-900 dark:text-neutral-100"
          >
            {edu.degree}
          </h3>
          <p class="mb-1 text-neutral-700 dark:text-neutral-300">
            {edu.institution}
          </p>
          <p class="text-sm text-neutral-500 dark:text-neutral-500">
            {edu.period}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Publications Section -->
  <section class="mb-16">
    <h2 class="mb-6 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
      Publications
    </h2>
    <div class="space-y-6">
      {#each publications as pub}
        <div
          class="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
        >
          <h3
            class="mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100"
          >
            {#if pub.link}
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline"
              >
                {pub.title}
              </a>
            {:else}
              {pub.title}
            {/if}
          </h3>
          <p class="mb-1 text-sm text-neutral-600 dark:text-neutral-400">
            {pub.authors}
          </p>
          <p class="text-sm text-neutral-500 dark:text-neutral-500">
            {pub.venue}, {pub.year}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Projects Section -->
  <!-- <section class="mb-16">
    <h2 class="mb-6 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
      Projects
    </h2>
    <div class="grid gap-6 md:grid-cols-2">
      {#each projects as project}
        <div
          class="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
        >
          <h3
            class="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100"
          >
            {project.title}
          </h3>
          <p class="mb-4 text-neutral-700 dark:text-neutral-300">
            {project.description}
          </p>
          <div class="mb-4 flex flex-wrap gap-2">
            {#each project.tech as tech}
              <span
                class="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              >
                {tech}
              </span>
            {/each}
          </div>
          <div class="flex gap-3">
            {#if project.github}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                GitHub →
              </a>
            {/if}
            {#if project.link}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              >
                Demo →
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section> -->

  <!-- Contact Section -->
  <section class="mb-16">
    <h2 class="mb-6 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
      Contact
    </h2>
    <div
      class="rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <svg
            class="h-5 w-5 text-neutral-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href="mailto:{profile.email}"
            class="text-neutral-700 hover:underline dark:text-neutral-300"
          >
            {profile.email}
          </a>
        </div>
        <div class="flex items-center gap-3">
          <svg
            class="h-5 w-5 text-neutral-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            class="text-neutral-700 hover:underline dark:text-neutral-300"
          >
            {profile.github.replace("https://github.com/", "@")}
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
