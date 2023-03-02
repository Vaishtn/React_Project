import Editoralcard from "/src/Editorialcard"
import { info } from "../Config";


const Editoral2=()=>{
return(<>
<div className="editoral-list2">
<div className="editoral">
    <h2>Featured Services</h2>
    <p >See what's popular across thousands of Products</p>
    
</div>
<div className="info-list">

{info.map(ele=>{
    return <Editoralcard {...ele.data} key={ele.data.id}/>
})}
</div>
</div>
</>)
}
export default Editoral2