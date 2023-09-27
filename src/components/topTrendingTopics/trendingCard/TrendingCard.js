import './trendingCard.css'

const TrendingCard = ({ card }) => {
    return (
        <div className='trending_card_conatainer'>
            <div className="card_img">
                <img src={card.imgUrl} />
            </div>
            <div className="trending_footer">
                <div className="trending_color" style={{ backgroundColor: card.bgColor }}></div>
                <div className="footer_name">
                    <div className="name">{card.title}</div>
                    <div className="count">{card.quantity} Articles</div>
                </div>
                .
            </div>
        </div>
    )
}

export default TrendingCard
