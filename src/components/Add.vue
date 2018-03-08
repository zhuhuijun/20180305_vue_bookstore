<template>
  <div>
    <form>
      <div class="form-group">
        <input type="text" class="form-control" autocomplete="off" v-model="book.bookCover"
        placeholder="书的封面">
      </div>
            <div class="form-group">
        <input type="text" class="form-control" autocomplete="off" v-model="book.bookName"
        placeholder="书的名称">
      </div>
        <div class="form-group">
        <input type="text" class="form-control" autocomplete="off" v-model="book.bookPrice"
        placeholder="书的价格">
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary" @click="add">添加图书</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book:{
        bookCover:'',
        bookName:'',
        bookPrice:''
      }
    };
  },
  components: {},
  methods: {
    add(){
      this.$http.post('/book',this.book).then(()=>{
          this.$router.push('/list');
      });
    }
  }
};
</script>

<style scoped>

</style>
