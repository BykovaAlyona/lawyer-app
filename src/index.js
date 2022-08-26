import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './styles/index.scss';
import App from './App';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

if (rootElement.hasChildNodes()) {
  root.hydrate(
    <React.StrictMode> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);*/

