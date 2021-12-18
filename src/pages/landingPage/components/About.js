import React from 'react'
import slay from '../../../assets/slay.png'

function About() {
    return (
        <div id="about" 
        // style={{height:'120vh'}}>
           >
           <div className='about-title'>
                <p>About Hash Club</p>
            </div>
            <div className='about-content'>
                <div className='about-text'>
                <p>
                Are you finding DSA too confusing😕, boring 😵, or just difficult to get into😖?  
                If yes, let me introduce you to <h3> The Hash Club!🎉 </h3>The Hash Club is a special interest group initiated 
                under ACM Student Chapter I²IT lead by a group of enthusiastic and motivated coders with an aim to bring 
                fun in learning DSA.🙌🏻 
                <br/>
                The people part of this special interest group are (dearly) nicknamed as <strong style={{color:"#DD6B6A"}}>the Hashers</strong>. 
                The Hash Club is a community-driven experience and anyone who wants to learn how to code is welcome! So, pack your laptops💻, 
                wear your glasses🤓, and strap on your seatbelts as we go on this exciting journey of peer-to-peer learning to infinity and beyond!🚀
                </p>
                </div> 
                <div className='about-gif'>
                    <img src={slay} alt="" style={{width:"90%", minWidth:"280px", maxWidth:"600px"}}/>
                </div>
            </div>
        </div>
    )
}

export default About
