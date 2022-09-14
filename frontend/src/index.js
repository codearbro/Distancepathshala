import React from "react";
import ReactDOM from "react-dom";
import { hydrate, render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
/*ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);*/
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<BrowserRouter><App /></BrowserRouter>, rootElement);
} else {
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
