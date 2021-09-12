export default function Card({index,img,heading,desc}) {
    return (
        <div className={`card-${index} card`} >
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <h3 className="heading-dark">{heading}</h3>
            <p className="card-desc">{desc}</p>
        </div>
    )
}
