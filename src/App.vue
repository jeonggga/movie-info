<template><Navbar /><router-view /></template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar: Navbar,
  },
};
</script>

<style>
/* 모든 요소의 기본 margin 제거 및 box-sizing 설정 */
* {
  box-sizing: border-box;
  margin: 0;
}

/* 전체 레이아웃 설정 (최대 너비 제한 및 가운데 정렬) */
body {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 제목 요소 하단 여백 */
h1,
h2,
h3 {
  margin-bottom: 1rem;
}

/* 문단 간격 */
p {
  margin-bottom: 0.5rem;
}

/* 버튼 오른쪽 여백 */
button {
  margin-right: 10px;
  margin-top: 1rem;
}
</style>
