import React from 'react';
import Photo from '../assets/events-photo.png';
import EventCard from '../components/eventCard';

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center',
        height: '100%',
        backgroundColor: '#ffd4a9',
      }}
    > 
    <div>
    <div class="flex-grid-2" style={{
      display: 'flex',
      flexFlow: 'row',
      margin:'50px',
      marginTop:'100px',
      marginLeft:'50px'
    }}>
			<div class="brand-col" style={{
        marginLeft:'20px',
        textAlign:'center'
      }} >
      <EventCard title="Education Outreach Program" stats="5000+ Students Impacted" image="https://www.girlscript.tech/content/images/programs/educationoutreach.jpg" />
			</div>
			<div class="brand-col" style={{
        marginLeft:'20px',
        textAlign:'center'
      }} >
      <EventCard title="GirlScript Summer Of Code" stats="3,500+ Participants" image="https://www.girlscript.tech/Scripts/images/causes/gssoc_logoNew.png" />
			</div>
		</div>
		
		<div class="flex-grid-2" style={{
      display: 'flex',
      flexFlow: 'row',
      margin: '50px',
      marginLeft:'50px'
    }} >
			<div class="brand-col" style={{
        marginLeft:'20px',
        textAlign:'center'
      }} >
      <EventCard title="LetsPy" stats="3,000+ Students Impacted" image="https://www.girlscript.tech/Scripts/images/causes/letspy_logoNew.png" />
			</div>
			<div class="brand-col" style={{
        marginLeft:'20px',
        textAlign:'center'
      }} >
      <EventCard title="GirlScript India Summit" stats="2,500+ Students Impacted" image="https://www.girlscript.tech/Scripts/images/causes/india_summit_logoNew.png" />
			</div>
		</div>
		
		<div class="flex-grid-2" style={{
      display: 'flex',
      flexFlow: 'row',
      margin:'50px',
      marginLeft:'50px'
    }} >
			<div class="brand-col" style={{
        marginLeft:'20px',
        textAlign:'center'
      }} >
      <EventCard title="Uplift" stats="Guide to success " image="https://www.girlscript.tech/content/images/programs/uplift.png" />
			</div>
			<div class="brand-col" style={{
        marginLeft:'20px',
        textAlign:'center'
      }} >
      <EventCard title="GS Cup" stats="Competition for the best" image="https://www.girlscript.tech/content/images/programs/cup.jpg" />
			</div>
		</div>
    </div>

    <img src={Photo} alt="events photo" className="img vert-move" style={{
      marginLeft:'-4%',
      marginTop: '5%',
      height: '60%',
      width: '45%'
    }  
    } />
    </div>
  );
};

export default About;