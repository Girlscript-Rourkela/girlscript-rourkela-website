import React from 'react'
import { Card } from 'react-bootstrap'

const CardExampleCardProps = (props) => (
    <Card style={{ width: '18rem', padding:'0 5rem' }}>
    <Card.Img variant="top" src={props.image} style={{
        height:'100px',
        width:'100px',
        borderRadius:'100px',
    }} />
    <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
        {props.name}
    </Card.Text>
    </Card.Body>
</Card>
)

export default CardExampleCardProps;