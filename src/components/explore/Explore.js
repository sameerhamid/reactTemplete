import './explore.css'
import ExploreCard from './exploreCard/ExploreCard'
const Explore = () => {
    const cards = [
        {
            imgUrl: 'https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Industrial',
            heading: 'People who inspired',
            name: 'Fones Mini',
            date: 'May 20,2021'
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1588729827527-cbe98472aa8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1454&q=80',
            title: 'Electronics',
            heading: 'How architicts visualize',
            name: 'Pillnaf vern',
            date: 'May 20,2021'
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1606302492686-8604dab3f11e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80',
            title: 'Jewelry',
            heading: 'Take a 3d tour',
            name: 'Brilei Annie',
            date: 'May 20,2021'
        },
        {
            imgUrl: 'https://images.unsplash.com/photo-1567771736315-133752f63a69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            title: 'Tools',
            heading: 'Mind games:How to play',
            name: 'Falcrio Agneie',
            date: 'May 20,2021'
        }
    ]
    return (
        <div className='explore_container' id='explore'>
            <div className="explore_heading">
                <div className="heading">Explore latest audio articles</div>
                <div className="sec_heading">Click on the icon to enjoy the music or podcast 🎧</div>
            </div>
            <div className="explore_card_container">
                {cards.map((card, id) => <ExploreCard card={card} key={id} />)}
            </div>
        </div>
    )
}

export default Explore
