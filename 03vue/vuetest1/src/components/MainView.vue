<template>
   <div class="container">
      <h2 class="mb-10">HOT&NEW</h2>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img v-bind:src="`./images/${item.img}`" v-bind:alt="`${item.img}`" />
               <div class="hot" v-if="item.hoticon">HOT</div>
            </div>
            <div class="cardBody">
               <h4>{{ item.title }}</h4>
               <p>❤️ {{ item.num }}</p>
               <p>구매 {{ item.won }}</p>
               <p>👍 {{ item.like }} <button v-on:click="$emit('increaseLike', i)">클릭</button></p>
            </div>
            <div class="btn btn-primary" v-on:click="$emit('modalOpen', i)">상세보기</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'mainView',
   props: {
      data: Array,
   },
};
</script>

<style lang="scss" scoped>
$radius: 5px;
.container {
   width: 1000px;
   margin: 0 auto;

   @media screen and (max-width: 790px) {
      width: 100%;
      padding: 0 16px;
   }
   img {
      display: block; //inline태그라 block 잡음.
   }
}

// 이 구조를 nesting이라고 함. 이렇게 확실하게 하는 게 좋음.
.cardWrap {
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   .card {
      width: calc((100% - 40px) / 5);

      @media screen and(max-width:790px) {
         width: calc((100% - 10px) / 2);
      }

      @media screen and(max-width:560px) {
         width: 100%;
      }
      .imgWrap {
         width: 100%;
         position: relative;
         overflow: hidden;
         cursor: pointer;
         border-radius: $radius;
         img {
            width: 100%;
            transition: 0.3s;
         }
         &:hover img {
            transform: scale(1.1);
         }
         .hot {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: skyblue;
            padding: 2px 10px;
            border-radius: 5px;
            font-weight: bold;
            color: white;
         }
      }
   }
}
.mb-10 {
   margin-bottom: 10px !important;
}

.btn {
   background: pink;
   border-radius: $radius;
   padding: 5px 16px;
   text-align: center;
   cursor: pointer;
   color: white;
   border: none;
   display: block;
   width: 100%;
   &.btn-primary {
      background-color: skyblue;
   }
   &.btn-info {
      background-color: greenyellow;
   }
}
</style>
