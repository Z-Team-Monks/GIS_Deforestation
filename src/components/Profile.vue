<template>
  <div>
    <v-container fluid style="margin-top: 10%">
      <v-row>
        <v-col cols="8">
          <h1 style="margin-left: 50%">Welcome Niko</h1>
        </v-col>
        <v-col cols="4">
         <router-link  style="text-decoration: none;" to="/addpost">
          <v-btn
            style="
            
              font-weight: 900;
              background-color: green !important;
              color: white;
            "
            tile
          >
            Add Post
          </v-btn>
         </router-link>
        </v-col>
      </v-row>
      <v-container fluid>
        <h1>My Posts</h1>

        <v-card style="margin-top: 3%" max-width="400">
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
              >Top 10 Australian beaches</v-card-title
            >
          </v-img>

          <v-card-subtitle class="pb-0" style="font-weight: 900">
            Number 10, 2021
          </v-card-subtitle>

          <v-card-text style="font-weight: 900" class="text--primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, at?
            Velit consequatur architecto libero quibusdam est! Earum, quae?
            Aspernatur placeat numquam voluptatibus, eius aliquid hic provident.
            Ipsum provident itaque perspiciatis.
          </v-card-text>

          <v-card-actions>
            <v-row align="center">
              <v-col cols="4"> </v-col>
              <v-col cols="8">
                <router-link to="/detail" style="text-decoration: none">
                  <v-btn
                    style="
                      font-weight: 900;
                      background-color: green !important;
                      color: white;
                    "
                    tile
                  >
                    Donate
                  </v-btn></router-link
                >
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
        <v-divider style="margin-top: 2%"></v-divider>
        <h1>Donations</h1>
        <v-card style="margin-top: 3%" max-width="400">
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
              >Top 10 Australian beaches</v-card-title
            >
          </v-img>

          <v-card-subtitle class="pb-0" style="font-weight: 900">
            Target: Protecting animals <br />
            Paid: Yes</v-card-subtitle
          >
          <v-divider></v-divider>
          <v-card-text style="font-weight: 900" class="text--primary">
            Contribution: $12000.00
          </v-card-text>
        </v-card>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>
</style>