import './trending.css'
import TrendingCard from './trendingCard/TrendingCard'

const Trending = () => {

    const cards = [
        {
            imgUrl: '/assets/images/booksontable.jpg',
            title: 'Graden',
            quantity: '13',
            bgColor: '#6366f1'
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80',
            title: 'Jewelry',
            quantity: '19',
            bgColor: '#EF4444'
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            title: 'Indusrial',
            quantity: '20',
            bgColor: '#EAB308'
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            title: 'Tools',
            quantity: '100',
            bgColor: '#EC4899'
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1587461158699-029a4f08aab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            title: 'Automative',
            quantity: '44',
            bgColor: '#EC4899'
        },

    ]

    return (
        <div className='trending_container'>
            <div className="trending_heading">
                <div className="heading">Top trending topics</div>
                <div className="discover">Discover 233 topics</div>

            </div>
            <div className="trending_cards">
                {cards.map(card => <TrendingCard card={card} />)}
            </div>
        </div>
    )
}

export default Trending
