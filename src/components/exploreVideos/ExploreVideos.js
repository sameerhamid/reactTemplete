import React from 'react'
import './exploreVideos.css'
import Wrapper from '../Wrapper'
const ExploreVideos = () => {
    const cards = [
        {
            imgUrl: '/assets/images/artImg3.jpg',
            title: 'jewelry',
            profileImg: '/assets/images/profile.jpg',
            profileTitle: 'Take a 3D tour through',
            name: 'Birrell Chariot',
            date: 'May 20, 2021'
        }, {
            imgUrl: '/assets/images/artImg2.jpg',
            title: 'jewelry',
            profileImg: '/assets/images/profile2.jpg',
            profileTitle: 'Take a 3D tour through',
            name: 'Birrell Chariot',
            date: 'May 20, 2021'
        }, {
            imgUrl: '/assets/images/artImg1.jpg',
            title: 'jewelry',
            profileImg: '/assets/images/profile2.jpg',
            profileTitle: 'Take a 3D tour through',
            name: 'Birrell Chariot',
            date: 'May 20, 2021'
        }, {
            imgUrl: '/assets/images/artImg1.jpg',
            title: 'jewelry',
            profileImg: '/assets/images/profile2.jpg',
            profileTitle: 'Take a 3D tour through',
            name: 'Birrell Chariot',
            date: 'May 20, 2021'
        }, {
            imgUrl: '/assets/images/artImg2.jpg',
            title: 'jewelry',
            profileImg: '/assets/images/profile2.jpg',
            profileTitle: 'Take a 3D tour through',
            name: 'Birrell Chariot',
            date: 'May 20, 2021'
        }, {
            imgUrl: '/assets/images/artImg1.jpg',
            title: 'jewelry',
            profileImg: '/assets/images/profile.jpg',
            profileTitle: 'Take a 3D tour through',
            name: 'Birrell Chariot',
            date: 'May 20, 2021'
        },
    ]
    return (
        <div className='mainContiainer'>
            <Wrapper>
                <div className="headings">
                    <div className="headingOne">Explore latest video articles</div>
                    <div className="headingTwo">Hover on the post card and preview video 🥡</div>
                </div>
                <div className="cards">
                    {cards.map(card => <ExploreVideoCard card={card} />)}
                </div>
            </Wrapper>
        </div>
    )
}

const ExploreVideoCard = ({ card }) => {


    return <div className="exploreVidCads">
        <div className="exploreImg">
            <img src={card.imgUrl} alt="" />
        </div>
        <div className="badgeSave">
            {/* <div className="innerBadgeCont"> */}
            <div className="badge"><span>{card.title}</span></div>
            <div className="save">save</div>
            {/* </div> */}
        </div>
        <div className="profile">
            <div className="profileImg">
                <img src={card.profileImg} alt="" />
            </div>
            <div className="profileTitleDate">
                <div className="profileTitle">{card.profileTitle}</div>
                <div className="profileNameDate">
                    <div className="profileName">{card.name}</div>
                    <div className="profileDate">{card.date}</div>
                </div>
            </div>
        </div>
    </div>
}

export default ExploreVideos
