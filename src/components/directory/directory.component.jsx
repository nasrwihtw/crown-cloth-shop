import CategoryItem from "../category-item/category-item.component"
import './directory.styles.scss'
const Directory = ({categories})  =>{
    return(
        <div className="directory-container">
        {categories.map((itemCategory)=>(
          <CategoryItem key={itemCategory.id} category={itemCategory} />
        ))}
        
     </div>
    )
}


export default Directory