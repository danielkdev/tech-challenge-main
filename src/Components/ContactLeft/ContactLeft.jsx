import React, { useState, useEffect } from 'react';
import './ContactLeft.css';
import logo from './../../assets/Logo.png';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const url = "https://api.mwi.dev/content/";

const { Title } = Typography;

function ContactLeft() {
  const navigate = useNavigate()

  const [contactDetails, contactDetailsState] = useState([])

  const getDataContactLeft = () => {
    axios.get(`${url}contact`)
      .then(function (response) {
        contactDetailsState(response.data.data)
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {
    getDataContactLeft();
    console.log('contactDetails', contactDetails)
},[])

  return (
    <div className='contactLeftMainDiv'>
      <img src={logo} alt="Logo" className='imageClass1' />
      <Row className="headerClassRow">
        <Col span={12} className='homeBtnClass' style={{ display: 'inline-block' }}>
          <div className='contactLeftMainDiv2'>
            <img src={logo} alt="Logo" className='imageClass' />
          </div>
        </Col>
        <Col span={12} style={{ display: 'inline-block' }}>
          <div className='contactRightMainDiv2'>
            <Button type="primary" className='btnClass' onClick={() => navigate("/")}>Home</Button>
          </div>
        </Col>
      </Row>
      <div className='textItemsClass'>
        <Title className='headingClass'>{contactDetails[0] && contactDetails[0].title}</Title>
        <div className='underlineClass'></div>
        <Title className='textClass' level={5}>{contactDetails[0] && contactDetails[0].content}</Title>
      </div>
    </div>
  )
}
export default ContactLeft;


