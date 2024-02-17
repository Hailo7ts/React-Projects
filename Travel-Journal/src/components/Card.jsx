export default function Card({stats,coverImg,rating,reviewCount,location,
    title,price,openSpots}){
    let badgeText
    if(openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={`../img/${coverImg}`} alt="cover-img" />
            <div className="card-stats">
                <img className="card-star" src=".\img\Star 1.png" alt="star" />
                <span>{stats.rating}</span>
                <span className="grey">({stats.reviewCount})</span>
                <span className="grey">{location}</span>
            </div>
            <h2 className="card-title">{title}</h2>
            <span className="card-price"><span>From {price}</span> / person</span>

        </div>
        
    )
}
