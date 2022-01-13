<template>
  <div>
    <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"> </v-img>
    <v-container style="margin-top:3%">
      <v-row>
        <v-col cols="10"
          ><h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </h1></v-col
        >
        <v-col cols="2"><h3>Votes: 20</h3></v-col>
        <v-divider></v-divider>
        <v-col cols="12"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          totam ex iusto? Delectus consectetur, soluta placeat minima eligendi
          reiciendis adipisci quisquam porro nesciunt numquam provident culpa
          eos quis. Modi, voluptatum!</v-col
        >
      </v-row>
      <v-divider style="margin-top: 3%"></v-divider>
      <v-row style="margin-top: 3%">
        <v-col cols="4"><h2>Status</h2>
        <v-list-item style="margin-left: -5%; !important"
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon>mdi-checkbox-marked-circle-outline</v-icon> 
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-col>
        <v-col cols="4" ><h2>Plantation</h2>
         <v-list-item style="margin-left: -5%; !important"
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon>mdi-checkbox-marked-circle-outline</v-icon> 
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item></v-col>
        <v-col cols="4"><h2>Wild Life</h2>
         <v-list-item style="margin-left: -5%; !important"
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon>mdi-checkbox-marked-circle-outline</v-icon> 
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item></v-col>
      </v-row>
      <v-row style="margin-top: 3%">
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
            style="
              font-weight: 900;
              background-color: green !important;
              color: white;
              margin-left: 40%;
            "
            tile
            :disabled="com != ''"
            @click="addCom"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>

      <div class="text-start mt-5" style="width: 600px; margin-top: 2%">
        <h3 style="margin:5%">Commets</h3>
       <div style="margin-bottom:3%">
            <v-avatar class="profile mr-2" color="grey" size="40">
          <v-img
            src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
          ></v-img>
        </v-avatar>
       <span style="margin-left:2%"> Niko</span>
       </div>
        <v-row style="margin-left:5%;" class="ml-5">
          <v-col>
           <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            facere aliquid accusantium. Laudantium consectetur esse officia
            quaerat voluptatibus. Ipsum minima sunt, a non doloribus nesciunt
            cupiditate aut animi ducimus quod?
           </p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      com: "",
      items: [
      { text: 'Found Raised', },
      { text: 'Deforestation Rate',},
      { text: 'Forest Coverage',},
      { text: 'Region', },
    ],
    };
  },
  methods: {
    addCom() {
      console.log("coment");
    },
  },
};
</script>
<style scoped>
</style>