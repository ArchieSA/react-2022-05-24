import React from 'react';
import ReactDOM from 'react-dom/client';
import {restaurants} from "./constants/fixtures";
import {MainPage} from "./pages/Main/MainPage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <MainPage restaurants={restaurants}/>
);
