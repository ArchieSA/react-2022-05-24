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
import { AllProductsPage } from "./pages/AllProductsPage/AllProductsPage";
import ProductDetailsContainer from "./containers/ProductDetails/ProductDetails";
import { ProductDetailsPage } from "./pages/ProductDetailsPage/ProductDetailsPage";
import { ReviewsContainer } from "./containers/Reviews/Reviews";
import { MenuContainer } from "./containers/Menu/Menu";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />}>
          <Route index element={<span>Select restaurant</span>} />
          <Route path=":id" element={<RestaurantContainer />}>
            <Route path="menu" element={<MenuContainer />} />
            <Route path="reviews" element={<ReviewsContainer />} />
          </Route>
        </Route>
        <Route path="/allProducts" element={<AllProductsPage />} />
        <Route path="/product" element={<ProductDetailsPage />}>
          <Route path=":id" element={<ProductDetailsContainer />} />
        </Route>
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
