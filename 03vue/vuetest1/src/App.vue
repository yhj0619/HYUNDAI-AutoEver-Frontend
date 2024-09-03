<template>
   <NavbarView />
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
               <p>👍 {{ item.like }} <button v-on:click="increaseLike(i)">클릭</button></p>
            </div>
            <div class="btn btn-primary" v-on:click="modalOpen(i)">상세보기</div>
         </div>
      </div>
   </div>
   <ModalView :data="data" :isModal="isModal" :num="selectedNum" @closeModal="closeM" />
   <!-- data()에서 작성한 data 변수명으로 동알하게 ""안에 작성하기-->
   <!-- @~ ="함수명" 이렇게 해서 자식에게 신호를 주는 것임. 자식은 data를 갖고있어서는 안됨. 부모가 자식에게 값을 줘야함.-->
   <!--isModal=false를 함수 대신 적어줘도 됨-->
   <!-- 변화되는 값들은 component로 쪼개주는 게 좋음. -->
</template>

<!-- export만 썼으면 함수 형태로 쓰고, export default라고 작성하면 ..-->
<script>
import mdata from './assets/mdata';
import NavbarView from './components/NavbarView.vue';
import ModalView from './components/ModalView.vue';

export default {
   name: 'appVue',
   data() {
      //data 관련 내용은 이곳에.
      return {
         data: mdata,
         isModal: false,
         selectedNum: 0, //modal 오픈 시, 사용
      };
   },
   methods: {
      //methods 관련 내용은 여기에. 이때 data 값을 가져올 때는 this. 써줘야함.
      increaseLike(i) {
         console.log(i);
         this.data[i].like += 1;
      },
      modalOpen(num) {
         this.isModal = true;
         this.selectedNum = num;
      },
      closeM() {
         this.isModal = false;
      },
   },

   components: {
      NavbarView: NavbarView,
      ModalView: ModalView,
   },
};
</script>

<style lang="scss">
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
