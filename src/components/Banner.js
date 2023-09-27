import './banner.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { RiMessage2Line } from 'react-icons/ri'
import { BsSave } from 'react-icons/bs'



const Banner = () => {
    return (
        <div className='main_wrapper'>
            <div className="wrapper_heading">
                <div className="heading">Editor's pick
                </div>
                <div className="desc">Discover the most outstanding articles in all topics of life.</div>
            </div>
            <div className="card_container">
                <div className="cards">
                    <div className="card">
                        <div className="industry"><span>Industrial</span></div>
                        <div className="title">Lenovo’s smarter devices stoke professional passions</div>
                        <div className="profile">
                            <div className="profile_img">
                                <img src="/assets/images/profile.jpg" alt="" />
                            </div>
                            <div className="profile_name_date">
                                <div className="profile_name">Foulcher Nathanil</div>
                                <div className="date">May 20, 2021</div>
                            </div>
                        </div>
                        <div className="like_msg_save">
                            <div className="like_msg">
                                <div className="icon"><AiOutlineHeart /><span> 32</span></div>
                                <div className="icon"><RiMessage2Line /><span> 100</span></div>
                            </div>
                            <div className="icon"><BsSave /></div>
                        </div>
                    </div>
                </div>
                <div className="left_container">
                    <div className="image">
                        <img src="/assets/images/booksontable.jpg" alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Banner
