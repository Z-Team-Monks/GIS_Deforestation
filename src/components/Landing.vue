<template>
  <div>
    <div style="margin-top: 5%;550px !important">
      <l-map style="height: 550px" :zoom="zoom" :center="center">
        <h1 v-if="index != -1">{{imageSet[index].title}}</h1>
<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
<div v-if="index == -1">
  <l-marker v-for="(pt, index) in markerLatLng" :key="index" :lat-lng="pt"><l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="https://www.freeiconspng.com/uploads/agricultural-sciences-icon-10.png"
        /></l-marker>
</div>
<div  v-else>
  <l-marker :lat-lng="imageSet[index].location"><l-icon
          :icon-size="dynamicSize"
          :icon-anchor="dynamicAnchor"
          icon-url="https://www.freeiconspng.com/uploads/agricultural-sciences-icon-10.png"
        /></l-marker>
</div>

</l-map>
    </div>
    <!-- <v-img height="500px" :src="imageSet[index].image"
      ><h1
        class="text-h4"
        style="color: white !important; position: absolute; bottom: 50%"
        v-text="imageSet[index].title"
      ></h1
    ></v-img> -->
    <v-slide-group>
      <v-slide-item v-for="(n, i) in imageSet" :key="n.id">
        <div
          :style="
            index == i
              ? 'border: 2px solid green;margin: 0.5%'
              : 'padding: 0.5%'
          "
          class="ma-1"
          @click="toggle(i)"
        >
          <v-card :elevation="2" :width="150" :height="150 ? 150 - 50 : ''">
            <v-img
              :src="n.image"
              class="white--text"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              :width="250"
              :height="250 ? 250 - 50 : ''"
            >
              <v-card-title
                class="text-h5"
                style="
                  color: white !important;
                  font-size:15px;
                  margin: 80% 0px 0px -100% !important;font-weight: 600;
                "
                v-text="n.title.length > 21 ? n.title.slice(0, 21) : n.title"
              ></v-card-title>
            </v-img>
          </v-card>
          
        </div>
      </v-slide-item>
    </v-slide-group>
    <v-container fluid>
      <h1>Recent Posts</h1>
     <v-card style="margin-top:3%" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title style="color: white !important; position: absolute;font-weight: 900; bottom: 5%;left:0px">Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0" style="font-weight: 900;"> Number 10, 2021 </v-card-subtitle>

        <v-card-text style="font-weight: 900;" class="text--primary">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, at? Velit consequatur architecto libero quibusdam est! Earum, quae? Aspernatur placeat numquam voluptatibus, eius aliquid hic provident. Ipsum provident itaque perspiciatis.
        </v-card-text>

        <v-card-actions>
          
         <v-row align="center">
           <v-col cols="4">
             
           </v-col>
           <v-col cols="8">
              <router-link style="text-decoration:none" to="/detail">
                <v-btn style="font-weight: 900; background-color:green !important; color:white;" tile> Donate </v-btn>
              </router-link>
           </v-col>
         </v-row>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container>
     
      <v-row style="margin-bottom:5%;margin-top:5%">
        <v-col cols="4">
           <h1 style="margin-left:30%">
             Contact Us</h1>
             <v-img contain src="https://www.freeiconspng.com/uploads/agricultural-sciences-icon-10.png">

             </v-img>
             
        </v-col>
         <v-col cols="8">
           <v-row>
              <v-col cols="12">
          <v-flex>
            <v-text-field
              type="text"
              label="Full Name"
              autocomplete="off"
              outlined
              dense
              color="#4DBA87"
            ></v-text-field>
          </v-flex>
        </v-col>
        <v-col cols="12">
          <v-flex>
            <v-text-field
              type="email"
              label="Email"
              autocomplete="off"
              outlined
              dense
              color="#4DBA87"
            ></v-text-field>
          </v-flex>
        </v-col>
          <v-col cols="12">
          <v-flex>
            <v-text-field
              type="text"
              label="Subject"
              autocomplete="off"
              outlined
              dense
              color="#4DBA87"
            ></v-text-field>
          </v-flex>
        </v-col>
        <v-col cols="12">
          <v-flex>
            <v-textarea
              type="text"
              label="Write Message "
              ref="password"
              autocomplete="off"
              outlined
              dense
              color="#4DBA87"
            ></v-textarea>
          </v-flex>
        </v-col>
        <v-row align="center">
           <v-col cols="10">
             
           </v-col>
           <v-col cols="2">
              <v-btn style="font-weight: 900; background-color:green !important; color:white;" tile> Submit </v-btn>
           </v-col>
         </v-row>
           </v-row>
         </v-col>
        
      </v-row>
    </v-container>
  </div>
  
</template>

<script>
import {LMap, LTileLayer,LIcon, LMarker} from 'vue2-leaflet';
export default {
  name: "Landing",
  components: {
    LMap,
    LTileLayer,
    LIcon,
    LMarker
    
  },
  computed:{
    points(){
      return this.markerLatLng
    }
  },
  data() {
    return {
      index: -1,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 11,
      center: [47.313220, -1.319482],
      markerLatLng:[[47.2263299, -1.6222], [43.21024000000001, -1.6270065], [47.1969447, -7.6136169], [40.18527929999999, -1.6143036], [47.1794457, -1.6098404], [47.1775788, -1.5985107], [47.1676598, -1.5753365], [47.1593731, -1.5521622], [47.1593731, -1.5319061], [47.1722111, -1.5143967], [47.1960115, -1.4841843], [47.2095404, -1.4848709], [47.2291277, -1.4683914], [47.2533687, -1.5116501], [47.2577961, -1.5531921], [47.26828069, -1.5621185], [47.2657179, -1.589241], [47.2589612, -1.6204834], [47.237287, -1.6266632], [47.2263299, -1.6222]],
      polygon: {
        latlngs: [[47.2263299, -1.6222], [47.21024000000001, -1.6270065], [47.1969447, -1.6136169], [47.18527929999999, -1.6143036], [47.1794457, -1.6098404], [47.1775788, -1.5985107], [47.1676598, -1.5753365], [47.1593731, -1.5521622], [47.1593731, -1.5319061], [47.1722111, -1.5143967], [47.1960115, -1.4841843], [47.2095404, -1.4848709], [47.2291277, -1.4683914], [47.2533687, -1.5116501], [47.2577961, -1.5531921], [47.26828069, -1.5621185], [47.2657179, -1.589241], [47.2589612, -1.6204834], [47.237287, -1.6266632], [47.2263299, -1.6222]],
        color: 'red'
      },
      imageSet: [
        {
          image:
            "https://media.istockphoto.com/photos/fresh-green-soy-plants-on-the-field-in-spring-rows-of-young-soybean-picture-id1303980089",
          title: "Rash Dashion1",
          location: [47.313220, -1.319482]
        },
        {
          image:
            "https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Rash Dashion2",
          location: [43.21024000000001, -1.6270065]
        },
        {
          image:
            "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
          title: "Rash Dashion3",
          location: [47.18527929999999, -1.6143036]
        },
        {
          image:
            "https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Rash Dashion4",
          location: [47.1794457, -1.6098404]
        },
        {
          image:
            "https://media.istockphoto.com/photos/fresh-green-soy-plants-on-the-field-in-spring-rows-of-young-soybean-picture-id1303980089",
          title: "Rash Dashion5",
          location: [47.1676598, -1.5753365]
        },
        {
          image:
            "https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Rash Dashion6",
          location:  [47.1593731, -1.5319061]
        },
        {
          image:
            "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
          title: "Rash Dashion7",
          location: [47.2095404, -1.4848709]
        },
        {
          image:
            "https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Rash Dashion8",
          location: [47.2263299, -1.6222]
        },
      ],
    };
  },
  methods: {
    toggle(n) {
      this.zoom = 14
      this.index = n;
      this.center = this.imageSet[this.index].location
      console.log(this.imageSet[this.index].title);
    },
  },
};
</script>

<style scoped>
</style>