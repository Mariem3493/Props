/*importation de la bibliothèque React*/
import React from 'react';
/*importation de la bibliothèque React Dom*/
import ReactDOM from 'react-dom/client';
/*importation du fichier css du composant index.js*/
import './index.css';
/*importation du composant App*/
import App from './App';
/*importation de la fonction reportWebVitals*/
import reportWebVitals from './reportWebVitals';
/*initialisation de l'application react et render de l'application*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
