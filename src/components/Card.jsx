import locationIcon from '../assets/img/location-icon.webp'

function Card(props) {
    
    return(
        <>
        <div className="card bg-white d-flex align-items-center">
            <div className="left-side">
                <img className="location-img" src={props.item.locationImg} />
            </div>
            <div className="right-side">
                <div className="location-map-div d-flex align-items-center">
                    <div className="location-icon">
                        <img className="location-icon-img" src={locationIcon} />
                    </div>
                    <div className="country">
                        <p className="country-name text-darkgray">{props.item.country}</p>
                    </div>
                    <div className="google-maps">
                        <a className="google-maps-link text-lightgray" href={props.item.googleMapsLink}>View on Google Maps</a>
                    </div>
                </div>
                <div className="location-name">
                    <h1 className="text-darkgray">{props.item.location}</h1>
                </div>
                <div className="travel-duration">
                    <p className="travel-duration-dates text-darkgray">{props.item.travelDuration}</p>
                </div>
                <div className="description">
                    <p className="text-darkgray">{props.item.description}</p>
                </div>
            </div>
        </div>
        <div className="divider bg-white">
            <hr/>
        </div>
        </>
    )
}

export default Card