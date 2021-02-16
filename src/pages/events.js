import React from 'react';
import Photo from '../assets/events-photo.png';
import EventCard from '../components/eventCard';
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        backgroundColor: '#ffd4a9',
      }}
    > 
      <div style={{display:'block',paddingTop:5}}>
      <EventCard title="Education Outreach Program" stats="5000+ Students Impacted" image="https://www.girlscript.tech/content/images/programs/educationoutreach.jpg" />
      <EventCard title="GirlScript Summer Of Code" stats="3,500+ Participants" image="https://www.girlscript.tech/Scripts/images/causes/gssoc_logoNew.png" />
      <EventCard title="LetsPy" stats="3,000+ Students Impacted" image="https://www.girlscript.tech/Scripts/images/causes/letspy_logoNew.png" />
      <EventCard title="GirlScript India Summit" stats="2,500+ Students Impacted" image="https://www.girlscript.tech/Scripts/images/causes/india_summit_logoNew.png" />
      <EventCard title="Uplift" stats="Guide to success " image="https://www.girlscript.tech/content/images/programs/uplift.png" />
      <EventCard title="GS Cup" stats="Competition for the best" image="https://www.girlscript.tech/content/images/programs/cup.jpg" />
      </div>

      
      <img src={Photo} alt="events photo" className="img vert-move" />
    </div>
  );
};

export default About;
