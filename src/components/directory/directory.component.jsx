import DirectoryItem from "../directory-item/directory-item.component"
import './directory.styles.scss'
const Directory = ({categories})  =>{
    return(
        <div className="directory-container">
        {categories.map((itemCategory)=>(
          <DirectoryItem key={itemCategory.id} category={itemCategory} />
        ))}
        
     </div>
    )
}


export default Directory