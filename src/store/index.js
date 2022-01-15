import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)


export async function getAllAreas() {

    const response = await fetch('http://localhost:4000/api/v1/areas');
    console.log(response)
    return await response.json();
    
}

export async function searchAreas({ lat, lon, nearby, name, region }) {
    if (!lat || !lon) return;
    let baseSearch = `lat=${lat}&lon=${lon}&nearby=${
      nearby ? Number(nearby) : 9000
    }`;
  
    if (name && String(name).length > 0) {
      baseSearch += `&name=${name}`;
    }
    if (region && String(region).length > 0) {
      baseSearch += `&region=${region}`;
    }
    console.log("Search url: ", baseSearch);
    const response = await fetch(`http://localhost:4000/api/v1/areas/search?${baseSearch}`);
    console.log(response);
    return await response.json();
  }
  export async function getRegions() {
    const response = await fetch('http://localhost:4000/api/v1/areas/regional');
    console.log(response);
    return await response.json();
}

export async function logout() {

    localStorage.removeItem('user')
    
}

export async function createUser(data) {
    console.log("=== creating user ===")
    console.log(data)
    const response = fetch(`http://localhost:4000/api/v1/auth/users/signup`, {
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
    const response = await fetch(`http://localhost:4000/api/v1/auth/users/signin`, {
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