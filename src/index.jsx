import React from "react";
import * as ReactDOMClient from "react-dom/client";
import Main from "./Main";

const wrapperElement = ReactDOMClient.createRoot(document.querySelector('.wrapper'));
wrapperElement.render(<Main />);
