<template>
  <div>
    <div style="margin-top: 5%;550px !important">
      <l-map style="height: 550px" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <div v-if="index == -1">
          <l-marker v-for="(pt, index) in marker2" :key="index" :lat-lng="pt"
            ><l-icon
              :icon-size="dynamicSize"
              :icon-anchor="dynamicAnchor"
              icon-url="https://www.freeiconspng.com/uploads/agricultural-sciences-icon-10.png"
          /></l-marker>
        </div>
        <div v-else>
          <l-marker :lat-lng="infor[index].location.coordinates"
            ><l-icon
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
    <v-container>
      <v-slide-group>
        <v-slide-item v-for="(n, i) in infor" :key="i">
          <div
            :style="
              index == i
                ? 'border: 2px solid green;margin: 0.5%'
                : 'padding: 0.5%'
            "
            class="ma-1"
            @click="toggle(i)"
          >
            <v-card
              :elevation="2"
              style="background-color: black"
              :width="200"
              :height="150 ? 150 - 50 : ''"
            >
              <v-img
                :src="imageSet[i].image"
                class="white--text"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                :width="200"
                :height="150 ? 150 - 50 : ''"
                ><v-card-title
                  class="text-h5"
                  style="
                    color: white !important;
                    font-size: 15px;
                    font-weight: 600;
                    margin: 39% 0px 0px -67%;
                  "
                  v-text="n.name.length > 21 ? n.name.slice(0, 21) : n.name"
                ></v-card-title
              ></v-img>
            </v-card>
          </div>
        </v-slide-item>
      </v-slide-group>
      <v-container fluid>
        <h1>Recent Posts</h1>
        <v-slide-group>
          <v-slide-item v-for="(info, index) in infor" :key="index">
            <v-card style="margin: 1%" max-width="400">
              <v-img
                class="white--text align-end"
                height="200px"
                :src="imageSet[index].image"
              >
                <v-card-title
                  style="
                    color: white !important;
                    position: absolute;
                    font-weight: 900;
                    bottom: 5%;
                    left: 0px;
                  "
                  >{{ info.name }}</v-card-title
                >
              </v-img>

              <v-card-subtitle class="pb-0" style="font-weight: 900"
                >Votes: {{ info.votes }}</v-card-subtitle
              >

              <v-card-text style="font-weight: 900" class="text--primary">
                {{ info.description }}
              </v-card-text>

              <v-card-actions>
                <v-row align="center">
                  <v-col cols="4"> </v-col>
                  <v-col cols="8">
                    <router-link
                      style="text-decoration: none"
                      :to="`/detail/${info._id}`"
                    >
                      <v-btn
                        style="
                          font-weight: 900;
                          background-color: green !important;
                          color: white;
                        "
                        tile
                      >
                        Show More
                      </v-btn>
                    </router-link>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-container>

      <h1>Most deforested areas</h1>
      <v-container class="text-center">
        <v-slide-group>
          <v-slide-item
            v-for="(info, index) in deforestation_stat"
            :key="index"
            class="mr-5"
            style="margin: 1%"
          >
           <router-link style="text-decoration: none; cursor:pointer" :to="`/detail/${info._id}`"> 
              <v-card width="300px" color="#385F73" dark style="margin: 2%;background-color:green;font-weight:900" max-width="400">
              <v-card-title style="font-weight:900" class="text-h5">
                {{ info.name }}
              </v-card-title>

              <v-card-subtitle style="font-weight:900">{{ info.region }}</v-card-subtitle>

              <v-card-actions>
                <v-btn text style="font-weight:900">  ${{ info.fundraised }} </v-btn>
              </v-card-actions>
            </v-card>
           </router-link>
          </v-slide-item>
        </v-slide-group>
      </v-container>
      <v-container>
        <v-row style="margin-bottom: 5%; margin-top: 5%">
          <main>
            <header class="container is-narrow pageHeader">
              <div class="columns">
                <div class="column">
                  <h1 class="pageHeading">Contact us</h1>
                </div>
              </div>
            </header>
            <main>
              <div class="lead__form__outer">
                <div class="container is-centered">
                  <div class="columns">
                    <div class="column">
                      <div class="lead__form__wrapper">
                        <div class="success" style="display: none">
                          <h3>
                            <strong
                              >Thank you, ! Your submission has been
                              received</strong
                            >
                          </h3>
                          <a href="/" class="form__back"> Back to main page </a>
                        </div>
                        <div class="form" style="display: block">
                          <form
                            action="”mailto:se.natnael.abay@gmail.com”"
                            @submit.prevent="true"
                            id="dropzoneForm"
                            class="dropzone dz-clickable"
                            enctype="multipart/form-data"
                            method="post"
                            autocomplete="off"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              value="EUGiIHt3W0SmutBaJ3yWOSOOk2RKtFfoTFt8xHCM"
                            />
                            <div class="form__grid">
                              <div class="form__row">
                                <input
                                  data-info="referrer"
                                  type="hidden"
                                  value=""
                                />
                                <div class="form__col form__col--1_2">
                                  <div class="form__area">
                                    <div class="form__area__title">
                                      First name
                                    </div>
                                    <div
                                      class="form__area__field form__area__field--required"
                                      title="Required"
                                    >
                                      <input
                                        data-info="first_name"
                                        name="first_name"
                                        type="text"
                                        class="form__input"
                                        placeholder="Yahuushuwah"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="form__col form__col--1_2">
                                  <div class="form__area">
                                    <div class="form__area__title">
                                      Last name
                                    </div>
                                    <div
                                      class="form__area__field form__area__field--required"
                                    >
                                      <input
                                        data-info="last_name"
                                        name="last_name"
                                        type="text"
                                        class="form__input"
                                        placeholder="TorahTech"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form__row">
                                <div class="form__col form__col--1_2">
                                  <div class="form__area">
                                    <div class="form__area__title">Company</div>
                                    <div
                                      class="form__area__field form__area__field--required"
                                    >
                                      <input
                                        data-info="company"
                                        name="company"
                                        type="text"
                                        class="form__input"
                                        placeholder="TorahTech PC Repair"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="form__col form__col--1_2">
                                  <div class="form__area">
                                    <div class="form__area__title">Email</div>
                                    <div
                                      class="form__area__field form__area__field--required"
                                    >
                                      <input
                                        data-info="email"
                                        name="email"
                                        type="text"
                                        class="form__input"
                                        placeholder="torahtech@torahtech.tech"
                                        value=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form__row" data-row="prelast">
                                <div class="form__area">
                                  <div class="form__area__title">Message</div>
                                  <div class="form__area__field">
                                    <textarea
                                      id="message"
                                      name="message"
                                      class="form__textarea"
                                      rows="4"
                                      placeholder="Your message..."
                                      data-info="message"
                                      maxlength="256"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="form__row">
                              <div
                                class="form__col form__col--1 form__submit__wrapper"
                              >
                                <div data-info="submit" class="form__submit">
                                  <input type="submit">
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </main>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { LMap, LTileLayer, LIcon, LMarker } from "vue2-leaflet";
import { getAllAreas, fetchDeforestedAreas } from "../store/index";
export default {
  name: "Landing",
  components: {
    LMap,
    LTileLayer,
    LIcon,
    LMarker,
  },
  computed: {
    points() {
      return this.markerLatLng;
    },
  },
  data() {
    return {
      infor: [],
      index: -1,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 6,
      center: [8.971303829777483, 38.75349998474122],
      marker2: [],
      deforestation_stat: [],
      markerLatLng: [
        [47.2263299, -1.6222],
        [43.21024000000001, -1.6270065],
        [47.1969447, -7.6136169],
        [40.18527929999999, -1.6143036],
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
      ],
      polygon: {
        latlngs: [
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
        ],
        color: "red",
      },
      imageSet: [
        {
          image:
            "https://media.istockphoto.com/photos/fresh-green-soy-plants-on-the-field-in-spring-rows-of-young-soybean-picture-id1303980089",
          title: "Rash Dashion1",
          location: [47.31322, -1.319482],
        },
        {
          image:
            "https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Rash Dashion2",
          location: [43.21024000000001, -1.6270065],
        },
        {
          image:
            "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
          title: "Rash Dashion3",
          location: [47.18527929999999, -1.6143036],
        },
        {
          image:
            "https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Rash Dashion4",
          location: [47.1794457, -1.6098404],
        },
        {
          image:
            "https://media.istockphoto.com/photos/fresh-green-soy-plants-on-the-field-in-spring-rows-of-young-soybean-picture-id1303980089",
          title: "Rash Dashion5",
          location: [47.1676598, -1.5753365],
        },
        {
          image:
            "https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Rash Dashion6",
          location: [47.1593731, -1.5319061],
        },
        {
          image:
            "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
          title: "Rash Dashion7",
          location: [47.2095404, -1.4848709],
        },
        {
          image:
            "https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Rash Dashion8",
          location: [47.2263299, -1.6222],
        },
      ],
    };
  },
  methods: {
    async get() {
      let data = await getAllAreas();
      this.fetchAll();
      for (let i = 0; i <= data.message.data.length; i++) {
        if (data.message.data[i] != undefined) {
          this.marker2.push(data.message.data[i].location.coordinates);
        }
      }
      this.infor = data.message.data;
      console.log(this.center);
      console.log(JSON.stringify(data.message.data[0].location.coordinates));
    },
    toggle(n) {
      this.index = n;
      this.zoom = 10;
      this.center = this.infor[this.index].location.coordinates;
      console.log(this.infor[this.index].location);
    },

    async fetchAll() {
      let data = await fetchDeforestedAreas();
      console.log("data");
      console.log(data);
      console.log("data");
      this.deforestation_stat = data.message.data;
    },
  },
  created() {
    this.get();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap");
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #eff5f8;
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  color: #5e6c77;
}

main {
  flex: 1;
}
.container {
  width: 1170px;
  margin: 0 auto;
}

/* title  */
.pageHeading {
  text-align: center;
}
.pageHeading {
  color: #091841;
  font-weight: 600;
  font-size: 36px;
  margin-top: 30px;
}
/* form wrapper  */
.lead__form__wrapper {
  padding: 20px;
  margin: 30px 10% 50px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 0 30px rgba(184, 210, 230, 0.3);
}
/* back padding  */
.dropzone.dz-clickable {
  cursor: pointer;
}
.dropzone {
  padding: 15px;
}
.dropzone,
.dropzone * {
  box-sizing: border-box;
}
/* form layout  */
.form__grid {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
/* form row */
.form__row {
  display: flex;
  margin: 10px 0;
  width: 100%;
  justify-content: space-between;
}
/* form columns */
.form__col--1_2 {
  width: calc(50% - 10px);
}
/* form fieldset */
.form__area {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.form__area__title {
  color: #2b4458;
  opacity: 0.7;
  margin-bottom: 5px;
  font-size: 1.6rem;
  text-align: left;
}
/* input */
.form__area__field--required input {
  padding-right: 100px;
}
.form__input,
.form__textarea {
  width: 100%;
  border-radius: 5px;
  border: 2px solid #d3e2ee;
  padding: 12px 20px;
  padding-right: 20px;
  background: #fff;
  color: #091841;
  font-weight: 700;
  font-size: 13px;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
/* input  txt*/
.form__area__field {
  position: relative;
}

.form__area__field::before {
  content: "required";
  position: absolute;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1em;
  color: #7e8d99;
  letter-spacing: 2px;
  border-radius: 0 6px 6px 0;
  right: 10px;
  top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form__area__field--required::before {
  content: "required";
}
.form__area__field::after {
  position: absolute;
  content: "";
  display: block;
}
/* input color  */
.form__input::placeholder,
.form__textarea::placeholder {
  color: rgba(9, 24, 65, 0.2);
}
.dropzone .dz-message {
  text-align: center;
  padding: 2em 0;
  border: 2px dashed #d3e2ee;
  font-size: 16px;
  color: #2b4458;
  background: 0 0;
  border-radius: 5px;
}

.form__submit__wrapper {
  text-align: center;
  margin-top: 20px;
}
.form__submit {
  display: inline-block;
  width: auto;
  margin: 0 auto;
  background: #091841;
  color: #fff;
  padding: 15px 40px;
  border-radius: 5px;
  opacity: 0.9;
  text-decoration: none;
}
.form__submit:hover {
  cursor: pointer;
  opacity: 1;
}
/* Media Queries/ put in separate css file  */

@media (min-width: 992px) {
  .lead__subtitle {
    font-size: 22px;
  }

  .lead__form__wrapper {
    background: #fff;
    border-radius: 5px;
    padding: 30px;
    box-shadow: 0 0 30px rgba(184, 210, 230, 0.3);
  }
  .lead__form__wrapper--success {
    text-align: center;
    background: 0 0;
    box-shadow: none;
  }
  .lead__form__wrapper--success h3 {
    color: #091841;
    margin-bottom: 20px;
  }
  .lead__form__wrapper--success a {
    text-decoration: none;
  }
}
@media (min-width: 480px) and (max-width: 767px) {
  .lead__form__wrapper {
    padding: 15px;
    margin: 20px 5% 50px;
  }
  .container {
    max-width: 580px;
  }
  .form__col--1_2 {
    width: calc(102% - 10px);
  }
  .form__row {
    flex-direction: column;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .lead__form__wrapper {
    padding: 20px;
    margin: 30px 10% 50px;
  }
}
@media (min-width: 992px) {
  .lead__form__wrapper {
    padding: 20px;
    margin: 30px 15% 50px;
  }
}
@media (max-width: 479px) {
  .lead__form__outer {
    padding: 20px 0;
  }
}
.form__success {
  padding: 20px;
  text-align: center;
}
.form__success p {
  margin-bottom: 20px;
  font-size: 20px;
}
.form__success a {
  margin-top: 20px;
  width: 100%;
  text-align: center;
}
.form__success__header {
  font-weight: 700;
  text-align: center;
  color: #091841;
}
@media (max-width: 479px) {
  .container {
    width: 500px;
  }
  .form__success__header {
    font-size: 18px;
  }
  .form__area {
    width: 310px;
  }
  .form__row {
    flex-direction: column;
    margin: 0 auto;
  }
  .form__col--1_2 {
    width: calc(50% - 10px);
  }
  .form__textarea {
    width: 100%;
    padding-right: 112px;
  }
}
@media (min-width: 480px) and (max-width: 767px) {
  .container {
    max-width: 750px;
    padding: 0 2rem;
  }
  .form__success__header {
    font-size: 20px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .form__success__header {
    font-size: 22px;
  }
}
@media (min-width: 992px) {
  .form__success__header {
    font-size: 28px;
  }
}
</style>
