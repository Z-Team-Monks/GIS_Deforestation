<template>
  <v-app-bar color="white" app style="background-color:#6ab43e;" height="75px" >
      <router-link to="/" style="text-decoration:none"><h2 style="color:white !important">Home</h2></router-link>
    
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
          ><router-link style="text-decoration: none" to="/login"
            ><v-btn text>
              <h5>Login</h5>
            </v-btn></router-link
          >
        </v-col>
        <v-col cols="6"
          ><router-link style="text-decoration: none" to="/register"
            ><v-btn text>
              <h5>Register</h5>
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
      user: JSON.parse(localStorage.getItem("user")),
      profileItems: [
        { name: "Profile", link: "/profile" },
        { name: "Logout", link: "/login" },
      ],
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