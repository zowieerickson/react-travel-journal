import locationIcon from '../assets/location.svg'
import '../styles/article.css'

function Article(props) {
    console.log(props)

    return (
        <article className="card">
            <div className="img-container">
                <img className="card__img" src={props.item.imageUrl} alt="" />
            </div>
            <div className="card__copy">
                <div className="card__location-info">
                    <img className="location__icon" src={locationIcon} alt="" />
                    <p className="location">{props.item.location}</p>
                    <a className="location-google" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="card__title">{props.item.title}</h2>
                <p className="card__date">{props.item.startDate} - {props.item.startDate}</p>
                <p className="card__description">{props.item.description}</p>
            </div>
        </article>
    )
}

export default Article