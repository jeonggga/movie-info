<template>
  <div class="search-box">
    <!-- v-model은 사용자에게 입력받은 값을 변수에 알아서 저장해줌, 그러나 한글자 쓸떄마다 실행되어서 불편함 그래서 @change 이벤트 사용 -->
    <!-- <input type="search" v-model="inputText" placeholder="검색어 입력" /> -->
    <!-- change 이벤트는 입력 후 엔터키를 치거나 확인 버튼을 누를 때 처리됨 -->
    <!-- $event.target : 현재 입력을 받고 있는 요소명 -->
    <!-- $event.target.value : 해당 요소 안에 입력된 값 -->
    <input
      type="search"
      @change="
        // 부모 컴포넌트에 전달 (이벤트명, 검색어)
        $emit('searchMovie', $event.target.value);
        inputText = $event.target.value;
        // 입력이 끝나면 빈값으로 들어감
        // watch는 입력된 검색어가 남아있는 상태에서 검색을 누르면 반응하지 않음, 값이 변경되어야 함
        // watch 작동하는 조건 : data가 변경되는 시점
        $event.target.value = '';
      "
      placeholder="검색어 입력"
    />
    <button>검색</button>
  </div>
  <!-- <p>{{ inputText }}</p> -->
</template>
<script>
export default {
  name: "SearchBarComponent",
  data() {
    return {
      inputText: "",
    };
  },
  props: {
    data: Array,
  },
  // watch는 특정 상태변수가 변경됨을 감지하는 hook
  // 검색창에 사용자가 입력한 값이 올바른지 확인
  watch: {
    // 검사할 변수명 = 함수명
    // inputText가 변경될 때마다 매개변수 name에 값이 들어옴
    inputText(name) {
      // 입력한 영화 제목이 데이터에 있는지 확인
      // 객체 안의 data는 앞에 this를 붙임
      const findName = this.data.filter((movie) => {
        // includes(값) : 배열 안에 특정 값이 있는지 알려줌
        return movie.title.includes(name);
      });
      if (findName.length == 0) {
        alert("해당하는 자료가 없습니다");
      }
    },
  },
};
</script>
<style>
.search-box {
  display: flex;
  justify-content: center;
}

.search-box input {
  padding: 10px 16px;
  border-radius: 10px 0px 0px 10px;
  border: solid 1px;
  font-size: 16px;
  width: 400px;
}

.search-box button {
  margin: 0;
  background: #000;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 0px 10px 10px 0px;
  font-size: 16px;
  cursor: pointer;
}
</style>
