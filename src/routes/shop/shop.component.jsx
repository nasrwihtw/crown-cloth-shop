import { useContext } from "react";
import "./shop.styles.scss";

import { ProductsContext } from "../../components/context/products.context";
import ProudctCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProudctCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
