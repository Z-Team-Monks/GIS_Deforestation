<template>
  <div>
    <v-img :src="imageSet[index].image"
      ><h1
        class="text-h4"
        style="color: white !important; position: absolute; bottom: 50%"
        v-text="imageSet[index].title"
      ></h1
    ></v-img>
    <v-slide-group>
      <v-slide-item v-for="(n, i) in imageSet" :key="n.id">
        <div
          :style="
            index == i
              ? 'border: 2px solid green;margin: 0.5%'
              : 'padding: 0.5%'
          "
          class="ma-1"
          @click="toggle(i)"
        >
          <v-card :elevation="2" :width="250" :height="250 ? 250 - 50 : ''">
            <v-img
              :src="n.image"
              class="white--text"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              :width="250"
              :height="250 ? 250 - 50 : ''"
            >
              <v-card-title
                class="text-h4"
                style="
                  color: white !important;
                  margin: 110% 0px 0px -100% !important;
                "
                v-text="n.title.length > 21 ? n.title.slice(0, 21) : n.title"
              ></v-card-title>
            </v-img>
          </v-card>
          <!-- <v-img height="300px" width="300px" :src="n.image">{{n.title}}</v-img> -->
        </div>
      </v-slide-item>
    </v-slide-group>
    <v-container fluid>
      <h1>Recent Posts</h1>
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" tile> Donate </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <v-container>
      <h1>Contact Us</h1>
      <v-row>
        <v-col lg="6" md="6" sm="12">
          <v-flex>
            <v-text-field
              type="text"
              label="Full Name"
              autocomplete="off"
              outlined
              dense
              color="#4DBA87"
            ></v-text-field>
          </v-flex>
        </v-col>
        <v-col lg="6" md="6" sm="12">
          <v-flex>
            <v-text-field
              type="email"
              label="Email"
              autocomplete="off"
              outlined
              dense
              color="#4DBA87"
            ></v-text-field>
          </v-flex>
        </v-col>
        <v-col cols="12">
          <v-flex>
            <v-textarea
              type="text"
              label="Write Message "
              ref="password"
              autocomplete="off"
              outlined
              dense
              color="#4DBA87"
            ></v-textarea>
          </v-flex>
        </v-col>
        <v-row justify="end">
          <v-col>
            <v-btn class="ma-2" outlined color="green"> Submit </v-btn>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Landing",
  data() {
    return {
      index: 0,
      imageSet: [
        {
          image:
            "https://media.istockphoto.com/photos/fresh-green-soy-plants-on-the-field-in-spring-rows-of-young-soybean-picture-id1303980089",
          title: "Rash Dashion1",
        },
        {
          image:
            "https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Rash Dashion2",
        },
        {
          image:
            "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
          title: "Rash Dashion3",
        },
        {
          image:
            "https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Rash Dashion4",
        },
        {
          image:
            "https://media.istockphoto.com/photos/fresh-green-soy-plants-on-the-field-in-spring-rows-of-young-soybean-picture-id1303980089",
          title: "Rash Dashion5",
        },
        {
          image:
            "https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Rash Dashion6",
        },
        {
          image:
            "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
          title: "Rash Dashion7",
        },
        {
          image:
            "https://images.unsplash.com/photo-1591213595166-82c13a93b1c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          title: "Rash Dashion8",
        },
      ],
    };
  },
  methods: {
    toggle(n) {
      this.index = n;
      console.log(this.imageSet[this.index].title);
    },
  },
};
</script>

<style scoped>
</style>