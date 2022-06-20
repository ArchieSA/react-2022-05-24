import React from "react";
import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/MainPage";
import "./index.css";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { NotFoundPage } from "./pages/NotFounPage/NotFoundPage";
import RestaurantContainer from "./containers/Restaurant/Restaurant";
import {AllProductPage} from "./pages/AllProduct/AllProductPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />}>
          <Route index element={<span>Select restaurant</span>} />
          <Route path=":id" element={<RestaurantContainer />} />
        </Route>
        <Route path="/basket" element={<BasketPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/products" element={<AllProductPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
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
