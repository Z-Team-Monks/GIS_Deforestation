<template>
    <div class="container" style="margin-top:10%">
        <v-card  width="600" style="margin-bottom:10%; margin-left:20%">
          <v-card-title style="font-weight:600"> Login</v-card-title>
          <v-form @submit.prevent="" lazy-validation ref="form">
            <v-card-text>
              <div style="margin-left:20%">
               <v-row>
                    <v-col cols="10">
                        <v-flex>
                  <v-text-field style="font-weight:600"
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    autocomplete="off"
                    v-model="email"
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
            @click="userLogin"
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
import {userlogin} from '../store/index'
export default {
    data() {
    return {
      email: '',
      password:'',
      dialog: true,
      placeImage: null,
      url: null,
    };
  },
  methods: {
    userLogin() {
        
          const payload = {
              
              email: this.email,
              password: this.password
          }
          userlogin(payload)
          // this.clearForm();
          // if(log){
          //    window && window.location.reload()
          // }
         
      },
      clearForm() {
          
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