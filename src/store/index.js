import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export async function getAllAreas() {

    const response = await fetch('http://10.5.202.109:4000/api/v1/areas');
    console.log(response)
    return await response.json();
    
}