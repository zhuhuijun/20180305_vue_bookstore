<template>
  <div id="app">
    <NavBar/>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
    <router-view/>
        </div>
      </div>
      </div>  
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style scoped>

</style>
