<template>
    <div>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
        </v-img>
        <v-container fluid>
            <v-row>
            <v-col cols="10">Title</v-col>
            <v-col cols="2">Votes: 20</v-col>
            <v-divider></v-divider>
            <v-col cols="12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda totam ex iusto? Delectus consectetur, soluta placeat minima eligendi reiciendis adipisci quisquam porro nesciunt numquam provident culpa eos quis. Modi, voluptatum!</v-col>
        </v-row>
        <v-row>
            <v-col cols="4">Status</v-col>
            <v-col cols="4">Plantation</v-col>
            <v-col cols="4">Wild Life</v-col>
        </v-row>
        <v-row>
             <v-col cols="6">
                 <v-textarea
                    outlined
                    v-model="com"
                    class="ma-0"
                    name="input-7-4"
                    label="Write a Comment"
                  ></v-textarea>
             </v-col>
                 <v-col cols="12">
                      <v-btn
                    :disabled="com != ''"
                    @click="addCom"
                    class="ma-0 btn"
                    color="#09b750"
                    >Submit</v-btn
                  >
                 </v-col>
        </v-row>
        
                  <div
                 
                  class="text-start mt-5"
                  style="width:600px; margin-top:2%"
                > 
                <h3>Commets</h3>
                  <v-avatar class="profile mr-2" color="grey" size="40">
                    <v-img
                      src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
                    ></v-img>
                  </v-avatar>
                  Niko
                  <v-row class="ml-5">
                   <v-col>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facere aliquid accusantium. Laudantium consectetur esse officia quaerat voluptatibus. Ipsum minima sunt, a non doloribus nesciunt cupiditate aut animi ducimus quod?
                   </v-col>
                    
                  </v-row>
                </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            com: ''
        }
    },
    methods:{
        addCom(){
            console.log('coment')
        }
    }
}
</script>
<style scoped>

</style>