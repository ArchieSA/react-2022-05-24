import React from 'react';
import ReactDOM from 'react-dom/client';
import { Restaurants } from "./components/Restaurants/Restaurants";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div id="reactRoot">
        <Restaurants/>
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