import React from 'react';
import TeamCard from '../components/teamCard';

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
                justifyContent:'center'
                }}>
                <TeamCard name="Aniket Pal" title="Chapter Lead" image="https://www.girlscript.tech/Scripts/images/causes/gssoc_logoNew.png" />
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
                <TeamCard name="Hemant Bajaj" title="Technical Lead & Core Team" image="https://www.girlscript.tech/Scripts/images/causes/gssoc_logoNew.png" />
                <TeamCard name="Sneha Mallik" title="Technical Lead" image="https://www.girlscript.tech/Scripts/images/causes/gssoc_logoNew.png" />
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
                <TeamCard name="Rohan" title="Management core team" image="https://www.girlscript.tech/Scripts/images/causes/gssoc_logoNew.png" />
                <TeamCard name="Sayantan" title="Management core team" image="https://www.girlscript.tech/Scripts/images/causes/gssoc_logoNew.png" />
                <TeamCard name="Parwin" title="Management core team" image="https://www.girlscript.tech/Scripts/images/causes/gssoc_logoNew.png" />
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
                <TeamCard name="Raghav Bajaj" title="Technical Lead" image="https://www.girlscript.tech/Scripts/images/causes/gssoc_logoNew.png" />
                <TeamCard name=" Bajaj" title="Technical Lead" image="https://www.girlscript.tech/Scripts/images/causes/gssoc_logoNew.png" />
                <TeamCard name="Hemant Bajaj" title="Technical Lead" image="https://www.girlscript.tech/Scripts/images/causes/gssoc_logoNew.png" />
                <TeamCard name="Hemant Bajaj" title="Technical Lead" image="https://www.girlscript.tech/Scripts/images/causes/gssoc_logoNew.png" />
                </div>
            </div>


        </div>
        </div>
    
    );
};

export default About;
