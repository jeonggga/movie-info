<template>
  <nav class="navbar">
    <h2>🎬 인생영화찾기</h2>
    <div>
      <a href="#">홈</a>
      <a href="#">최신영화</a>
      <a href="#">인기영화</a>
      <a href="#">추억영화</a>
    </div>
    <div>
      <a href="#">로그인</a>
      <a href="#">회원가입</a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavbarComponent",
};
</script>
<style>
.navbar {
  border-bottom: solid 1px;
  padding: 20px 0px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.navbar h2 {
  color: #000;
  margin: 0;
  cursor: pointer;
}

.navbar a {
  color: #000;
  text-decoration: none;
  padding: 1em;
}
</style>
