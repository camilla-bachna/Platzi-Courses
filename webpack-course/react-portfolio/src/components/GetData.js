import React from "react";
//const API = process.env.API;
const API = "https://randomuser.me/api/";

const GetData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  return await fetch(`${apiURl}`)
    .then((response) => response.json())
    .then((data) => {
      return data.results[0];
    });
};
export default GetData;
