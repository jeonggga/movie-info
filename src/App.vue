<template>
  <Navbar />
  <Event :text="text[eventTextNum]" />
  <div class="searchbar-showallbutton">
    <!-- searchMovie 이벤트가 발생하면 searchMovie 함수 호출 -->
    <!-- $emit으로 데이터 검색어를 전달 받을 변수명을 $event로 지정 -->
    <SearchBar :data="data_temp" @searchMovie="searchMovie($event)" />
    <button class="showallbutton" @click="showAllMovie">전체보기</button>
  </div>
  <Movies
    :data="data_temp"
    @openModal="
      isModal = true;
      selectedMovie = $event;
    "
    @increseLike="increseLike($event)"
  />
  <Modal
    :data="data_temp"
    :isModal="isModal"
    :selectedMovie="selectedMovie"
    @closeModal="isModal = false"
    @increseLike="increseLike($event)"
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
        "🔥 지금 가장 많이 본 영화! 인기 영화 TOP 10 바로보기",
        "🍿 오늘의 추천 영화가 업데이트됐어요, 지금 확인해보세요!",
        "🌙 하루의 끝, 좋은 영화 한 편으로 마무리하세요",
        "🫶 혼자 봐도, 같이 봐도 좋은 영화들",
        "🍿 영화 좀 본다는 사람들이 선택한 작품들",
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

.searchbar-showallbutton {
  display: flex;
  justify-content: center;
  padding: 24px;
  gap: 8px;
}

.showallbutton {
  margin: 0;
  padding: 12px;
  background: #ffffff;
  border: #000 solid 1px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
