export default function Card({location, destination, coverImg, date, description}){
    /*let badgeText
    if(openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(location === "Online"){
        badgeText = "ONLINE"
    }*/

    return(
        <section className="card-container">
            <img className = "coverImg" src={`../img${coverImg}`} alt="destination"/>
            <div className="card">
                <img className="location" src="..\public\img\location-svgrepo-com.svg" alt="location" />
                <span>{location}</span>
                <a href="#">Visit on Google Maps</a>
                <h2>{destination}</h2>
                <span>{date}</span>
                <p>description</p>
            </div>
        </section>
    )
}

/*<div className="card">
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

        </div>*/
