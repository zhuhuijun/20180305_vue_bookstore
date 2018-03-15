<template>
  <div>
    <div>
      <div class="panel panel-warning">
        <div class="panel-heading">
          书名:<span v-show="!flag">{{book.title}} </span>         
          <input v-show="flag" type="text" v-model="book.title">
        </div>
        <div class="panel-body text-center">
          <img :src="book.bookCover" alt="">
        </div>
        <div class="panel-footer">
          <div class="row">
            <div class="col-md-9">价格:{{book.bookPrice | currency('￥')}}</div>
            <div class="col-md-3">
               <button v-show="!flag" class="btn btn-danger pull-right" @click="remove">删除</button>
               <button v-show="!flag" class="btn btn-warning pull-right" @click="changeFlag">修改</button>
               <button v-show="flag" class="btn btn-primary pull-right" @click="update">确认修改</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    currency(oldval, param1) {
      return param1 + oldval;
    }
  },
  data() {
    return {
      book: {
        bookCover: "",
        title: "",
        bookPrice: "",
        bookId: ""
      },
      id: "",
      flag: false
    };
  },
  created() {
    let id = this.$route.params.id;
    this.id = id;
    this.$http.get("/book?id=" + id).then(res => {
      this.book = res.body;
    });
  },
  components: {},
  methods: {
    remove() {
      this.$http.delete("/book?id=" + this.id).then(() => {
        this.$router.push("/list");
      });
    },
    changeFlag() {
      this.flag = !this.flag;
    },
    update() {
      console.info(this.book);
      this.$http.put("/book?id=" + this.bookId, this.book).then(() => {
        changeFlag();
      });
    }
  }
};
</script>

<style scoped>
img {
  width: 150px;
  height: 200px;
}
</style>
