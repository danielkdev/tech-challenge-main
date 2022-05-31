import React from 'react';
import { Row, Col } from 'antd';
import logo from './../../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './Header.css'    

function Header() {

    const navigate = useNavigate()

    return (
        <div className='bodyDiv'>
            <Row>
                <Col span={12}>
                    <div className='contactLeftMainDiv2'>
                        <img src={logo} alt="Logo" className='imageClass' />
                    </div>
                </Col>
                <Col span={12}>
                    <div className='contactRightMainDiv2'>
                        <Button type="primary" className='btnClass' onClick={() => navigate("/contact")}>Contact</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Header;


