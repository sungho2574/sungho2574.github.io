---
title: SvelteKit으로 블로그 만들기
description: SvelteKit을 사용하여 현대적이고 빠른 블로그를 만드는 방법을 알아봅니다.
tags: ["Svelte", "Web", "Tutorial"]
date: 2025-12-30
readingTime: 5분
---

# 첫 번째 포스트

이것은 마크다운으로 작성된 첫 번째 블로그 포스트입니다.

## 소개

이 블로그는 SvelteKit과 Tailwind CSS로 만들어졌습니다.

### 주요 기능

- 마크다운 지원
- Tailwind Typography 스타일링
- 동적 라우팅

## 코드 예제

```javascript
function hello() {
  console.log("Hello, World!");
}
```

## 리스트 예제

1. 첫 번째 항목
2. 두 번째 항목
3. 세 번째 항목

- 순서 없는 리스트
- 또 다른 항목
  - 중첩된 항목

## 인용문

> 이것은 인용문입니다.
> 여러 줄로 작성할 수 있습니다.

## 링크와 강조

이것은 **굵은 글씨**이고, 이것은 *기울임꼴*입니다. [링크](https://example.com)도 작동합니다.

## 수식 (LaTeX)

인라인 수식: 피타고라스 정리는 $a^2 + b^2 = c^2$ 입니다.

블록 수식:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

복잡한 수식 예제:

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
$$

행렬:

$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

## 이미지

단일 이미지:

![고양이](./cat.jpg)

### 1×2 그리드 레이아웃

<div class="grid grid-cols-2 gap-4 my-8">
  <img src="./cat.jpg" alt="고양이 1" class="w-full rounded-lg shadow-md">
  <img src="./cat.jpg" alt="고양이 2" class="w-full rounded-lg shadow-md">
</div>

### 2×2 그리드 레이아웃

<div class="grid grid-cols-2 gap-4 my-8">
  <img src="./cat.jpg" alt="고양이 1" class="w-full rounded-lg shadow-md">
  <img src="./cat.jpg" alt="고양이 2" class="w-full rounded-lg shadow-md">
  <img src="./cat.jpg" alt="고양이 3" class="w-full rounded-lg shadow-md">
  <img src="./cat.jpg" alt="고양이 4" class="w-full rounded-lg shadow-md">
</div>

---

마크다운은 정말 편리합니다!
