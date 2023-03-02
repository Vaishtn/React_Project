import Editoralcard from "/src/Editorialcard"
import { info } from "../Config";
import {Link} from "react-router-dom"



const Editoral1=()=>{
return(<>
<div className="editoral-list1">
<div className="editoral">
    <h2>Featured products</h2>
    <p >See what's popular across thousands of Products</p>
    <span className="redirect">
    <Link to="/card">view all</Link>
    </span>
</div>
<div className="info-list">

{info.map(ele=>{
    return <Editoralcard {...ele.data} key={ele.data.id}/>
})}
</div>
</div>
</>)
}
export default Editoral1