import { eventlist } from "../Config"

const EventList=({btn1,btn2,title,datelist,name,company})=>{
    return(
        <div className="event">
        <button>{btn1}</button>
        <button>{btn2}</button>
        <h4>{title}</h4>
        <h4>{datelist}</h4>
        <h4>{name}</h4>
        <h4>{company}</h4>
    </div>
    )
}

// 1280 -350



const Event=()=>{
return(
    <>
    <div className="editoral">
    <h2> Featured Events</h2>
    <p >See what's popular across thousands of Products</p>
    
</div>
    <div className="event-list">
{eventlist.map((ele) => {
          return <EventList {...ele.data} key={ele.data.id} />;
        })}
    </div>
    </>

)
}
export default Event