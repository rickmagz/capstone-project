import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../styles/about-section.css'
import AboutImg from '../../assets/images/cars/nissan2.png';
const AboutSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>

                    <div className="about__section-content">
                        <h4 className="section__subtitle">About Us</h4>
                        <h2 className="section__title">Welcome to CarExpress</h2>
                        <p className="section__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi molestiae dolor labore facere vel, beatae deserunt culpa inventore eveniet cumque quod magnam id numquam minus officiis optio explicabo est voluptates quis? Corrupti perspiciatis dolorem ut repellendus iusto a odio nulla.
                        </p>

                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__desc d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                            </p>
                            <p className="section__desc d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__desc d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                            </p>
                            <p className="section__desc d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={AboutImg} alt="" className='w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutSection