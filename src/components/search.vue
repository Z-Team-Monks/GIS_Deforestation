<template>
  <div>
    <v-container style="margin-top: 5%; !important">
      
      <v-row>
        <v-col cols="8">
          <div>
                <l-map style="height: 450px" :zoom="zoom" :center="center">
<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
<l-polygon :lat-lngs="polygon.latlngs" :color="polygon.color"></l-polygon>
</l-map>
          </div>
          <!-- <div
            v-if="searchResults"
            style="margin-top: 2%; !important;margin-bottom: 5%; !important"
          >
          
            <l-map
              v-if="searchResults.length >= 1"
              style="height: 250px"
              :zoom="zoom"
              :center="center"
            >
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              ></l-tile-layer>
              <div v-if="index == -1">
                <l-marker
                  v-for="(pt, index) in markerLatLng"
                  :key="index"
                  :lat-lng="pt"
                  ><l-icon
                    :icon-size="dynamicSize"
                    :icon-anchor="dynamicAnchor"
                    icon-url="https://www.freeiconspng.com/uploads/agricultural-sciences-icon-10.png"
                /></l-marker>
              </div>
              <div v-else>
                <l-marker :lat-lng="[6.534323, 39.3242343]"
                  ><l-icon
                    :icon-size="dynamicSize"
                    :icon-anchor="dynamicAnchor"
                    icon-url="https://www.freeiconspng.com/uploads/agricultural-sciences-icon-10.png"
                /></l-marker>
              </div>
            </l-map>
          </div> -->
          <v-divider></v-divider>
          <h1>Search Results</h1>
          <v-row v-if="myResults" style="margin-top: 5%">
            <v-col
              v-for="(searchres, index) in searchResults"
              :key="index"
              cols="6"
            >
              <v-card style="margin: 1%" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                  <v-card-title
                    style="
                      color: white !important;
                      position: absolute;
                      font-weight: 900;
                      bottom: 5%;
                      left: 0px;
                    "
                    >{{ searchres.name }}</v-card-title
                  >
                </v-img>

                <v-card-subtitle class="pb-0" style="font-weight: 900"
                  >Votes: {{ searchres.votes }}</v-card-subtitle
                >

                <v-card-text style="font-weight: 900" class="text--primary">
                  {{ searchres.description }}
                </v-card-text>

                <v-card-actions>
                  <v-row align="center">
                    <v-col cols="4"> </v-col>
                    <v-col cols="8">
                      <router-link style="text-decoration: none" to="/detail">
                        <v-btn
                          style="
                            font-weight: 900;
                            background-color: green !important;
                            color: white;
                          "
                          tile
                        >
                          Donate
                        </v-btn>
                      </router-link>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col style="margin-top: 3%" cols="4">
          <v-row>
            <v-col cols="11">
              <v-text-field
                solo
                dense
                light
                height="40px"
                style="margin-top: 2% !important; margin-left: 1%"
                v-model="searchP"
                placeholder="Search Places..."
              ></v-text-field>
            </v-col>
            <v-col style="margin-left: -6%; margin-top: 1.7%" cols="1">
              <v-btn
                :href="`/search/${JSON.stringify({
                  name: searchP,
                })}`"
                color="#4DBA87"
                dark
                height="40px"
                tile
                class="rounded-r-xl"
              >
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <h3>REGIONS</h3>
          <div
            style="padding: 4%"
            v-for="(region, index) in regions"
            :key="index"
          >
            <v-btn
              style="font-weight: 900; margin-bottom: 1%"
              @click="setSelected(region._id)"
            >
              {{ region._id }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { LMap, LTileLayer, LPolygon } from "vue2-leaflet";
import { searchAreas, getRegions } from "../store/index";
// import { useRoute } from "vue-router";
export default {
  name: "Landing",
  components: {
    LMap,
    LTileLayer,
    LPolygon
    // LIcon,
    // LMarker,
  },
  computed: {
    points() {
      return this.markerLatLng;
    },
    myRegions() {
      return this.regions;
    },
    myResults() {
      return this.searchResults;
    },
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
    const latlngss = [[47.2263299, -1.6222], [47.21024000000001, -1.6270065], [47.1969447, -1.6136169], [47.18527929999999, -1.6143036], [47.1794457, -1.6098404], [47.1775788, -1.5985107], [47.1676598, -1.5753365], [47.1593731, -1.5521622], [47.1593731, -1.5319061], [47.1722111, -1.5143967], [47.1960115, -1.4841843], [47.2095404, -1.4848709], [47.2291277, -1.4683914], [47.2533687, -1.5116501], [47.2577961, -1.5531921], [47.26828069, -1.5621185], [47.2657179, -1.589241], [47.2589612, -1.6204834], [47.237287, -1.6266632], [47.2263299, -1.6222]]
    return {

      location: {
        lat: 0,
        lon: 0.0
      },
      gettingLocation: false,
      regions: [],
      errorStr: null,
      searchParam: {
        lat: 0,
        lon: 0,
        name: "this.$route.query.name",
        region: null,
        nearby: 15000,
      },
      searchResults: [],
      infor: [],
      index: -1,
       url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 11,
      center: getCenter(latlngss),
      polygon: {
        latlngs: latlngss,
        color: 'green'
      },
    };
  },
  methods: {
    setSelected(region) {
      console.log(region);
      //   this.searchParam.region = region
      console.log(this.searchParam);
    },
    async getLocation() {
      return new Promise((resolve, reject) => {
        if (!("geolocation" in navigator)) {
          reject(new Error("Geolocation is not available."));
        }

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve(pos);
          },
          (err) => {
            reject(err);
          }
        );
      });
    },
    async locateMe() {
      this.gettingLocation = true;
      try {
        this.gettingLocation = false;
        const currentLoc = await this.getLocation();
        this.location = {
          lat: currentLoc.coords.latitude,
          lon: currentLoc.coords.longitude,
        };
        console.log(this.location);
        console.log(this.$route.query.name);

        const searchP = {
          lat: this.location.lat,
          lon: this.location.lon,
          name: this.$route.query.name,
          region: undefined,
          nearby: 1500000000,
        };
        const regiondata = await getRegions();
        console.log("-- region datat -- ", searchP);
        this.regions = regiondata.data.forestCategory;
        console.log(this.regions);
        this.searchForAreas(searchP);
      } catch (e) {
        this.gettingLocation = false;
        this.errorStr = e.message;
      }
    },
    async searchForAreas(data) {
      let res = await searchAreas(data);
      this.searchResults = res.data.forests;
      console.log("asdasdasdasdasd");
      console.log(this.searchResults);
      console.log("asdasdasdasdasd");
      // for (let i = 0; i <= res.data.forests.length; i++) {
      //     if (res.data.forests[i] != undefined) {
      //       this.marker2 = this.searchResults[i].location.coordinates;
      //     }
      //     console.log(this.marker2);
      //   }
      //   console.log(this.searchResults[0].location.coordinates);
      // },
      // async get() {
      //   let data = await getAllAreas();
      //   for (let i = 0; i <= data.message.data.length; i++) {
      //     if (data.message.data[i] != undefined) {
      //       this.marker2.push(data.message.data[i].location.coordinates);
      //     }
      //   }
      //   this.infor = data.message.data;
      //   console.log(this.center);
      //   console.log(JSON.stringify(data.message.data[0].location.coordinates));
    },
    toggle(n) {
      this.index = n;
      this.zoom = 10;
      this.center = this.infor[this.index].location.coordinates;
      console.log(this.infor[this.index].location);
    },
  },

  created() {
    // this.get();
    this.locateMe();
  },
};
</script>

<style scoped></style>
