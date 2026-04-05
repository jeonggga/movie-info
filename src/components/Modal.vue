<template>
  <div class="modal" v-if="isModal">
    <div class="inner">
      <h3>{{ data[selectedMovie].title }}</h3>
      <p>영화 상세정보</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalComponent",
  props: {
    data: Array,
    isModal: Boolean,
    selectedMovie: Number,
  },
};
</script>
<style>
.modal .inner {
  background: #fff;
  width: 80%;
  max-width: 1000px;
  padding: 20px;
  border-radius: 10px;
}

.modal .inner h3 {
  font-size: 24px;
}

.modal .inner button {
  background: #eceef1;
  border: none;
  color: #424242;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
}
</style>
