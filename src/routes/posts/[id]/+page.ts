import type { PageLoad } from "./$types";
import { marked } from "marked";
import markedKatex from "marked-katex-extension";
import { error } from "@sveltejs/kit";

export const prerender = true;

// 커스텀 렌더러 설정
const renderer = new marked.Renderer();
let codeBlockIndex = 0;

renderer.code = ({ text, lang }) => {
  const language = lang || "plaintext";
  const index = codeBlockIndex++;
  const escapedCode = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  return `<div class="code-block-wrapper" data-code-index="${index}" data-language="${language}" data-code="${escapedCode}"></div>`;
};

// KaTeX 확장 설정
marked.use(
  markedKatex({
    throwOnError: false,
    output: "html",
  }),
);

marked.use({ renderer });

// frontmatter 제거 함수
function removeFrontmatter(markdown: string): string {
  const frontmatterRegex = /^---\n[\s\S]*?\n---\n/;
  return markdown.replace(frontmatterRegex, "");
}

export const load: PageLoad = async ({ params }) => {
  const { id } = params;

  try {
    // 코드 블록 인덱스 초기화
    codeBlockIndex = 0;

    // 마크다운 파일 동적으로 가져오기
    const markdownModule = await import(
      `../../../lib/markdown/${id}/content.md?raw`
    );
    const markdown = markdownModule.default;

    // frontmatter 제거
    const content = removeFrontmatter(markdown);

    // 마크다운을 HTML로 변환
    const html = marked(content);

    return {
      html,
      id,
    };
  } catch (e) {
    throw error(404, `포스트를 찾을 수 없습니다: ${id}`);
  }
};
