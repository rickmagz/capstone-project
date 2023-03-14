import React from 'react'
import '../../styles/driver-reg.css'
import { Container, Row, Col } from 'reactstrap'
import driverImg from '../../assets/images/cars/chevy.png'
const DriverReg = () => {
  return (
    <section className="become__driver">
        <Container>
            <Row>
                <Col lg='6' md='6' sm='12'>
                    <img src={driverImg} alt="" className='w-100'/>
                </Col>
                <Col lg='6' md='6' sm='12'>
                    <h2 className="section__title be__driver-title">Do You Want to Earn With Us?<br/>So Don't Be Late</h2>

                    <button className="btn be__driver-btn mt-4">Become Driver</button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default DriverReg