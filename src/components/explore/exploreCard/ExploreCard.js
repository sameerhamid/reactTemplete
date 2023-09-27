import './exploreCard.css'

const ExploreCard = ({ card }) => {
    return (
        <div className='explored_card_container'>
            <div className="card_img">
                <img src={card.imgUrl} />
            </div>
            <div className="position_conatiner">
                <div className="inner_position">
                    <div className="card_badge"><span>{card.title}</span></div>
                    <div className="card_heading">{card.heading}</div>
                    <div className="name_date">
                        <div className="name">{card.name} - </div>
                        <div className="date">{card.date}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreCard
