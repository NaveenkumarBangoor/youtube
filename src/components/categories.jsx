
import '../styles/categories.css'
const Categories = () => {
    let categories=[
      {link:"all"},
      {link:"Sports"},
      {link:"Comedy"},
      {link:"Fashion"},
      {link:"Vlogs"},
      {link:"Movies"},
      {link:"Travel"},
      {link:"Food"},
      {link:"Bollywood"},
      {link:"kids"},
      {link:"Recently uploaded"}
    ]
    return (  
        <div className="categories">
          <ul>
            {categories.map((data)=>{
        return(
          <li><a href="">{data.link}</a></li>
        );
            })}
          </ul>
        </div>
    );
}
 
export default Categories;