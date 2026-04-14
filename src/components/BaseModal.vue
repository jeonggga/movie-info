<template>
  <!-- 
    v-if="isModal" : isModal이 true일 때만 모달 전체를 화면에 렌더링
    @click.self    : 자기 자신(.overlay)을 클릭했을 때만 실행
                     .self가 없으면 inner 클릭해도 닫혀버림
  -->
  <div class="overlay" v-if="isModal" @click.self="$emit('closeModal')">
    <!-- 
      :class="`inner--${size}`" : props로 받은 size 값에 따라 클래스 동적 적용
                                   size="sm" 이면 → inner--sm 클래스 적용
                                   size="md" 이면 → inner--md 클래스 적용
    -->
    <div class="inner" :class="`inner--${size}`">
      <!-- 닫기 버튼 클릭 시 부모한테 'closeModal' 이벤트를 올려보냄 -->
      <button class="close-btn" @click="$emit('closeModal')">
        <XIcon :size="24" :stroke-width="2" />
      </button>

      <!-- 
        <slot /> : 이 자리에 각 모달의 내용이 들어옴
                   LoginModal, SignupModal에서 BaseModal 안에 작성한 내용이
                   여기에 렌더링됨
                    (Vue에서 기본으로 제공하는 내장 태그)
      -->
      <slot />
    </div>
  </div>
</template>

<script>
import { XIcon } from "lucide-vue-next";

export default {
  name: "BaseModal",
  components: { XIcon }, // XIcon을 이 컴포넌트에서 쓰겠다고 등록

  props: {
    // 부모로부터 받는 값들
    isModal: Boolean, // true면 모달 열림, false면 모달 닫힘
    size: {
      type: String,
      default: "sm", // size prop을 안 넘겨줘도 기본값 'sm'으로 동작
    },
  },

  // 이 컴포넌트가 부모한테 올려보낼 수 있는 이벤트 목록 명시
  emits: ["closeModal"],

  watch: {
    // isModal 값이 바뀔 때마다 자동으로 실행됨
    // newVal = 바뀐 새로운 값 (true or false)
    isModal(newVal) {
      if (newVal) {
        // 모달이 열릴 때 → 배경 페이지 스크롤 막기
        document.body.style.overflow = "hidden";
      } else {
        // 모달이 닫힐 때 → 배경 페이지 스크롤 다시 허용
        document.body.style.overflow = "";
      }
    },
  },
};
</script>

// scoped : 이 컴포넌트 안에서만 CSS가 적용되게 범위를 제한
<style scoped>
.overlay {
  position: fixed; /* 스크롤해도 화면에 고정 */
  inset: 0; /* top/right/bottom/left 전부 0 (화면 전체 덮기) */
  background: rgba(0, 0, 0, 0.7); /* 배경 딤처리 */
  z-index: 999; /* 다른 요소들 위에 표시 */

  /* 모달을 화면 정중앙에 배치 */
  display: flex;
  align-items: center; /* 세로 중앙 */
  justify-content: center; /* 가로 중앙 */
}

.inner {
  position: relative; /* 닫기 버튼(absolute)의 기준점 */
  background: #fff;
  border-radius: 16px;
  padding: 32px;
}

/* size prop에 따라 너비 결정 */
.inner--sm {
  width: 360px;
}
.inner--md {
  width: 520px;
}

.close-btn {
  position: absolute; /* .inner 기준으로 위치 잡음 */
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px; /* 클릭 영역 확보 */
}
</style>
