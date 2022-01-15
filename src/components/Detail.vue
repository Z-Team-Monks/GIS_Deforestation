<template>
  <v-container>
    <v-container style="margin-top: 3.5%">
      <l-map style="height: 450px" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-polygon
          :lat-lngs="polygon.latlngs"
          :color="polygon.color"
        ></l-polygon>
      </l-map>
    </v-container>

    <v-row v-if="forrest" style="margin: 3.5%">
      <v-col cols="8">
        <v-row>
          <v-col cols="10">
            <!--  -->
            <h1>
              {{ forrest.name }}
            </h1></v-col
          >
          <v-col cols="2"
            ><h3>Votes: {{ forrest.votes }}</h3></v-col
          >
          <v-divider></v-divider>
          <!--  -->
          <v-col cols="12">{{ forrest.description }} </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="5">
            <v-card v-if="forrest.plantation" style="padding: 25px">
              <h2>Plantation</h2>
              <div v-for="(item, i) in forrest.plantation" :key="i">
                <v-list>{{item}}</v-list>
                <p v-if="item">{{ item.plant }}</p>
                  <p v-if="item">{{ item.description }}</p>
              </div>
            </v-card>
          </v-col>
          <v-col cols="5">
            <v-card style="padding: 25px">
              <h2>Wild Life</h2>
              <div v-for="(item, i) in forrest.wildlife" :key ="i">
                <p v-if="item">{{ item.animal }}</p>
                <p v-if="item">{{ item.description }}</p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3">
        <!--  -->
        <Donate
          :id="forrestId"
          :name="forrest.name"
          :fundraised="forrest.fundraised"
        />
      </v-col>
    </v-row>
    <v-container>
      <v-divider></v-divider>

      <v-row v-if="isLoggedIn" style="margin-top: 3%">
        <v-col cols="5" align-self="end">
          <v-textarea
            solo
            v-model="com"
            class="ma-0"
            name="input-7-4"
            label="Write a Comment"
          ></v-textarea>
          <v-row align="end" justify="end">
            <v-col cols="3">
              <v-btn block style="color: black !important; font-weight: 900">
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-container v-if="discussion">
        <div v-bind:v-for="(item, i) in discussion" :key="i">
          <Comment v-if="item" :content="item.comment" />
        </div>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import { LMap, LTileLayer, LPolygon } from "vue2-leaflet";
import { getForestDetail } from "../store";
import Comment from "./Comment";
import Donate from "./Donate";

export default {
  components: {
    LMap,
    LTileLayer,
    LPolygon,
    Comment,
    Donate,
  },
  props: ["id"],
    getPlantation: () => this.plantation,
  computed: {
    getWildlife: () => this.wildlife,
  },
  data() {
    const getCenter = (latlngs) => {
      let totalLat = 0;
      let totalLong = 0;

      for (let i = 0; i < latlngs.length; i++) {
        totalLat += latlngs[i][0];
        totalLong += latlngs[i][1];
      }

      return [totalLat / latlngs.length, totalLong / latlngs.length];
    };

    let latlngsList = [
      [47.2263299, -1.6222],
      [47.21024000000001, -1.6270065],
      [47.1969447, -1.6136169],
      [47.18527929999999, -1.6143036],
      [47.1794457, -1.6098404],
      [47.1775788, -1.5985107],
      [47.1676598, -1.5753365],
      [47.1593731, -1.5521622],
      [47.1593731, -1.5319061],
      [47.1722111, -1.5143967],
      [47.1960115, -1.4841843],
      [47.2095404, -1.4848709],
      [47.2291277, -1.4683914],
      [47.2533687, -1.5116501],
      [47.2577961, -1.5531921],
      [47.26828069, -1.5621185],
      [47.2657179, -1.589241],
      [47.2589612, -1.6204834],
      [47.237287, -1.6266632],
      [47.2263299, -1.6222],
    ];

    return {
      forrestId: "61e1639e0db95bb16ea21554",
      forrest: {
        name: "",
        description: "",
        wildlife: [],
        plantation: [],
        discussion: [],
      },
      plantation: [],
      wildlife: [],
      discussion: [],
      isLoggedIn: "user" in localStorage,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 11,
      center: getCenter(latlngsList),
      polygon: {
        latlngs: latlngsList,
        color: "green",
      },
    };
  },

  async mounted() {
    let response = await getForestDetail("61e1639e0db95bb16ea21554");
    this.forrest = response.message.data;
    console.log("sssssssssss");
    console.log(this.forrest);
    console.log("sssssssssss");
    this.plantation = this.forrest.plantation;
    this.discussion = this.forrest.discussion;
    this.wildlife = this.forrest.wildlife;
    console.log(this.forrest);
    console.log(this.wildlife);
  },
};
</script>
<style scoped></style>
