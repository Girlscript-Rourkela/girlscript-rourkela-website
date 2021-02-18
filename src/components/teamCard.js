import React from 'react'
import { Card } from 'react-bootstrap'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

const CardExampleCardProps = (props) => (
    <Card style={{  padding:'0 5rem', backgroundColor:'#fff3e2' }}>
    <Card.Img variant="top" src={props.image} style={{
        height:'200px',
        width:'200px',
        margin:'0 30px',
        borderRadius:'50%',
        }} />
    <Card.Body>
    <Card.Title  style={{
        textAlign:'center'
    }}>
        {props.title}
        </Card.Title>
    <Card.Text style={{
        textAlign:'center'
    }}>
        {props.name}
    </Card.Text>
    <Card.Footer style={{
        marginTop:'1rem',
        marginLeft:'4rem'
    }}>
    <GitHubIcon  style={{margin:'0 .7rem'}} /> 
    <InstagramIcon style={{margin:'0 .7rem'}} /> 
    <LinkedInIcon style={{margin:'0 .7rem'}} /> 
    </Card.Footer>
    </Card.Body>
</Card>
)

export default CardExampleCardProps;