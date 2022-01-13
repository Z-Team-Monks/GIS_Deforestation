<template>
    <div class="container" style="margin-top:10%">
        <v-card width="600" style="margin-bottom:10%; margin-left:15%">
          <v-card-title style="font-weight:600"> Add New Place</v-card-title>
          <v-form @submit.prevent="" lazy-validation ref="form">
            <v-card-text>
              <div style="margin-left:20%">
               <v-row>
                    <v-col cols="10">
                        <v-flex>
                  <v-text-field style="font-weight:600"
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
                  <v-text-field style="font-weight:600"
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
               </v-row>
                <v-file-input style="font-weight:600"
                  @change="ImagePriview"
                  v-model="placeImage"
                  show-size
                  label="Upload your Place Image"
                  prepend-icon="mdi-camera"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Pick an image"
                >
                </v-file-input>
                <v-img style="height: 200px; width: 480px" :src="url"></v-img>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
               
              <v-btn
            style="
              font-weight: 900;
              margin-left:1%;
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
export default {
    data() {
    return {
      dialog: true,
      placeImage: null,
      url: null,
    };
  },
  methods: {
    ImagePriview() {
      this.url = URL.createObjectURL(this.placeImage);
    },
  },
}
</script>

<style scoped>

</style>