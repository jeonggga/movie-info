<template>
  <div class="container">
    <!-- 페이지 제목 -->
    <h1>영화 정보</h1>

    <!-- 
    v-for: data 배열을 반복해서 각 영화 정보를 렌더링
    (movie, i): movie는 현재 요소, i는 인덱스
    :key: 각 요소를 구분하기 위한 고유값 (여기서는 index 사용)
  -->
    <div v-for="movie in data" :key="movie.id" class="item">
      <figure>
        <!-- 
        :src → 데이터 바인딩 (이미지 경로를 동적으로 연결)
        템플릿 리터럴(``) 사용 → 변수와 문자열을 함께 사용할 수 있음
      -->
        <!-- template 문법이라고 하는데 문자와 변수를 같이 작성 가능함 -->
        <!-- 작은 따옴표(')나 큰 따옴표(") 대신 백틱(`)으로 감싸줌 -->
        <img :src="`${movie.imgUrl}`" :alt="movie.title" />
      </figure>

      <div class="info">
        <!-- 영화 제목 출력 -->
        <h3 class="bg-yellow">{{ movie.title }}</h3>

        <!-- 영화 개봉 연도 출력 -->
        <p>개봉: {{ movie.year }}</p>

        <!-- 영화 장르 출력 -->
        <p>장르: {{ movie.category }}</p>

        <!-- 
        클릭 이벤트 바인딩
        increseLike(i): 해당 인덱스의 영화 좋아요 증가 함수 실행
        (@:click → Vue 이벤트 문법으로 보이지만 실제로는 @click 형태가 일반적)
      -->
        <button @:click="$emit('increseLike', movie.id)">좋아요</button>

        <!-- 좋아요 수 출력 -->
        <span>{{ movie.like }}</span>
        <p>
          <button @click="$emit('openModal', movie.id)">상세보기</button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MoviesComponent",
  props: {
    data: Array,
    isModal: Boolean,
    selectedMovie: Number,
  },
};
</script>
<style>
.container {
  padding: 20px;
}
</style>
