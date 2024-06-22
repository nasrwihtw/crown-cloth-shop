import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Userprovider } from "./components/context/user.context";
import { ProductsProvider } from "./components/context/products.context";
import { CartProdvider } from "./components/context/cart.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Userprovider>
        <ProductsProvider>
          <CartProdvider>
            <App />
          </CartProdvider>
        </ProductsProvider>
      </Userprovider>
    </BrowserRouter>
  </React.StrictMode>
);
