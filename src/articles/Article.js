import React from 'react'
import './article.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { RiMessage2Line } from 'react-icons/ri'
import { BsSave } from 'react-icons/bs'
const Article = () => {

    const cardDetails = [
        {
            heading: '360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean',
            imgUrl: '/assets/images/artProfile1.jpg',
            name: 'Pillenter',
            date: 'May 20 ,20221',
            secImgUrl: '/assets/images/artImg2.jpg'
        },
        {
            heading: '360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean',
            imgUrl: '/assets/images/profile.jpg',
            name: 'Pillenter',
            date: 'May 20 ,20221',
            secImgUrl: '/assets/images/artImg3.jpg'
        },
        {
            heading: '360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean',
            imgUrl: '/assets/images/profile2.jpg',
            name: 'Pillenter',
            date: 'May 20 ,20221',
            secImgUrl: '/assets/images/artImg1.jpg'
        }
    ];

    const RightArticleCard = ({ card, sectionTitle }) => {
        return (
            <div className="card" id='article'>
                <div className="left_card">
                    <div className="badge"><span>{sectionTitle}</span></div>
                    <div className="card_heading">{card.heading}</div>
                    <div className="card_profile_name_date">
                        <div className="profile">
                            <img src={card.imgUrl} />
                        </div>
                        <div className="card_name_date">
                            <div className="name">{card.name}</div>
                            <div className="date">{card.date}</div>
                        </div>
                    </div>
                    <div className="card_like_msg_save">
                        <div className="like_msg">
                            <div className="like"><AiOutlineHeart /><span>234</span></div>
                            <div className="msg"><RiMessage2Line /><span>275</span></div>
                        </div>
                        <div className="save"><BsSave /></div>
                    </div>
                </div>
                <div className="right_card">
                    <div className="right_card_img">
                        <img src={card.secImgUrl} />
                    </div>
                </div>
            </div>
        )
    }

    const LeftArticleCard = () => {
        return <>
            <div className="article_img">
                <img src="/assets/images/articleImg.jpg" />
            </div>
            <div className="article_details">
                <div className="author_cont">
                    <div className="auth_img">
                        <img src="/assets/images/profile.jpg" />
                    </div>
                    <div className="name_date">
                        <div className="name">Pillifant</div>
                        <div className="date">May 20, 2021</div>
                    </div>
                </div>

                <div className="article_title">
                    Microsoft announces a five-year commitment to create bigger opportunities for people with disabilites
                </div>
                <div className="article_desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a nam dolor quos voluptas quaerat eius omnis sint consectetur sunt!
                </div>
                <div className="article_like_msg_save">
                    <div className="like_msg">
                        <div className="like"><AiOutlineHeart /><span>233</span></div>
                        <div className="msg"><RiMessage2Line /><span>123</span></div>
                    </div>
                    <div className="save"><BsSave /></div>
                </div>
            </div>
        </>
    }
    return (
        <div className='articles_container'>
            <div className="article_heading">
                <div className="heading">Latest Articles 🎈</div>
                <div className="description">Discover the most outstanding articles in all topics of life.</div>
            </div>

            <div className="tabs">
                <div className="tab">All Items</div>
                <div className="tab">Garden</div>
                <div className="tab">Fitness</div>
                <div className="tab">Design</div>
            </div>

            <div className="article_wrapper">
                <div className="left">
                    <LeftArticleCard />
                </div>
                <div className="right">
                    {cardDetails.map((card, id) => <RightArticleCard card={card} sectionTitle={"Electorincs"} key={id} />)}
                </div>
            </div>
        </div>
    )
}


export default Article
