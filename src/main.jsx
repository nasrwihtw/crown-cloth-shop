import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Userprovider } from "./components/context/user.context";
import { CategoriesProvider } from "./components/context/categories.context";
import { CartProdvider } from "./components/context/cart.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Userprovider>
        <CategoriesProvider>
          <CartProdvider>
            <App />
          </CartProdvider>
        </CategoriesProvider>
      </Userprovider>
    </BrowserRouter>
  </React.StrictMode>
);
