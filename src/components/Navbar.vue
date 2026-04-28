<template>
  <nav class="navbar">
    <h2 @click="$router.push('/')">🎬 인생영화찾기</h2>
    <div>
      <router-link to="/">홈</router-link>
      <a href="#">최신영화</a>
      <a href="#">인기영화</a>
      <a href="#">추억영화</a>
    </div>
    <div>
      <!-- 클릭 시 부모한테 이벤트 올려보냄 -->
      <!-- <button @click="$emit('openLogin')">로그인</button>
      <button @click="$emit('openSignup')">회원가입</button> -->
      <router-link to="/login">로그인</router-link>
      <router-link to="/signup">회원가입</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavbarComponent",
  emits: ["openLogin", "openSignup"],
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
