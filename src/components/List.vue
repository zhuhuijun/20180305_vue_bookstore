<template>
  <div>
    <div class="col-md-3" v-for="book in books">
      <div class="panel panel-warning">
        <div class="panel-heading">
          书名:{{book.bookName}}
        </div>
        <div class="panel-body text-center">
          <img :src="book.bookCover" alt="">
        </div>
        <div class="panel-footer">
          价格:{{book.bookPrice | currency('￥')}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters:{
    currency(oldval,param1){
      return param1+oldval;
    }
  },
  data(){
      return {
        books:[
          {bookName:'小说',bookPrice:9.8,bookCorver:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1520296340&di=470f5be3538d4a3de4f341f7779839c3&src=http://image.tianjimedia.com/uploadImages/2015/141/04/ONI33C1MK0O5.jpg',id:1},
          {bookName:'小说',bookPrice:9.8,bookCorver:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1520296340&di=470f5be3538d4a3de4f341f7779839c3&src=http://image.tianjimedia.com/uploadImages/2015/141/04/ONI33C1MK0O5.jpg',id:2},
          {bookName:'小说',bookPrice:9.8,bookCorver:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1520296340&di=470f5be3538d4a3de4f341f7779839c3&src=http://image.tianjimedia.com/uploadImages/2015/141/04/ONI33C1MK0O5.jpg',id:3},
          {bookName:'小说',bookPrice:9.8,bookCorver:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1520296340&di=470f5be3538d4a3de4f341f7779839c3&src=http://image.tianjimedia.com/uploadImages/2015/141/04/ONI33C1MK0O5.jpg',id:4},
        ]
      }
  },
  created(){
    //配置代理表
    this.$http.get('/book').then((res)=>{
     this.books =res.body;
    })
  },
  components:{},
  methods:{}
}
</script>

<style scoped>
img{
  width:150px;height: 200px;
}
</style>
