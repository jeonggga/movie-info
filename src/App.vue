<template>
  <Navbar />
  <Event :text="text[eventTextNum]" />
  <!-- searchMovie 이벤트가 발생하면 searchMovie 함수 호출 -->
  <!-- $emit으로 데이터 검색어를 전달 받을 변수명을 $event로 지정 -->
  <SearchBar :data="data_temp" @searchMovie="searchMovie($event)" />
  <p>
    <button @click="showAllMovie">전체보기</button>
  </p>
  <Movies
    :data="data_temp"
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
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",

  // 컴포넌트에서 사용하는 데이터 정의
  data() {
    return {
      isModal: false,
      data: data, // 원본
      data_temp: [...data], // 사본
      selectedMovie: 0,
      text: [
        "NETFLIX 강렬한 운명의 드라마, 경기크리처",
        "디즈니 100주년 기념작, 위시",
        "그날, 대한민국의 운명이 바뀌었다, 서울의 봄",
      ],
      eventTextNum: 0,
      // setInterval()의 타이머를 강제 해제하기 위한 변수
      interval: null,
    };
  },

  methods: {
    // 좋아요 증가 함수
    increseLike(id) {
      // 전달받은 인덱스(i)에 해당하는 영화의 like 값을 1 증가
      // this.data[i].like += 1;
      // find() : 조건을 만족하는 첫 번째 요소 1개만 반환, 없으면 undefined
      this.data.find((movie) => {
        if (movie.id == id) {
          movie.like += 1;
        }
      });
    },
    searchMovie(title) {
      // 영화 제목이 포함된 데이터를 가져옴
      // 원본 그대로 유지, 필요한 데이터만 추출
      this.data_temp = this.data.filter((movie) => {
        // includes(값) : 배열 안에 특정 값이 있는지 알려줌
        return movie.title.includes(title);
      });
    },
    showAllMovie() {
      this.data_temp = [...this.data];
    },
  },
  components: {
    Navbar: Navbar,
    Modal: Modal,
    Event: Event,
    Movies: Movies,
    SearchBar,
  },
  mounted() {
    // setTimeout() : 일정 시간이 지나면 프로그램이 실행되는 비동기 함수
    // 3000(ms)을 입력하면 3초 후에 실행됨
    // 아래는 3초 후에 한번만 실행되는 로직임
    // setTimeout(() => {
    //   this.eventTextNum += 1;
    // }, 3000);

    // 일정 시간마다 주기적으로 광고 텍스트가 변경되려면 setInterval() 사용
    // 3초마다 코드가 갱신됨
    // 이 함수는 한번 실행되면 일정 시간마다 계속 실행되는데 컴포넌트가 종료되어도 계속 남아서 실행되는 문제가 있음
    // 그래서 컴포넌트가 언마운트 될때 타이머를 강제로 해제시켜야 함
    this.interval = setInterval(() => {
      if (this.eventTextNum == this.text.length - 1) {
        this.eventTextNum = 0;
      } else {
        this.eventTextNum += 1;
      }
    }, 3000);
  },
  // 타이머를 해제하는 코드
  unmounted() {
    clearInterval(this.interval);
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
