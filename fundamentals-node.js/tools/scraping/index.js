const puppeteer = require("puppeteer");
const link = "https://es.wikipedia.org/wiki/Node.js";

//self-executing anonymous function IIFE
(async () => {
  console.log("Lanzamos navegador");
  //const browser = await puppeteer.launch();

  //if we want to see it
  const browser = await puppeteer.launch({ headless: false });
  //open page
  const page = await browser.newPage();
  await page.goto(link);
  //execute a script
  let title1 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    console.log(h1.innerHTML); //inspect website, console: Node.js __puppeteer_evaluation_script__:3
    return h1.innerHTML;
  });
  console.log(title1); //now in terminal
  console.log("Cerramos navegador...");
  browser.close();
  console.log("Navegador cerrado");
})();
