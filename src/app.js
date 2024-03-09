/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronouns = ["the", "our", "that", "my"];
  let adjs = ["big", "cool", "pretty", "small", "awesome"];
  let nouns = ["planet", "lion", "jogger", "house"];
  let tlds = [".com", ".net", ".org"];

  let domainName = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainName.push(`${pronoun}${adj}${noun}${tld}`);
        }
      }
    }

    document.getElementById("domainGenerator").onclick = () => {
      document.getElementById("generate").innerHTML = `<h1>${
        domainName[Math.floor(Math.random() * domainName.length)]
      }</h1>`;
    };
  }
};
