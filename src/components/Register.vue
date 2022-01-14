<template>
    <div class="container" style="margin-top:10%">
        <v-card  width="600" style="margin-bottom:10%; margin-left:20%">
          <v-card-title style="font-weight:600"> Register</v-card-title>
          <v-form @submit.prevent="" lazy-validation ref="form">
            <v-card-text>
              <div style="margin-left:20%">
               <v-row>
                    <v-col cols="10">
                        <v-flex>
                  <v-text-field style="font-weight:600"
                    id="username"
                    name="username"
                    v-model="username"
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
                    id="email"
                    name="email"
                    type="email"
                    v-model="email"
                    label="Email"
                    autocomplete="off"
                    outlined
                    dense
                    color="#4DBA87"
                  ></v-text-field>
                </v-flex>
                </v-col>
                <v-col cols="10">
                    <v-flex>
                  <v-text-field style="font-weight:600"
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    v-model="password"
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
            @click='addUser()'
            :loading="loading"
        :disabled="loading"
          
            tile
          >
            Register
          </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
    </div>
</template>

<script>
import {createUser} from '../store/index'
export default {
    data() {
    return {
      loader: null,
      loading: false,
      dialog: true,
      placeImage: null,
      url: null,
      username: '',
      email: '',
      password:''
    };
  },
  methods: {
    addUser() {
          console.log(this.username)
          const payload = {
              name: this.username,
              email: this.email,
              password: this.password
          }
           createUser(payload)
          this.clearForm();
      },
      clearForm() {
          this.username = "";
          this.email = "";
          this.password = "";
      },
    ImagePriview() {
      this.url = URL.createObjectURL(this.placeImage);
    },
  },
}
</script>

<style scoped>

</style>