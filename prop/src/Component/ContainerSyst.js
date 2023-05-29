import React from 'react'
import Profile from './Profile';
import Apis from '../Data/Api';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const ContainerSyst = () => {
  return (
    <div>
      <Container>
      <Row>
        {Apis.map(({link,star,desc})=>
        <Col>
        <Profile
        link={link}
        star={star}
        desc={desc}
        />
        </Col>)}
      </Row>
    </Container>
    </div>
  )
}

export default ContainerSyst
