<template>
  <div>
    <div class="col-md-3" v-for="book in books">
      <div class="panel panel-warning">
        <div class="panel-heading">
          书名:{{book.title}}
        </div>
        <div class="panel-body text-center">
          <img :src="book.bookCover" alt="">
        </div>
        <div class="panel-footer">
          价格:{{book.bookPrice | currency('￥')}}
          <router-link class="pull-right" :to="{name:'detail',params:{id:book.bookId}}">详情>></router-link>
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
