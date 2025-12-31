const n=`---
title: Svelte 시작하기
description: Svelte 공식 문서를 통한 Svelte, SvelteKit 입문
tags: ["Frontend", "Svelte"]
date: 2025-12-31
readingTime: 10분
---

# Svelte 시작하기

https://svelte.dev/tutorial/svelte/welcome-to-svelte

Svelte 공식 문서를 통해 공부하면서 중요한 내용을 까먹지 않기 위해 정리하였다.

## Quick Start

\`\`\`bash
npx sv create # 현재 경로를 svelte 프로젝트 경로로 사용
\`\`\`

## Basic Svelte

### State

\`\`\`html
<script>
  let count = $state(0); // state 정의

  function increment() {
    // 일반 변수처럼 다룰 수 있음
    // React처럼 setCount를 따로 사용허지 않아도 됨
    count += 1;
  }
<\/script>

<button onclick="{increment}">
  Clicked {count} {count < 2 ? "time" : "times"}
</button>
\`\`\`

### Derived State

\`\`\`html
<script>
  let numbers = $state([1, 2, 3, 4]);
  let total = $derived(numbers.reduce((t, n) => t + n, 0)); // state와 연관된 계산 결과를 얻고 싶을 때

  function addNumber() {
    numbers.push(numbers.length + 1);
  }
<\/script>

<p>{numbers.join(' + ')} = {total}</p>

<button onclick="{addNumber}">Add a number</button>
\`\`\`

### Inspecting state

\`\`\`html
<script>
  let numbers = $state([1, 2, 3, 4]);
  let total = $derived(numbers.reduce((t, n) => t + n, 0));

  function addNumber() {
    numbers.push(numbers.length + 1);
  }

  $inspect(numbers); // inspect 사용
<\/script>

<p>{numbers.join(' + ')} = {total}</p>

<button onclick="{addNumber}">Add a number</button>
\`\`\`

\`$inspect\`를 사용하면 아래와 같은 장점이 있다.

- **반응성 추적**: 인자로 전달된 값이 변경될 때마다 자동으로 재실행

- **컴파일 타임 도구**: 개발 모드(dev: true)에서만 작동하며, 프로덕션 빌드 시에는 자동으로 제거되어 성능에 영향을 주지 않음

- **심층 추적**: 객체나 배열의 내부 속성이 변경되어도 감지

### Effects

React의 \`useEffect\`와 같은 문법이다.

\`\`\`html
<script>
  let elapsed = $state(0);
  let interval = $state(1000);

  $effect(() => {
    // effect 사용
    const id = setInterval(() => {
      elapsed += 1;
    }, interval);

    return () => {
      clearInterval(id); // cleanup function
    };
  });
<\/script>

<button onclick="{()" ="">interval /= 2}>speed up</button>
<button onclick="{()" ="">interval *= 2}>slow down</button>

<p>elapsed: {elapsed}</p>
\`\`\`

### Props

App.svelte

\`\`\`bash
<script>
	import Nested from './Nested.svelte';
<\/script>

<Nested answer={42} />

\`\`\`

Nested.svelte

\`\`\`bash
<script>
	let { answer = 'a mystery' } = $props(); // prop 전달 및 기본값 설정
<\/script>

<p>The answer is {answer}</p>

\`\`\`

### Logic

- \`{#...}\` opens a block.
- \`{/...}\` closes a block.
- \`{:...}\` *continues* a block.

\`\`\`bash
// condition
{#if count > 10}
	<p>{count} is greater than 10</p>
{:else if count < 5}
	<p>{count} is less than 5</p>
{:else}
	<p>{count} is between 5 and 10</p>
{/if}
\`\`\`

\`\`\`bash
// loop
{#each ['red', 'green', 'blue'] as color, i}
  <button style="background: {color}">
    {i + 1}
  </button>
{/each}
\`\`\`

\`\`\`bash
// await
{#await promise}
	<p>...rolling</p>
{:then number}
	<p>you rolled a {number}!</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
\`\`\`
`;export{n as default};
