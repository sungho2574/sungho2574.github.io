import thumbnail from "$lib/assets/thumbnail.jpg";

export interface PostMetadata {
  title: string;
  description: string;
  tags: string[];
  date: string;
  readingTime: string;
}

export interface BlogCard extends PostMetadata {
  id: string;
  thumbnail: string;
}

// frontmatter 파싱 함수
function parseFrontmatter(markdown: string): {
  metadata: PostMetadata;
  content: string;
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    throw new Error("No frontmatter found");
  }

  const frontmatter = match[1];
  const content = match[2];

  const metadata: any = {};

  // frontmatter 파싱
  frontmatter.split("\n").forEach((line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) return;

    const key = line.slice(0, colonIndex).trim();
    let value: any = line.slice(colonIndex + 1).trim();

    // 배열 형태의 값 파싱 (tags)
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^["']|["']$/g, ""));
    }

    metadata[key] = value;
  });

  return { metadata: metadata as PostMetadata, content };
}

// 모든 포스트 로드
export async function loadPosts(): Promise<BlogCard[]> {
  const posts: BlogCard[] = [];

  // Vite의 glob import를 사용하여 모든 마크다운 파일 가져오기
  const markdownModules = import.meta.glob("/src/lib/markdown/*/content*.md", {
    eager: true,
    query: "?raw",
    import: "default",
  });

  for (const [path, markdown] of Object.entries(markdownModules)) {
    // 경로에서 ID 추출 (예: /src/lib/markdown/1/content.md -> 1)
    const idMatch = path.match(/\/markdown\/([^\/]+)\//);
    if (!idMatch) continue;

    const id = idMatch[1];

    try {
      const { metadata } = parseFrontmatter(markdown as string);

      posts.push({
        id,
        ...metadata,
        thumbnail: thumbnail, // 기본 썸네일
      });
    } catch (error) {
      console.error(`Failed to parse post ${id}:`, error);
    }
  }

  // 날짜순으로 정렬 (최신 순)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
