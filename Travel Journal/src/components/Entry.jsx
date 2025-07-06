
export default function Entry(props){
    return (
        <div className="inner">
                <img src={props.img.src} alt={props.img.alt} />
                <div className="info">
                    <h3>📍{props.country}</h3>
                    <span className="span">View on Google Maps</span>
                    <h2>{props.title}</h2>
                    <p>{props.dates}</p>
                    <p>{props.text}</p>
                </div>
        </div>
    )
}