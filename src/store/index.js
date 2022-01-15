import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

const baseurl = "http://localhost:4000/api/v1";

export async function getAllAreas() {
  const response = await fetch(`${baseurl}/areas`);
  console.log(response);
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
  const response = await fetch(
    `http://localhost:4000/api/v1/areas/search?${baseSearch}`
  );
  console.log(response);

  return await response.json();
}
export async function getRegions() {
  const response = await fetch("http://localhost:4000/api/v1/areas/regional");
  console.log(response);
  return await response.json();
}

export async function logout() {
  localStorage.removeItem("user");
}

export async function createUser(data) {
  console.log("=== creating user ===");
  console.log(data);
  const response = fetch(`${baseurl}/auth/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log(res);
    if (res.status == 200) {
      let info = {
        email: data.email,
        password: data.password,
      };
      userlogin(info);
    } else {
      console.log(response);
    }
  });
}

export async function userlogin(data) {
  console.log("=== creating user ===");
  console.log(data);
  const response = await fetch(`${baseurl}/auth/users/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  let de = await response.json();
  console.log(de);
  if (response.status == 200) {
    console.log(data);
    localStorage.setItem("user", `${JSON.stringify(de)}`);
    router.push({ path: "/profile" });
    // return  response.json()
  } else {
    console.log(response);
  }
}

export async function getForestDetail(id) {
  const response = await fetch(`${baseurl}/areas/${id}`);

  if (response.status === 200) {
    return response.json();
  }
  console.log("Error occured while fetching a forest!! --");
}

export async function donateMoney(data) {
  console.log("got here");

  console.log("token ", JSON.parse(localStorage.getItem("user")).token);
  const response = await fetch(`${baseurl}/donation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
    },
    body: JSON.stringify(data),
  });

  if (response.status == 200) {
    return true;
  }

  return false;
}

export async function sendComment(data) {
  console.log("alkjfkdj a");
  const response = await fetch(
    `${baseurl}/areas/${data.forrestId}/discussions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
      body: JSON.stringify(data),
    }
  );
  console.log(response);
  if (response.status == 200) {
    return true;
  }

  return false;
}

export async function fetchDeforestedAreas() {
  console.log("alkjfkdj a");
  const response = await fetch(`${baseurl}/areas/most-deforested`);
  console.log(response);
  if (response.status == 200) {
    return response.json();
  }

  return [];
}
