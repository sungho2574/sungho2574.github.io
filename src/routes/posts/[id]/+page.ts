import type { PageLoad } from "./$types";
import { marked } from "marked";
import markedKatex from "marked-katex-extension";
import { error } from "@sveltejs/kit";

// KaTeX 확장 설정
marked.use(
  markedKatex({
    throwOnError: false,
    output: "html",
  }),
);

export const load: PageLoad = async ({ params }) => {
  const { id } = params;

  try {
    // 마크다운 파일 동적으로 가져오기
    const markdownModule = await import(
      `../../../lib/markdown/${id}/content.md?raw`
    );
    const markdown = markdownModule.default;

    // 마크다운을 HTML로 변환
    const html = marked(markdown);

    return {
      html,
      id,
    };
  } catch (e) {
    throw error(404, `포스트를 찾을 수 없습니다: ${id}`);
  }
};
