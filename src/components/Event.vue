<template>
  <div class="event" :class="{ show: isOpen }">
    <div class="event-box">
      <p>{{ text }}</p>
      <button @click="isOpen = false">X</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "EventComponent",
  props: {
    text: String,
  },
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>
<style>
.event {
  background: #000000;
  display: none;
}

.event-box {
  width: fit-content; /* 내용물 크기에 맞게 */
  color: #fff;
  padding: 16px 20px;
  text-align: center;
  font-size: small;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto; /* 가운데 정렬 */
  display: flex;
}

.show {
  display: flex;
}

.event p {
  margin: 0;
  padding-right: 24px;
  font-size: 16px;
}

.event button {
  margin: 0;
  background: none;
  border: none;
  color: #b6b6b6;
  cursor: pointer;
}
</style>
