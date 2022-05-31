import React from 'react';
import ReactDOM from 'react-dom/client';
import { Restaurants } from './components/Restaurants/Restaurants';
import { restaurants } from './constants/fixtures';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Restaurants restaurants={restaurants} />);
