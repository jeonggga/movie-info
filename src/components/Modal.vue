<template>
  <div class="modal" v-if="isModal">
    <!-- 배경 딤처리 -->
    <div class="modal-backdrop" @click="$emit('closeModal')"></div>
    <div class="inner">
      <div class="modal-header-img">
        <img src="/assets/modal-top.jpg" alt="movie-img" />
        <button
          class="close-btn"
          aria-label="닫기"
          @click="$emit('closeModal')"
        >
          <XIcon :size="24" :stroke-width="2" />
        </button>
        <h2>{{ data[selectedMovie].title }}</h2>
      </div>
      <div class="movie-text">
        <div class="like">
          <button @:click="$emit('increseLike', data[selectedMovie].id)">
            좋아요
          </button>
          <!-- 좋아요 수 출력 -->
          <span>{{ data[selectedMovie].like }}</span>
        </div>
        <p>2025 · 시대극/드라마 · 한국</p>
        <p>1시간 56분 · 12세</p>
        <p>예매 순위 3위(7.3%) · 개봉 67일째 · 누적 관객 1,626.1만명</p>
        <p>출연 : 조인성, 박정민, 박해준</p>
      </div>
      <div class="related-content">
        <h2>비슷한 영화 추천</h2>
        <div class="movie-list">
          <div v-for="movie in data" :key="movie.id" class="item">
            <figure>
              <img :src="`${movie.imgUrl}`" :alt="movie.title" />
            </figure>
            <div class="info">
              <h3>{{ movie.title }}</h3>
              <p>개봉: {{ movie.year }}</p>
              <p>장르: {{ movie.category }}</p>
              <div class="like-modal">
                <button @click="$emit('openModal', movie.id)">상세보기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { XIcon } from "lucide-vue-next";

export default {
  components: { XIcon }, // 여기서 등록을 안 해주면 "정의만 하고 안 썼다"고 인식
  name: "ModalComponent",
  props: {
    data: Array,
    isModal: Boolean,
    selectedMovie: Number,
  },
  watch: {
    // isModal prop이 변할 때마다 실행되는 감시자
    // newVal = 변경된 새로운 값 (true = 모달 열림, false = 모달 닫힘)
    isModal(newVal) {
      if (newVal) {
        // 모달이 열릴 때 (isModal = true)
        // body의 스크롤을 막아서 배경 페이지가 스크롤되지 않게 함
        // 'hidden'으로 설정하면 스크롤바 자체가 사라짐
        // 자바스크립트로 body에 CSS를 직접 주입하는 것
        // body { overflow: hidden; }
        document.body.style.overflow = "hidden";
      } else {
        // 모달이 닫힐 때 (isModal = false)
        // body의 스크롤을 다시 원래대로 복구
        // 빈 문자열('')로 설정하면 CSS에서 지정한 기본값으로 돌아감
        document.body.style.overflow = "";
      }
    },
  },
};
</script>
<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow-y: auto; /* 모달 내부에서 스크롤 */
  padding: 40px 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}

/* 실제 콘텐츠는 문서 흐름에 따라 body 스크롤 사용 */
.inner {
  position: relative;
  z-index: 1001;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto; /* 상하 margin 제거, 좌우 중앙만 유지 */
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
}

.inner h3 {
  font-size: 24px;
}

.inner button {
  background-color: rgba(255, 255, 255, 0.4); /* 40% 투명도 */
  border: none;
  border-radius: 999px;
}

.close-btn {
  position: absolute; /* 부모인 .modal-content 기준 */
  top: 16px; /* 상단 여백 */
  right: 16px; /* 우측 여백 */
  border: none;
  cursor: pointer;
  padding: 8px; /* 클릭 영역 확보 */
  display: flex;
  background: none;
  z-index: 10; /* 이미지 및 그라데이션보다 위에 오도록 */
  margin: 0;

  /* 아이콘을 버튼 정중앙으로 */
  align-items: center;
  justify-content: center;
}

/* 상단 이미지 영역 */
.modal-header-img {
  position: relative;
  width: 100%;
  height: 500px; /* 디자이너 감각으로 적절한 높이 설정 */
}

/* 모달 제목 가독성을 위한 그라데이션 */
.modal-header-img::after {
  content: ""; /* 내용은 없고 형태만 있다는 뜻 */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%; /* 부모 박스와 똑같은 크기로 */
  height: 60%; /* 전체를 다 덮지 않고 하단 일부만 은은하게 */

  /* 아래(White, 100%)에서 위(Transparent, 0%)로 흐르게 설정 */
  background: linear-gradient(
    to top,
    /* 시작: 완전 불투명한 흰색 */ rgba(255, 255, 255, 1) 0%,
    /* 중간: 반투명 흰색 */ rgba(255, 255, 255, 0.5) 50%,
    /* 끝: 완전 투명 */ rgba(255, 255, 255, 0) 100%
  );
}

.modal-header-img img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 비율 깨지지 않고 영역을 꽉 채우도록 */
  display: block; /* 줄바꿈 */
}

.modal-header-img h2 {
  position: absolute; /* 부모인 .modal-content 기준 */
  bottom: 16px; /* 상단 여백 */
  left: 16px; /* 우측 여백 */
  z-index: 10; /* 이미지 및 그라데이션보다 위에 오도록 */
  margin: 0;
  color: #1a1a1a;
  font-size: 3rem;
}

.movie-text {
  padding: 20px;
}

.related-content {
  padding: 20px;
}

.related-content h2 {
  color: #1a1a1a;
  font-size: 2rem;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(240px, 1fr)
  ); /* auto-fill: 빈 열도 공간 차지 */
  gap: 24px;
}

.like button {
  background: #eceef1;
  border: none;
  color: #424242;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.like span {
  color: #666666;
  font-size: 15px;
}
</style>
