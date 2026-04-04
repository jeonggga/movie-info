<template>
  <Navbar />
  <Event :text="text" />
  <Movies
    :data="data"
    @openModal="
      isModal = true;
      selectedMovie = $event;
    "
    @increseLike="increseLike($event)"
  />
  <Modal
    :data="data"
    :isModal="isModal"
    :selectedMovie="selectedMovie"
    @closeModal="isModal = false"
  />
</template>

<script>
import data from "./assets/movies"; // 영화 데이터
import Navbar from "./components/Navbar.vue";
import Modal from "./components/Modal.vue";
import Event from "./components/Event.vue";
import Movies from "./components/Movies.vue";

export default {
  name: "App",

  // 컴포넌트에서 사용하는 데이터 정의
  data() {
    return {
      isModal: false,
      data: data,
      selectedMovie: 0,
      text: "NETFLIX 강렬한 운명의 드라마, 경기크리처",
    };
  },

  methods: {
    // 좋아요 증가 함수
    increseLike(i) {
      // 전달받은 인덱스(i)에 해당하는 영화의 like 값을 1 증가
      this.data[i].like += 1;
    },
  },
  components: {
    Navbar: Navbar,
    Modal: Modal,
    Event: Event,
    Movies: Movies,
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
  margin-top: 1rem;
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

.modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal .inner {
  background: #fff;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
}
</style>
