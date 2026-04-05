<template>
  <div class="container">
    <!-- 페이지 제목 -->
    <h1>실시간 인기 영화</h1>
    <div class="category">
      <p>드라마</p>
      <p>액션</p>
      <p>스릴러</p>
      <p>범죄</p>
    </div>
    <div class="movie-list">
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
          <h3>{{ movie.title }}</h3>

          <!-- 영화 개봉 연도 출력 -->
          <p>개봉: {{ movie.year }}</p>

          <!-- 영화 장르 출력 -->
          <p>장르: {{ movie.category }}</p>

          <!-- 
        클릭 이벤트 바인딩
        increseLike(i): 해당 인덱스의 영화 좋아요 증가 함수 실행
        (@:click → Vue 이벤트 문법으로 보이지만 실제로는 @click 형태가 일반적)
      -->
          <div class="like-modal">
            <div>
              <button @:click="$emit('increseLike', movie.id)">좋아요</button>
              <!-- 좋아요 수 출력 -->
              <span>{{ movie.like }}</span>
            </div>
            <button @click="$emit('openModal', movie.id)">상세보기</button>
          </div>
        </div>
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
.movie-list {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(240px, 1fr)
  ); /* auto-fill: 빈 열도 공간 차지 */
  gap: 24px;
}

/* 영화 카드 스타일 */
.item {
  width: 100%;
  /* border: 1px solid #ccc; */
  display: block;
  margin-bottom: 20px;
  padding: 0;
}

/* 이미지 영역 스타일 */
.item figure {
  width: 100%;
  margin-right: 1rem;
}

/* 이미지 크기 자동 조정 */
.item img {
  width: 100%;
  border-radius: 16px;
}

/* 텍스트 정보 영역 */
.item .info {
  width: 100%;
  padding-top: 12px;
}

.like-modal {
  display: flex;
  justify-content: space-between;
}

.like-modal button {
  background: #eceef1;
  border: none;
  color: #424242;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.like-modal span {
  color: #666666;
  font-size: 15px;
}

.category {
  display: flex;
  gap: 10px;
  padding: 12px 0px;
}

.category p {
  padding: 10px 20px;
  background: #eaebee;
  border-radius: 999px;
  cursor: pointer;
}
</style>
