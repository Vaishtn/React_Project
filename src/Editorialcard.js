import { config } from "../Config"
const Editoralcard=({image,content,cost,lefttime,timing,bind,shipping})=>{
    return(
      <div className="card-info">
        {/* <img src={config + cloudinaryImageId}/> */}
        <img src={image}/>
        <h3>{content}</h3>
        <h4>{cost}</h4>
        <h5>{lefttime} min</h5>
        <h4>{timing} </h4>
        <h5>{bind} </h5>
        <h5>{shipping}</h5>

      </div>
    )
  }

  export default Editoralcard
  