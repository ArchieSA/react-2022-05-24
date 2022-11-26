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
import { AllProductPage } from "./pages/AllProduct/AllProductPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import RestaurantMenu from "./containers/RestaurantMenu/RestaurantMenu";
import RestaurantReview from "./containers/RestaurantReview/RestaurantReview";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />}>
          <Route index element={<span>Select restaurant</span>} />
          <Route path=":restaurantId" element={<RestaurantContainer />}>
            <Route path="menu" element={<RestaurantMenu />} />
            <Route path="review" element={<RestaurantReview />} />
          </Route>
        </Route>
        <Route path="/basket" element={<BasketPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/products" element={<AllProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
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
