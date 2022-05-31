import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import Rabbit from './../../assets/Rabbit.png';
import Shield from './../../assets/Shield.png';
import './HomeContent.css'
import { List } from 'antd';
import { Typography } from 'antd';
import { Button, Modal } from 'antd';
import axios from 'axios';


const url = "https://api.mwi.dev/content/";

const { Title } = Typography;

function HomeContent() {

  const [contactDetails, contactDetailsState] = useState([])

  const getDataContactLeft = () => {
    axios.get(`${url}home`)
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

    const array1 = [
        { title: 'Matt Johnson' },
        { title: 'Matt Johnson' },
        { title: 'Bart Paden' },
        { title: 'Ryan Doss' },
        { title: 'Jared Malcolm' },]

    const array2 = [
        { title: 'Matt Johnson' },
        { title: 'Bart Paden' },
        { title: 'Bart Paden' },
        { title: 'Jordan Heigle' },
        { title: 'Jordan Heigle' },
        { title: 'Tyler Viles' }]

    const mergeArray = () => {
        let newArray = [];
        let secondArray = [...array1, ...array2]
        secondArray.forEach((item) => {
            if (newArray.find((item1) => item1.title == item.title)) {

            } else {
                newArray.push(item)
            }
        })
        return newArray;
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        console.log('mergeArray()', mergeArray())
    },[])

    return (
        <div className='HomeContentClass'>

            <Row className='rowClass'>
                <Col span={7} className='columnDiv'>
                    <div className='boxContent'>
                        <img src={Shield} className="logoImageClass" alt="Logo" style={{ marginBottom: '10px' }} width={80} height={80} />
                        <div style={{ textAlign: 'center' }} ><Title className='headingClassBox' level={2}>{contactDetails[0] && contactDetails[0].title}</Title></div>
                        <Title className='BoxTextClass' level={5}>{contactDetails[0] && contactDetails[0].content}</Title>
                        <Button type="primary" className='btnClass2'>Learn More</Button>
                    </div>
                </Col>
                <Col span={7} className='columnDiv'>
                    <div className='boxContent'>
                        <img src={Rabbit} className="logoImageClass" alt="Logo" style={{ marginBottom: '10px' }} width={100} height={80} />
                        <div style={{ textAlign: 'center' }} ><Title className='headingClassBox' level={2}>{contactDetails[1] && contactDetails[1].title}</Title></div>
                        <Title className='BoxTextClass' level={5}>{contactDetails[1] && contactDetails[1].content}</Title>
                        <Button type="primary" className='btnClass2' >Learn More</Button>
                    </div>
                </Col>
                <Col span={7} className='columnDiv'>
                    <div className='boxContent'>
                        <img src={Shield} className="logoImageClass" alt="Logo" style={{ marginBottom: '10px' }} width={80} height={80} />
                        <div style={{ textAlign: 'center' }} ><Title className='headingClassBox' level={2}>{contactDetails[2] && contactDetails[2].title}</Title></div>
                        <Title className='BoxTextClass' level={5}>{contactDetails[2] && contactDetails[2].content}</Title>
                        <Button type="primary" className='btnClass2' >Learn More</Button>
                    </div>
                </Col>
            </Row>

            <div className='textItemsClass'>
                <Title className='headingClass'>Heading One</Title>
                <div className='underlineClass'></div>
                <Title className='textClass' level={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt <a onClick={showModal} style={{color:'#ebf79d'}}>this link</a> trace dolore magna aliqua.</Title>
                <Title className='textClass' level={5}>Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.</Title>
            </div>

            <Modal title="Result Array" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <List
                    itemLayout="horizontal"
                    dataSource={mergeArray()}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a>{item.title}</a>}
                            />
                        </List.Item>
                    )}
                />
            </Modal>

        </div>
    )
}
export default HomeContent;


