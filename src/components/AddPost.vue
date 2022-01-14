<template>
  <div class="container" style="margin-top: 10%">
    <v-card width="800" style="margin-bottom: 10%; margin-left: 15%">
      <v-card-title style="font-weight: 600"> Add New Place (Click on the map to select the location of the place)</v-card-title>
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
           <l-map @click="mark" style="height: 550px" :zoom="zoom" :center="center">
<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
 <l-marker  :lat-lng="center"></l-marker>
           </l-map>
          <div style="margin-left: 20%;margin-top:5%">
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
                  <v-text-field
                    style="font-weight: 600"
                    id="desc"
                    name="des"
                    label="Place Description"
                    autocomplete="off"
                    outlined
                    dense
                    color="#4DBA87"
                  ></v-text-field>
                </v-flex>
              </v-col>
              <v-col cols="10">
                 <v-file-input
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
            </v-file-input>
              </v-col>
            </v-row>
            <v-img style="height: 200px; width: 480px" :src="url1"></v-img>
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
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
export default {
  components: {
    LMap,LTileLayer,LMarker
  },
  data() {
    return {
      dialog: true,
      placeImage: null,
      url1: null,
       url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 8,
      center: [47.313220, -1.319482],
    };
  },
  methods: {
    mark(event) {
      this.center = [event.latlng.lat, event.latlng.lng]
              console.log(event.latlng.lat)
              console.log(event.latlng.lng)
           },
    // initMap() {
    //   const myLatlng = { lat: -25.363, lng: 131.044 };
    //   const map = new google.maps.Map(document.getElementById("map"), {
    //     zoom: 4,
    //     center: myLatlng,
    //   });
    //   // Create the initial InfoWindow.
    //   let infoWindow = new google.maps.InfoWindow({
    //     content: "Click the map to get Lat/Lng!",
    //     position: myLatlng,
    //   });

    //   infoWindow.open(map);
    //   // Configure the click listener.
    //   map.addListener("click", (mapsMouseEvent) => {
    //     // Close the current InfoWindow.
    //     infoWindow.close();
    //     // Create a new InfoWindow.
    //     infoWindow = new google.maps.InfoWindow({
    //       position: mapsMouseEvent.latLng,
    //     });
    //     infoWindow.setContent(
    //       JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    //     );
    //     infoWindow.open(map);
    //   });
    // },
    ImagePriview() {
      this.url1 = URL.createObjectURL(this.placeImage);
    },
  },
};
</script>

<style scoped>
</style>