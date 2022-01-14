<template>
  <v-container>
    <v-container style="margin-top:3.5%">
      <l-map style="height: 450px" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-polygon :lat-lngs="polygon.latlngs" :color="polygon.color"></l-polygon>
      </l-map>
    </v-container>
    <v-row style="margin:3.5%"> 
      <v-col cols="8"> 
        <v-row>
        <v-col cols="10"
          ><h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </h1></v-col
        >
        <v-col cols="2"><h3>Votes: 20</h3></v-col>
        <v-divider></v-divider>
        <v-col cols="12"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          totam ex iusto? Delectus consectetur, soluta placeat minima eligendi
          reiciendis adipisci quisquam porro nesciunt numquam provident culpa
          eos quis. Modi, voluptatum!</v-col
        >
      </v-row>
      <v-col cols="12"> 
        <div class="row1-container">
            <v-card class="box box-down cyan">
              <h2>Status</h2>
              <p>Monitors activity to identify project roadblocks</p>
            </v-card>

            <v-card class="box red">
              <h2>Plantation</h2>
              <p>Scans our talent network to create the optimal team for your project</p>
            </v-card>

            <v-card class="box box-down blue">
              <h2>Calculator</h2>
              <p>Uses data from past projects to provide better delivery estimates</p>
            </v-card>
          </div>
          <div class="row2-container">
            <v-card class="box orange">
              <h2>Wild Life</h2>
              <p>Regularly evaluates our talent to ensure quality</p>
            </v-card>
          </div>
      </v-col>
      </v-col>
      <v-col cols="3">
        <Donate />
      </v-col>
    </v-row>
    <v-container>
      
      <v-divider style="margin-top: 3%"></v-divider>
        
      
      <v-row style="margin-top: 3%">
        <v-col cols="5" align-self="end">
          <v-textarea
            solo
            v-model="com"
            class="ma-0"
            name="input-7-4"
            label="Write a Comment"
          ></v-textarea>
          <v-row align="end" justify="end"> 
            <v-col cols="3"> 
            <v-btn block
              style="color: black !important; font-weight:900"
            >
              Submit
            </v-btn>
          </v-col>
          </v-row>
          
        </v-col>
      </v-row>
      <v-container> 
        <Comment />
      </v-container>
    </v-container>
    
  </v-container>
</template>

<script>
import {LMap, LTileLayer, LPolygon} from 'vue2-leaflet';
import Comment from './Comment';
import Donate from './Donate';

export default {
  components: {
    LMap,
    LTileLayer,
    LPolygon,
    Comment,
    Donate
  },
  data () {
    const getCenter = (latlngs) => {
      let totalLat = 0;
      let totalLong = 0;

      for (let i = 0; i < latlngs.length; i++) {
        totalLat += latlngs[i][0];
        totalLong += latlngs[i][1];
      }

      return [totalLat / latlngs.length, totalLong / latlngs.length]
    }

    let latlngsList = [[47.2263299, -1.6222], [47.21024000000001, -1.6270065], [47.1969447, -1.6136169], 
    [47.18527929999999, -1.6143036], [47.1794457, -1.6098404], [47.1775788, -1.5985107], 
    [47.1676598, -1.5753365], [47.1593731, -1.5521622], [47.1593731, -1.5319061], [47.1722111, -1.5143967], 
    [47.1960115, -1.4841843], [47.2095404, -1.4848709], [47.2291277, -1.4683914], [47.2533687, -1.5116501], 
    [47.2577961, -1.5531921], [47.26828069, -1.5621185], [47.2657179, -1.589241], [47.2589612, -1.6204834],
     [47.237287, -1.6266632], [47.2263299, -1.6222]];

    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 11,
      center: getCenter(latlngsList),
      polygon: {
        latlngs: latlngsList,
        color: 'green'
      },
    };
  },

  
}
// export default {
//   data() {
//     return {
//       com: "",
//       items: [
//       { text: 'Found Raised', },
//       { text: 'Deforestation Rate',},
//       { text: 'Forest Coverage',},
//       { text: 'Region', },
//     ],
//     };
//   },
//   methods: {
//     addCom() {
//       console.log("coment");
//     },
//   },
// };
</script>
<style scoped>
  :root {
      --red: hsl(0, 78%, 62%);
      --cyan: hsl(180, 62%, 55%);
      --orange: hsl(34, 97%, 64%);
      --blue: hsl(212, 86%, 64%);
      --varyDarkBlue: hsl(234, 12%, 34%);
      --grayishBlue: hsl(229, 6%, 66%);
      --veryLightGray: hsl(0, 0%, 98%);
      --weight1: 200;
      --weight2: 400;
      --weight3: 600;
  }

  body {
      font-size: 15px;
      font-family: 'Poppins', sans-serif;
      background-color: var(--veryLightGray);
  }

  .attribution { 
      font-size: 11px; text-align: center; 
  }

  .attribution a { 
      color: hsl(228, 45%, 44%); 
  }

  h1:first-of-type {
      font-weight: var(--weight1);
      color: var(--varyDarkBlue);

  }

  h1:last-of-type {
      color: var(--varyDarkBlue);
  }

  @media (max-width: 400px) {
      h1 {
          font-size: 1.5rem;
      }
  }

  .header {
      text-align: center;
      line-height: 0.8;
      margin-bottom: 50px;
      margin-top: 100px;
  }

  .header p {
      margin: 0 auto;
      line-height: 2;
      color: var(--grayishBlue);
  }


  .box p {
      color: var(--grayishBlue);
  }

  .box {
      border-radius: 5px;
      box-shadow: 0px 30px 40px -20px var(--grayishBlue);
      padding: 30px;
      margin: 20px;  
  }

  img {
      float: right;
  }

  @media (max-width: 450px) {
      .box {
          height: 200px;
      }
  }

  @media (max-width: 950px) and (min-width: 450px) {
      .box {
          text-align: center;
          height: 180px;
      }
  }

  .cyan {
      border-top: 3px solid var(--cyan);
  }

  .red {
      border-top: 3px solid var(--red);
  }

  .blue {
      border-top: 3px solid var(--blue);
  }
  
  .orange {
      border-top: 3px solid var(--orange);
  }

  h2 {
      color: var(--varyDarkBlue);
      font-weight: var(--weight3);
  }


  @media (min-width: 950px) {
      .row1-container {
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .row2-container {
          display: flex;
          justify-content: center;
          align-items: center;
      }
      .box-down {
          position: relative;
          top: 150px;
      }
      .box {
          width: 20%;
      
      }
      .header p {
          width: 30%;
      }
      
  }
</style>