import React from 'react'
import { Card } from 'react-bootstrap'

const CardExampleCardProps = (props) => (
    <Card style={{  padding:'0 5rem', backgroundColor:'#fff3e2' }}>
    <Card.Img variant="top" src={props.image} style={{
        height:'100px',
        width:'100px',
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
    </Card.Body>
</Card>
)

export default CardExampleCardProps;