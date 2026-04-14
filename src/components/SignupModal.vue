<template>
  <BaseModal :isModal="isModal" size="sm" @closeModal="$emit('closeModal')">
    <h2>회원가입</h2>
    <div class="input-id-pw">
      <input type="text" placeholder="이름" />
      <input type="email" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />

      <button @click="$emit('signup')">회원가입</button>
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/BaseModal.vue";

export default {
  name: "SignupModal",
  components: { BaseModal },
  props: {
    isModal: Boolean,
  },
  emits: ["closeModal", "signup"],
};
</script>
