const ResturantCard =(props)=>{
    const {resturant } = props

  
    return (
        <div className="res-card">
        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resturant.info.cloudinaryImageId} alt="burger"/>
        <div className="res-info">
         </div>
         <h3>{resturant.info.name}</h3>
         <h4>{resturant.info.cuisines.join(",")}</h4>
         <h4>{resturant.info.avgRating} stars</h4>
         <h4>{resturant.info.costForTwo}</h4>
         <h4>{resturant.info.sla.slaString}</h4>
        </div>
    )
}

export default ResturantCard;