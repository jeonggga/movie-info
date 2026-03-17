<template>
  <!-- 페이지 제목 -->
  <h1>영화 정보</h1>

  <!-- 
    v-for: data 배열을 반복해서 각 영화 정보를 렌더링
    (movie, i): movie는 현재 요소, i는 인덱스
    :key: 각 요소를 구분하기 위한 고유값 (여기서는 index 사용)
  -->
  <div v-for="(movie, i) in data" :key="i" class="item">
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
      <button @:click="increseLike(i)">좋아요</button>

      <!-- 좋아요 수 출력 -->
      <span>{{ movie.like }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  // 컴포넌트에서 사용하는 데이터 정의
  data() {
    return {
      // 영화 정보 배열
      data: [
        {
          title: "노량", // 영화 제목
          year: 2023, // 개봉 연도
          category: "액션, 드라마", // 장르
          textRed: "color:red", // 스타일 관련 값 (현재 템플릿에서 사용되지 않음)
          like: 0, // 좋아요 초기값
          imgUrl: "./assets/노량.jpg", // 이미지 경로
        },
        {
          title: "아쿠아맨과 로스트 킹덤",
          year: 2023,
          category: "액션, 판타지, 어드밴처",
          like: 0,
          imgUrl: "./assets/아쿠아맨.jpg",
        },
        {
          title: "3월의 휴가",
          year: 2023,
          category: "판타지, 드라마",
          like: 0,
          imgUrl: "./assets/3월의휴가.jpg",
        },
      ],
    };
  },

  methods: {
    // 좋아요 증가 함수
    increseLike(i) {
      // 전달받은 인덱스(i)에 해당하는 영화의 like 값을 1 증가
      this.data[i].like += 1;
    },
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
  max-width: 768px;
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
}

/* 영화 카드 스타일 */
.item {
  width: 100%;
  border: 1px solid #ccc;
  display: flex; /* 이미지와 텍스트를 가로로 배치 */
  margin-bottom: 20px;
  padding: 1rem;
}

/* 이미지 영역 스타일 */
.item figure {
  width: 30%;
  margin-right: 1rem;
}

/* 이미지 크기 자동 조정 */
.item img {
  width: 100%;
}

/* 텍스트 정보 영역 */
.item .info {
  width: 100%;
}
</style>
