<template>
   <div class="container">
      <!-- 다양한 방법들이 있음. -->
      <!-- <input type="serch" @input="inputText = $event.target.value" placeholder="검색어를 입력하세요" /> -->

      <!-- 두 번째 방법은 글씨를 작성하는 순간 바로 반영됨. -->
      <!-- <input type="search" v-model="inputText" placeholder="검색어를 입력하세요" /> -->

      <!-- 이 세번째 방법(@change)은 enter를 누르거나, button을 누르면 inputText의 text가 변동 됨. -->
      <!-- <input
         type="search"
         @change="
            $emit('searchMovie',$event.target.value);  
            inputText = $event.target.value;
            $event.target.value = '';
         " 
      /> -->

      <input type="search" @change="handelSearch" placeholder="검색어를 입력하세요" />
      <button>검색</button>
   </div>
</template>

<script>
export default {
   name: 'SearchComp',
   props: {
      data: Object,
   },
   data() {
      return {
         inputText: 'test',
      };
   },

   methods: {
      handelSearch(event) {
         this.$emit('searchMovie', event.target.value);
         this.inputText = event.target.value;
         event.target.value = '';
      },
   },

   watch: {
      inputText(name) {
         console.log('watch' + name);
         const findName = this.data.filter(movie => {
            return movie.title.includes(name);
         });
         console.log(findName.length);
         if (findName.length == 0) {
            alert('영화자료가 없습니다.!!!');
         }
      },
   },
};
</script>

<style lang="scss" scoped></style>
