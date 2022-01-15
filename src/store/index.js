import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

const baseurl = "http://localhost:4000/api/v1";

export async function getAllAreas() {

    const response = await fetch(`${baseurl}/areas`);
    console.log(response)
    return await response.json();
    
}

export async function logout() {

    localStorage.removeItem('user')
    
}

export async function createUser(data) {
    console.log("=== creating user ===")
    console.log(data)
    const response = fetch(`${baseurl}/auth/users/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }).then((res) =>{
          console.log(res)
          if(res.status == 200){
            let info = {
                email: data.email,
                password: data.password
            }
            userlogin(info)
          }
          else{
              console.log(response)
          }
        
      })   
}


export async function userlogin(data) {
    console.log("=== creating user ===")
    console.log(data)
    const response = await fetch(`${baseurl}/auth/users/signin`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
        let de = await response.json()
         console.log(de)
          if(response.status == 200){
            console.log(data)
            localStorage.setItem('user',`${JSON.stringify(de)}`)
             router.push({path: "/profile"}) 
            // return  response.json()
          }
          else{
              console.log(response)
          }
}

export async function getForestDetail(id) {
    const response = await fetch(`${baseurl}/areas/${id}`);

    if (response.status === 200) {
        return response.json();
    } 
    console.log("Error occured while fetching a forest!! --")
}

export async function donateMoney(data) {
    console.log("got here");
    const response = await fetch(`http://localhost:4000/api/v1/donation`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearers ' + (localStorage.getItem("token") | "")
        },
        body: JSON.stringify(data)
      })
    
      if (response.status == 200) {
          return true;
      }

      return false;
}