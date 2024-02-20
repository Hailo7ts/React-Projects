export default function Card({maps, location, destination, coverImg, date, description}){
   
    return(
        <section className="card-container">
            <img className = "coverImg" src={`../img${coverImg}`} alt="destination"/>
            <div className="card">
                <span className="location-name"> <img className="location" 
                src="..\public\img\location-svgrepo-com.svg" 
                alt="location" /> {location} 
                <a className="google-ref" href={maps}>Visit on Google Maps</a> </span>
                <h2 className="card-destination">{destination}</h2>
                <span className="card-date">{date}</span>
                <p>description</p>
            </div>
        </section>
    )
}

