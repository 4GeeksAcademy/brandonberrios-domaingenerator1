/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let articles = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let tlds = [".com", ".net", ".org"];

  let domainNames = [];

  for (let articles of articles) {
    for (let adj of adj) {
      for (let noun of noun) {
        for (let tlds of tlds) {
          console.log(`${articles}${adj}${noun}${tlds}`);
        }
      }
    }
  }

  document.body.innerHTML = (
    <ul>
      $
      {domainNames.map(domainNames => (
        <li>${domainNames}</li>
      ))}
    </ul>
  );
};
