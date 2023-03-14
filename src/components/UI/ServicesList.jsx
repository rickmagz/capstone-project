import React from 'react';
import { Col } from 'reactstrap';
import '../../styles/services-list.css';
import servicesData from '../../assets/data/service-data';
const ServicesList = () => {
  return (
    <> 
    {
        servicesData.map(item=>(
            <ServiceItem item={item} key={item.id} />
        ))
    }
    </>
  );
};
const ServiceItem = ({item}) => (
    <Col lg='4' md='4' sm='6' className='mb-3'>
        <div className="service__item mb-3 d-inline-block">
            <span className='mb-3'>
                <i class={item.icon}/>
            </span>

            <h6>{item.title}</h6>
            <p className="section__desc">{item.description}</p>
        </div>
    </Col>
);

export default ServicesList;

