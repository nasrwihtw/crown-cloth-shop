import { useContext } from "react";


import { CategoriesContext } from "../../components/context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {

        // const products = categoriesMap[title];
        const product = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={product}/>
        )
      })};
      
    </>
  );
};

export default CategoriesPreview;
