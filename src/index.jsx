import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./style.css";

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