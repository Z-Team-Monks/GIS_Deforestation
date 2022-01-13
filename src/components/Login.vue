<template>
    <div class="container" style="margin-top:10%">
        <v-card  width="600" style="margin-bottom:10%; margin-left:15%">
          <v-card-title style="font-weight:600"> Login</v-card-title>
          <v-form @submit.prevent="" lazy-validation ref="form">
            <v-card-text>
              <div style="margin-left:20%">
               <v-row>
                    <v-col cols="10">
                        <v-flex>
                  <v-text-field style="font-weight:600"
                    id="username"
                    name="username"
                    label="User Name"
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
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    autocomplete="off"
                    outlined
                    dense
                    color="#4DBA87"
                  ></v-text-field>
                </v-flex>
                </v-col>
               </v-row>
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
            Login
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