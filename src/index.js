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
import { ListOfProductsPage } from "./pages/ListOfProductsPage/ListOfProductsPage";
import RestaurantContainer from "./containers/Restaurant/Restaurant";
import { ProductPage } from "./pages/ProductPage/ProductPage";

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
        <Route path="/products" element={<ListOfProductsPage />} /> 
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="*" element={<NotFoundPage />} />
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
