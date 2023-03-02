import { config } from "../Config"
const ResturentCard=({cloudinaryImageId,name,cuisines,lastMileTravelString,image})=>{
    return(
      <div className="card">
        {/* <img src={config + cloudinaryImageId}/> */}
        <img src={image}/>
        <h5>{name}</h5>
        {/* <h4>{cuisines.join(" ,")}</h4>
        <h3>{lastMileTravelString} min</h3> */}
      </div>
    )
  }

  export default ResturentCard
  