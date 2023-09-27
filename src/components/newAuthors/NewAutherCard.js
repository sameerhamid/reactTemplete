import React from 'react'
import './NewAutherCard.css'
const NewAutherCard = ({ author }) => {
    return (
        <div className='auther_card'>
            <div className="auth_card_img">
                <img src={author.cardImgUrl} alt="" />
            </div>
            <div className="card_profile">
                <img src={author.authImgUrl} alt="" />
            </div>
            <div className="auther_name">
                {author.name}
            </div>
            <div className="card_footer">
                @{author.authRole}
            </div>
        </div>
    )
}

export default NewAutherCard
