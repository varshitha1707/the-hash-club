import React from 'react'
import rocket from '../../../assets/rocket.png'
import akhil from '../../../assets/akhil.png'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {Link} from 'react-scroll'

function Hero() {
    return (
        <div className='hero' >
            <div className='hero-rocket'>
                <img src={rocket} alt='rocket'/>
            </div>
            <div className='hero-akhil'>
                <img src={akhil} alt='akhil'/>
            </div>
            <p className='hero-title' >
                <span style={{color:"#E8C060"}}>Th</span>
                <span style={{color:"#EA9078"}}>e ha</span>
                <span style={{color:"#66C3AE"}}>sh cl</span>
                <span style={{color:"#DD6B6A"}}>ub.</span>
            </p>
            <p className='hero-subtitle'>Be the object in the hash club class</p>
            
                <button className='hero-button'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSel5pw_s5oZW41AnpRUFcIJEgaq7QjJTjDOELOkGg7PxOVBeA/viewform?usp=sf_link">
                        Join Us
                    </a>
                </button>
            <div className='hero-scroll' >
                <button><Link
                    activeClass="active"
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}>
                        <KeyboardArrowDownRoundedIcon/>
                    </Link></button>
            </div>
        </div>
    )
}

export default Hero
