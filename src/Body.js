import ResturentCard from "./ResturentCard";
import { ResturentList } from "../Config";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const fetchData=(searchInput,restroList)=>{
return restroList.filter(ele=>ele.data.name.includes(searchInput))
}
const Body = () => {
    const [restroList,setRestroList]=useState(ResturentList)
    const [searchInput,setSearchInput]=useState("")
useEffect(()=>{
getData()
},[])
async function getData(){
  let res=await fetch(restroList)
  let json=await res.json();
  setRestroList(json?.data)
}
  return restroList.length ===0 ?(<Shimmer/>): (
    <>
    <div className="search">
    <input type="text" placeholder="search" className="search-input" value={searchInput} onChange={(e)=>{
        setSearchInput(e.target.value)
    }}/>
    <button onClick={()=>{
        const data=fetchData(searchInput,restroList)
        setRestroList(data)
    }
        }>Search</button>
    </div>
    <h2 className="info-heading">Explore Popular Categories</h2>

    <div className="resturant-list">
      {restroList.map((restro) => {
        return <ResturentCard {...restro.data} key={restro.data.id} />;
      })}
    </div>
    </>
  );
};

export default Body;
