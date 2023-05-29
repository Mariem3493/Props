import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Profile = (propss) => {
    const link=propss.link;
    const star=propss.star;
    const desc=propss.desc;
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={link} />
      <Card.Body>
        <Card.Title>{star}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile
