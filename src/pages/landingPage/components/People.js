import  React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia } from '@mui/material';
import rohini from '../../../assets/rohini.png';
import vari from '../../../assets/vari.png';
import aseem from '../../../assets/aseem.png';
import akhil from '../../../assets/akhilprof.png';
import ayushi from '../../../assets/ayushi.png';
import akhilFor from '../../../assets/akhilFor.jpg';
import rohiniFor from '../../../assets/rohiniFor.jpg';
import aseemFor from '../../../assets/aseemFor.jpg';
import variFor from '../../../assets/variFor.jpg';
import ayushiFor from '../../../assets/ayushiFor.jpg';
import bluebg from '../../../assets/peoplebg/bluebg.jpg';
import darkbluebg from '../../../assets/peoplebg/darkbluebg.jpg';
import pinkbg from '../../../assets/peoplebg/pinkbg.jpg';
import orangebg from '../../../assets/peoplebg/orangebg.jpg';
import instagram from '../../../assets/socials/Instagram.png'
import linkedin from '../../../assets/socials/LinkedIn.png'
import twitter from '../../../assets/socials/Twitter.png'





export default function People() {
    const [open, setOpen] = useState(false);
//   onclick card the modal should open for specific card
    const [activeCard, setActiveCard] = useState(0);
    const [people, setPeople] = useState([
        {
            id:1,
            name: 'Akhil Bhalerao',
            role: 'Backend Developer',
            img:akhil,
            imgFor:akhilFor,
            bg:bluebg,
            description:"Hey there! You are looking at Akhil Bhalerao. Akhil is a passionate coder who is currently working as a Backend Developer intern at Disecto. He is the Co-Lead of Google Developer Student Club of his college I²IT Pune. Akhil was the MLH Prep Fellow for the Fall batch where he contributed in quite a few MERN stack projects. In his free time, he keeps up with the current trends of blockchain and cryptocurrency and loves to pursue macro photography.",
            twt: 'https://twitter.com/BhaleraoAkhil',
            lin:'https://www.linkedin.com/in/akhilbhalerao/',

        },
        {
            id:2,
            name:'Aseem Khandekar',
            role: 'Full Stack Developer',
            img:aseem,
            imgFor: aseemFor,
            bg:bluebg,
            description:"Hi, this is Aseem Khandekar, a student at I²IT. He's a full stack developer who wants to build new and original stuff. He's the PR Lead at the Google Student Developers Club, I²IT. Loves to play basketball and exploring the outdoors whenever he can get the chance.",
            twt: 'https://twitter.com/Aseemk_123',
            lin:'https://www.linkedin.com/in/aseem-khandekar-3896981ba/',
        },
        {
            id:3,
            name:'Ayushi Dorle',
            role: 'UI/UX Designer',
            img:ayushi,
            imgFor: ayushiFor,
            bg:bluebg,
            description:"Enter Ayushi, a UI/UX designer who's exploring the depths of frontend development while working with GDSC, I²IT. She creates real life dynamic projects and believes in sharing her knowledge with everyone. She is always seeking to be a part of anything creative and innovative.",
            twt: 'https://twitter.com/',
            lin:'https://www.linkedin.com/in/ayushi-dorle-162894191/',
        },
        {
            id:4,
            name:'Rohini Rao',
            role: 'Full Stack Developer',
            img:rohini,
            imgFor: rohiniFor,
            bg:bluebg,
            description:'Hello this is Rohini Rao. She is currently making dApps as a Flutter Developer intern in DeInfra. She is the current Google student developer club lead as well as the GitHub campus expert of her college I²IT Pune. She is also a professional Bharatanatyam dancer and loves to sketch in her free time.',
            twt: 'https://twitter.com/rooohini_',
            lin:'https://www.linkedin.com/in/rohini-rg/',
        },
        {
            id:5,
            name:'Varshitha',
            role: 'Frontend Developer',
            img:vari,
            imgFor: variFor,
            bg:bluebg,
            description:"Hey, you're looking at Varshitha, a student at IsquareIt, Pune. She's a full stack developer who loves to dabble in different and new exciting technologies. Her insatiable hunger to learn is what got her where she is today. She's also the Frontend Lead of Google Student Developers Club, I²IT Pune.",
            twt: 'https://twitter.com/Varshitha1707',
            lin:'https://www.linkedin.com/in/varshithaa/',
        },
    ]);

    const styles = {
        // position: 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        width: '50%',

        alignContent: 'center',
        justifyContent: 'center',
        display:'block',
        margin: '3rem auto',
        // backgroundImage: people[activeCard].bg,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        borderRadius: '50px',
        pt: 2,
        px: 4,
        pb: 3,
      
        Typography:{
            textAlign: 'end',
        },
      
        Card:{
          //   onhover background image is changed to people.bg
          margin:"10px 10px",
          maxWidth:"350px",
        //   minWidth:"350px",
        //   maxHeight:"350px",
        //   minHeight:"350px",
        //   backgroundImage: `url(${orangebg})`,
        // backgroundImage: People[activeCard].bg,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        //   borderRadius: '10px',
        //   boxShadow: '0px 0px px #000000',
          transition: '0.3s',
          
        '&:active': {
            border:'none',
        },
// onhover 
            // '&:hover': {
            //     boxShadow: '0px 0px 10px #000000',
            //     transform: 'scale(1.1)',
            //     backgroundImage: `url(${darkbluebg})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat',
            // },
        //   &:hover: {
        //       backgroundImage: `url(${people[activeCard].bg})`,
        //       boxShadow: '0px 0px 10px #000000',
        //       transition: '0.3s',
              
        //   },
      },
      
      
      '&:active': {
        border:'none',
    },
      };

    const handleOpen = (index) => {
        setActiveCard(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


  return (
    <div className='People'>
        <div className='People-title'>
            <p>People Behind The Screen</p>
        </div>
        <div  style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-evenly"}}>
        {people.map((person, index) => (
            <Card id="card" style={styles.Card} key={person.id} onClick={() => handleOpen(index)}>
                    <h3>{person.name}</h3>
                    <p style={{marginTop:"-20px"}}>{person.role}</p>
                    <img src={person.img} alt={person.name}  style={{width:"70%", minWidth:"100px"}}/>
            </Card>
        ))}
        </div>
        <Modal open={open} onClose={handleClose}

        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...styles }}>
                <Typography variant="h6" style={styles.Typography}>{people[activeCard].name}</Typography>
                <div style={{display:"flex", alignItems:"center",justifyContent:'space-evenly', flexWrap:"wrap" }}>
                    <div style={{display:"block",alignItems:"center", justifyContent:"center"}}>
                        <div>
                            <img src={people[activeCard].imgFor} alt={people[activeCard].name} style={{maxWidth:'280px', width:"100%" }} />
                        
                        </div>
                         
                    </div>
                    <div  >
                        <div style={{display:"block", margin:"auto", maxWidth:"400px",alignItems:"center"}}>
                            <p >
                                {people[activeCard].description} 
                            </p>
                        </div>
                        <div style={{display:'flex', justifyContent:"left"}}>
                            <div>
                                <a href={people[activeCard].twt}>
                                    <img src={twitter} alt='twitter'/>
                                </a>
                            </div>
                            <div>
                                <a href={people[activeCard].lin}>
                                    <img src={linkedin} alt='linkedin'/>
                                </a>
                            </div>
                        </div> 
                    </div>
                </div>
                
            </Box>
        </Modal>
    </div>
        // <div  style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
        //     {people.map(person => (

        //         <Card style={{width:300, margin:10}}>
        //             <CardContent>
        //                 <img src={person.img} alt="person" style={{width:100, height:100}}/>
        //                 <Typography variant="h5" component="h2">
        //                     {person.name}
        //                 </Typography>
        //                 <Typography variant="body2" component="p">
        //                     {person.id}
        //                 </Typography>
                        
        // <Button variant="contained" color="primary" onClick={handleOpen}>
        //     Open Modal
        // </Button>
        //             </CardContent>
        //         </Card>
        //     ))}
        // </div>
        // // {/* <Modal
        //     aria-labelledby="simple-modal-title"
        //     aria-describedby="simple-modal-description" */}

            
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="parent-modal-title"
    //     aria-describedby="parent-modal-description"
    //   >
    //     <Box sx={{ ...style, width: 400 }}>
    //       <h2 id="parent-modal-title">Text in a modal</h2>
    //       <p id="parent-modal-description">
    //         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //       </p>
    //       {/* <ChildModal /> */}
    //     </Box>
    //   </Modal>
    // </div>
  );
}