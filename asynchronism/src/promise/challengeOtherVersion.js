//node's native HTTPS module, so no package installation is required with npm, everything works natively

const https = require("https");
const API_BASE = "https://rickandmortyapi.com/api/";

const APIRequest = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      res.setEncoding("utf8");
      if (res.statusCode === 200) {
        let body = "";
        res.on("data", (data) => {
          body += data;
        });
        res.on("end", () => {
          resolve(JSON.parse(body));
        });
      } else
        reject(new Error(`REQUEST ERROR ON ${url}. Status ${res.statusCode}`));
    });
  });
};

APIRequest(API_BASE + "character/")
  .then((response) => {
    console.log(response.info.count); //671
    return APIRequest(API_BASE + "character/" + response.results[0].id);
  })
  .then((response) => {
    console.log(response.name); //Rick Sanchez
    return APIRequest(response.origin.url);
  })
  .then((response) => {
    console.log(response.dimension); //Dimension C-137
  })
  .catch((error) => console.error(error));
