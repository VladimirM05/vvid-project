import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./style.css";
import up from "./components/app/images/chevron-up-outline.svg"
import profile from "./components/app/images/person-circle-outline.svg"

const upBtn = ReactDOMClient.createRoot(document.querySelector(".up"));

const userElement = document.querySelector('.user__profile');
const profileElement = document.querySelector('.profile');

userElement.addEventListener('click', function () {
  if (profileElement.classList.contains('disp')) {
    profileElement.classList.remove('disp');
  }
  else {
    profileElement.classList.add('disp');
  }
});
