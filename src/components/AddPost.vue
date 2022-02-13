<template>
  <div class="container" style="margin-top: 10%">
    <v-card width="800" style="margin-bottom: 10%; margin-left: 15%">
      <v-card-title style="font-weight: 600">
        Add New Place (Click on the map to select the location of the
        place)</v-card-title
      >
      <v-form @submit.prevent="" lazy-validation ref="form">
        <v-card-text>
          <!-- <div id="map"></div>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="570"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Ethiopia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe
              >
            </div>
          </div> -->
          <l-map
            @click="mark"
            style="height: 550px"
            :zoom="zoom"
            :center="center"
          >
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="center"></l-marker>
          </l-map>
          <div style="margin-left: 20%; margin-top: 5%">
            <v-row>
              <v-col cols="10">
                <v-flex>
                  <v-text-field
                    style="font-weight: 600"
                    id="location"
                    name="location"
                    label="Latitude"
                    :value="center[0]"
                    autocomplete="off"
                    outlined
                    dense
                    color="#4DBA87"
                  >
                  </v-text-field>
                </v-flex>
              </v-col>
              <v-col cols="10">
                <v-flex>
                  <v-text-field
                    style="font-weight: 600"
                    id="location"
                    name="location"
                    label="Longtiude"
                    :value="center[1]"
                    autocomplete="off"
                    outlined
                    dense
                    color="#4DBA87"
                  >
                  </v-text-field>
                </v-flex>
              </v-col>
              <v-col cols="10">
                <v-flex>
                  <v-text-field
                    style="font-weight: 600"
                    id="docName"
                    name="docName"
                    v-model="name"
                    label="Place Name"
                    autocomplete="off"
                    outlined
                    dense
                    color="#4DBA87"
                  >
                  </v-text-field>
                </v-flex>
              </v-col>
              <v-col cols="10">
                <v-flex>
                  <v-textarea
                    style="font-weight: 600"
                    id="desc"
                    name="des"
                    v-model="desc"
                    label="Place Description"
                    autocomplete="off"
                    outlined
                    dense
                    color="#4DBA87"
                  ></v-textarea>
                </v-flex>
              </v-col>
              <v-col cols="10">
                <v-flex>
                  <v-textarea
                    style="font-weight: 600"
                    id="wlife"
                    name="wlife"
                    v-model="wlife"
                    label="Wild Life(List of animals)"
                    autocomplete="off"
                    outlined
                    dense
                    color="#4DBA87"
                  ></v-textarea>
                </v-flex>
              </v-col>
              <v-col cols="10">
                <v-flex>
                  <v-textarea
                    style="font-weight: 600"
                    id="plantation"
                    name="plantation"
                    v-model="plant"
                    label="List of Plants in it"
                    autocomplete="off"
                    outlined
                    dense
                    color="#4DBA87"
                  ></v-textarea>
                </v-flex>
              </v-col>
              <v-col cols="10">
                <v-flex>
                  <v-text-field
                    style="font-weight: 600"
                    id="region"
                    name="region"
                    label="Region"
                    v-model="region"
                    autocomplete="off"
                    outlined
                    dense
                    color="#4DBA87"
                  ></v-text-field>
                </v-flex>
              </v-col>
              <v-col cols="10">
                <v-flex>
                  <v-text-field
                    style="font-weight: 600"
                    id="forcov"
                    name="forcov"
                    v-model="forestcover"
                    label="Forest Coverage"
                    autocomplete="off"
                    outlined
                    dense
                    color="#4DBA87"
                  ></v-text-field>
                </v-flex>
              </v-col>
              <v-col cols="10">
                <v-text-field
                  style="font-weight: 600"
                  id="defrate"
                  name="defrate"
                  v-model="defrate"
                  label="Deforestation Rate"
                  autocomplete="off"
                  outlined
                  dense
                  color="#4DBA87"
                ></v-text-field>

                <!-- <v-file-input
              style="font-weight: 600"
              @change="ImagePriview"
              v-model="placeImage"
              outlined
              dense
              show-size
              label="Upload your Place Image"
              prepend-icon=""
              prepend-inner-icon="mdi-camera"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an image"
            >
            </v-file-input> -->
              </v-col>
            </v-row>
            <!-- <v-img style="height: 200px; width: 480px" :src="url1"></v-img> -->
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            style="
              font-weight: 900;
              margin-left: 1%;
              background-color: green !important;
              color: white;
            "
            tile
            @click="AddArea_"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import {  addArea } from "../store";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      name: "",
      desc: "",
      region: "",
      forestcover: 0,
      defrate: 0,
      wlife: "",
      plant: "",
      dialog: true,
      placeImage: null,
      url1: null,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 8,
      center: [47.31322, -1.319482],
      polygon:[
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
    ]
    };
  },
  methods: {
    mark(event) {
      this.center = [event.latlng.lat, event.latlng.lng];
      console.log(event.latlng.lat);
      console.log(event.latlng.lng);
    },

    AddArea_() {
      let payload = {
        name: this.name,
        vote: 0,
        postedBy: JSON.parse(localStorage.getItem("user")).message.data.user.id,
        description: this.desc,
        region: this.region,
        deforestationRate: this.defrate,
        forestCoverage: this.forestcover,
        polygon: {
          coordinates: this.polygon
        },
        plantation: [
          {
            plant: "Plants List",
            description: this.plant
          }
        ],
        wildlife: [
          {
            animal: "Animals List",
            description: this.wlife
          }
        ],
        location:{
          type: "Point",
          coordinates: this.center
        },
      };

      addArea(payload);

  
    },
    ImagePriview() {
      this.url1 = URL.createObjectURL(this.placeImage);
    },
  },
};
</script>

<style scoped>
</style>