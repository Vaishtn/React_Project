import Editoralcard from "/src/Editorialcard"
import { info } from "../Config";
import Card from "./Cards";
import {Link} from "react-router-dom"


const Editoral=()=>{
return(<>
<div className="editoral-list">
<div className="editoral">
    <h2>Trending Auctions</h2>
    <p >See what's popular across thousands of Auctions</p>
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
export default Editoral