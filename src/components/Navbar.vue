<template>
  <v-app-bar color="white" app style="background-color:#50CB93;" height="75px" >
      <router-link to="/" style="text-decoration:none"><h2 style="color:white !important">Home</h2></router-link>
    
    <v-spacer></v-spacer>

   
    

    <!-- profile -->
    <!-- <v-menu
      class="toolbar-menu-item"
      
      origin="center center"
    
      transition="scale-transition"
    > -->
    <!-- <template > -->
      <router-link style="text-decoration:none" to="/profile"><v-btn  icon large>
        <v-avatar style="background-color:#54436B" size="42px">
           <span  style="color:white"><h2>A</h2></span>
        </v-avatar>
      </v-btn></router-link>
      <!-- </template> -->
      
    <!-- </v-menu> -->

    
  </v-app-bar>
</template>

<script>

export default {
  
 
 
  methods: {
    
  },
  computed: {
  }
};
</script>

<style>
.toolbar-menu-item {
  padding-left: 20px;
}
</style>