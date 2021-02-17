import React from 'react';
import TeamCard from '../components/teamCard';
import Photo1 from '../assets/1.jpg'
import Photo2 from  '../assets/123 (2).jpg'
import Photo3 from '../assets/WhatsApp Image 2021-02-16 at 4.32.51 PM.jpeg'
import Photo4 from '../assets/1252.jpg'
import Photo5 from '../assets/6.jpg'
import Photo6 from '../assets/753.jpg'
import Photo7 from '../assets/255.jpg'
import Photo8 from '../assets/56.jpg'
import Photo9 from '../assets/25.jpg'
import Photo10 from '../assets/123.jpg'
import Photo11 from '../assets/Raghav.jpg'
import Photo12 from '../assets/2.jpg'

const About = () => {
    return (
    <div
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //height: '90vh',
        backgroundColor: '#fff3e2',
        }}
    >   
        <div> 
            <div style={{
                textAlign:'center',
                fontSize:'30px'
        }} >
                <h1>Team</h1>
            </div>
            <div style={{
                margin:'40px'
            }} >
                <h1 style={{textAlign:'center',margin:'40px'}}>LEAD</h1>
                <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                }}>
                <TeamCard name="Aniket Pal" title="Chapter Lead" image={Photo8} />
                </div>
            </div>

            <div style={{
                margin:'40px'
            }} >
                <h1 style={{textAlign:'center',margin:'40px'}}>Technical Team</h1>
                <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center'
                }}>
                <TeamCard name="Hemant Bajaj" title="Technical Team" image={Photo1} />
                <TeamCard name="Sneha Mallik" title="Technical Team" image={Photo10} />
                </div>
            </div>
            
            <div style={{
                margin:'40px'
            }} >
                <h1 style={{textAlign:'center',margin:'40px'}} >Management Team</h1>
                <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center'
                }}>
                <TeamCard name="Rohan" title="Management  team" image={Photo4} />
                <TeamCard name="Sayantan" title="Management  team" image={Photo9}/>
                <TeamCard name="Parwin" title="Management  team" image={Photo2} />
                </div>
            </div>
            
            <div style={{
                margin:'40px'
            }} >
                <h1 style={{textAlign:'center',margin:'40px'}} >Design Team</h1>
                <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center'
                }}>
                <TeamCard name="Raghav Bajaj" title="Design Team" image={Photo11} />
                <TeamCard name="Shantanu" title="Design Team" image={Photo3} />
                <TeamCard name="Sai Ashish" title="Design Team" image={Photo12} />
                <TeamCard name="jon_snow" title="Design Team" image={Photo5} />
                </div>
            </div>

            <div style={{
                margin:'40px'
            }} >
                <h1 style={{textAlign:'center',margin:'40px'}} >Content Team</h1>
                <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center'
                }}>
                <TeamCard name="Sumana Basu" title="Content Team" image={Photo7} />
                <TeamCard name="sat_panda" title="Content Team" image={Photo6} />
                </div>
            </div>


        </div>
        </div>
    
    );
};

export default About;
