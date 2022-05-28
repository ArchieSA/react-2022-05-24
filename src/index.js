import React from 'react';
import ReactDOM from 'react-dom/client';
import { Restaurants } from "./components/Restaurants/Restaurants";
import {restaurants} from "./constants/fixtures";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <div id="reactRoot">
        <Restaurants restaurants={restaurants}/>
    </div>
);


// React.createElement('div', {
//     children: [
//         React.createElement('span', {
//             children: 'Hello!'
//         }),
//         React.createElement('div', {
//             children: [
//                 React.createElement('span', {children: 'World!'}),
//                 React.createElement('span', {children: 'Caramba!'})
//             ]
//         }),
//     ],
// })