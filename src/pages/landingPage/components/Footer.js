import React from 'react'
import logo from '../../../assets/logo.svg'
import twitter from '../../../assets/socials/Twitter.png'
import linkedin from '../../../assets/socials/LinkedIn.png'
import instagram from '../../../assets/socials/Instagram.png'
import dribble from '../../../assets/socials/Dribble.png'
import person from '../../../assets/smolperson.png'
import doggie from '../../../assets/doggie.png'

function Footer() {
    return (
        <>
            <div className='Quote'>
                <div className='Quote-doggie'>
                    <img src={doggie} alt=""/>
                </div>
                <div className='Quote-person'>
                    <img src={person} alt=""/>
                </div>

                <p>Code it till you make it</p>
                <button className='hero-button'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSel5pw_s5oZW41AnpRUFcIJEgaq7QjJTjDOELOkGg7PxOVBeA/viewform?usp=sf_link">
                        Join Us
                    </a>
                </button>
            </div>
            <div className='Footer'>
                <div className='Footer-left'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='Footer-middle'>
                    <p>With ❤️ by the Hashers</p>

                </div>
                <div className='Footer-right'>
                    <div>
                        <a href='https://www.instagram.com/i2itacm/'>
                            <img src={instagram} alt='instagram'/>
                        </a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/company/i%C2%B2it-acm-student-chapter/'>
                            <img src={linkedin} alt='linkedin'/>
                        </a>
                    </div>
                    <div>
                        <a href='http://i2it.acm.org'>
                            <img src={dribble} alt='instagram'/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
