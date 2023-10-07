import './footer.css'
import Wrapper from '../Wrapper'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
const Footer = () => {
    return (
        <div className='footerContainer'>
            <Wrapper>
                <div className="footerLinks">

                    <div className="gettingStarted">
                        <div className="link linkBold">Getting started</div>
                        <div className="link">Installation</div>
                        <div className="link">Release Notes</div>
                        <div className="link">Upgrade Guide</div>
                        <div className="link">Browser Support</div>
                        <div className="link">Editor Support</div>
                    </div>
                    <div className="explore">
                        <div className="link linkBold">Explore</div>
                        <div className="link">Design features</div>
                        <div className="link">Prototyping</div>
                        <div className="link">Design systems</div>
                        <div className="link">Pricing</div>
                        <div className="link">Customers</div>
                    </div>
                    <div className="resourse">
                        <div className="link linkBold">Resources</div>
                        <div className="link">Resources</div>
                        <div className="link">Resources</div>
                        <div className="link">Developers</div>
                        <div className="link">Learn design</div>
                        <div className="link">What's new</div>
                    </div>
                    <div className="community">
                        <div className="link linkBold">Community</div>
                        <div className="link">Discussion</div>
                        <div className="link">Code</div>
                        <div className="link">Community</div>
                        <div className="link">Contributing</div>
                        <div className="link">Concurrent</div>
                    </div>
                    <div className="socialLinks">

                        <div className="facebook">
                            <div className="logo"><BsFacebook /></div>
                            <div className="name">Facebook</div>
                        </div>
                        <div className="facebook">
                            <div className="logo"><BsTwitter /></div>
                            <div className="name">Twitter</div>
                        </div>
                        <div className="facebook">
                            <div className="logo"><BsLinkedin /></div>
                            <div className="name">LinkedIn</div>
                        </div>
                        <div className="facebook">
                            <div className="logo"><BsInstagram /></div>
                            <div className="name">Instagram</div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer
