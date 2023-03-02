import { data } from "../Config";
const CardDetail = ({ name, image}) => {
  return (
    <>
        <div className="card-detail1">
          <img src={image} />
          <h5>{name}</h5>
        </div>
    </>
  );
};
const CardDetail1=({image1,content,cost,lefttime,timing,bind,shipping })=>{
    return(
<div className="card-detail2">
          <img src={image1} />
          <h3>{content}</h3>
          <h4>{cost}</h4>
          <h5>{lefttime} </h5>
          <h4>{timing} </h4>
          <h5>{bind} </h5>
          <h5>{shipping}</h5>
        </div>
    )
}
const Card = () => {
  return (
    <>
            <h2>Explore Popular Categories</h2>

      <div className="box">
        {data.map((ele) => {
          return <CardDetail {...ele.datacard} key={ele.datacard.id} />;
        })}
      </div>
      <h2>All Categories</h2>

      <div className="box1">
      {data.map((ele) => {
          return <CardDetail1 {...ele.datacard} key={ele.datacard.id} />;
        })}
      </div>
    
    </>
  );
};
export default Card;
