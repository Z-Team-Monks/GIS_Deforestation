<template>
  <v-app-bar color="white" app style="background-color: #6ab43e" height="75px">
    <router-link to="/" style="text-decoration: none"
      ><h2 style="color: white !important">Home</h2></router-link
    >
    <v-spacer></v-spacer>
 
                 <v-text-field
                solo
                dense
                light
                height="40px"
                style="margin-top:2% !important"
                v-model="searchP"
                placeholder="Search Places..."
              ></v-text-field>
             
              <router-link style="text-decoration: none" :to="`/search?name=${searchP}`">
                <v-btn
                
                color="#4DBA87"
                dark
                height="40px"
                tile
                class="rounded-r-xl"
              >
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              </router-link>
    <v-spacer></v-spacer>

    <!-- profile -->
    <!-- <v-menu
      class="toolbar-menu-item"
      
      origin="center center"
    
      transition="scale-transition"
    > -->
    <!-- <template > -->
    <div v-if="user === null">
      <v-row>
        <v-col cols="4"
          ><router-link style="text-decoration: none; color: white !important" to="/login"
            ><v-btn text>
              <h5 style="color: white !important">Login</h5>
            </v-btn></router-link
          >
        </v-col>
        <v-col cols="6"
          ><router-link style="text-decoration: none;" to="/register"
            ><v-btn text>
              <h5 style="color: white !important">Register</h5>
            </v-btn></router-link
          ></v-col
        >
      </v-row>
    </div>
    <div v-if="user !== null">
      <v-row>
        <v-col cols="6"
          ><router-link to="/profile">
            <v-avatar style="background-color: #54436b">
              <span style="color: white"
                ><h2>
                  {{ user.message.data.user.name[0].toUpperCase() }}
                </h2></span
              >
            </v-avatar>
          </router-link>
        </v-col>
        <v-col cols="6">
            <v-avatar @click="userLogout" style="background-color: #54436b">
              <v-icon>mdi-logout</v-icon>
            </v-avatar>
          </v-col>
      </v-row>
    </div>
    <!-- </template> -->

    <!-- </v-menu> -->
  </v-app-bar>
</template>

<script>
import { logout } from "../store/index";
export default {
  data() {
    return {
      km:0,
      searchP: '',
      user: JSON.parse(localStorage.getItem('user'))
    };
  },
  created() {
    console.log(JSON.parse(this.user));
  },
  methods: {
    userLogout() {
      logout();
    },
  },
  computed: {},
};
</script>

<style>
.toolbar-menu-item {
  padding-left: 20px;
}
</style>