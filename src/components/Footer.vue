<template>
  <div>
    <!-- footer  desktop -->
    <v-footer
      style="border: 1px none; background-color: #6ab43e;; z-index:2000;align-items:center !important"
      class="white--text py-2 hidden-lg-and-up"
      height="120"
      
    >
    <v-spacer></v-spacer>
   <v-row>
     <v-col cols="12" > <v-icon style="color:white !important; margin-left:1% !important">
  mdi-facebook
</v-icon>
<v-icon style="color:white !important;margin-left:1% !important">
  mdi-twitter
</v-icon>
<v-icon style="color:white !important;margin-left:1% !important">
  mdi-instagram
</v-icon>
<v-icon style="color:white !important;margin-left:1% !important">
  mdi-linkedin
</v-icon></v-col>
<v-col cols="12" style="color:white !important">
   {{ new Date().getFullYear() }} — <strong>Gis</strong>
</v-col>
   </v-row>
     
    </v-footer>
  
  </div>
</template>

<script>
export default {
 
  
};
</script>

<style></style>