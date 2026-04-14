<template>
  <BaseModal :isModal="isModal" size="sm" @closeModal="$emit('closeModal')">
    <h2>로그인</h2>
    <div class="input-id-pw">
      <input type="email" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <button @click="$emit('login')">로그인</button>
    </div>
    <!-- 회원가입 버튼 클릭 시 로그인 모달 닫고 회원가입 모달 열기 -->
    <button @click="$emit('openSignup')">회원가입</button>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/BaseModal.vue";

export default {
  name: "LoginModal",
  components: { BaseModal },
  props: {
    isModal: Boolean,
  },
  emits: ["closeModal", "login", "openSignup"],
};
</script>
<style>
.input-id-pw {
  /* 1. 자식 요소들을 유연하게 관리하겠다고 선언 */
  display: flex;

  /* 2. 방향을 세로(Column)로 설정 (이게 한 줄씩 배치하는 핵심) */
  flex-direction: column;

  /* 3. 요소들 사이의 간격을 일정하게 줌 */
  gap: 12px;

  /* 4. 전체 박스의 너비 조절 */
  max-width: 360px;
  margin: 0 auto; /* 중앙 정렬 */

  padding-top: 100px;
}

.input-id-pw input,
.input-id-pw button {
  /* 너비를 꽉 채우고 높이와 안쪽 여백을 디자인함 */
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.input-id-pw button {
  background-color: #141414;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
}
</style>
