import React from 'react';
import ContactLeft from './../Components/ContactLeft/ContactLeft';
import ContactRight from './../Components/ContactRight/ContactRight';
import { Row, Col } from 'antd';
import './Contact.css'


function Contact() {
  return (
    <div>
      <Row className='contactWeb'>
        <Col span={12} className="ContactLeftClass">
          <ContactLeft />
        </Col>
        <Col span={12} className="ContactRightClass">
          <ContactRight />
        </Col>
      </Row>
      <div className='contactMobile'>
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  )
}
export default Contact;


