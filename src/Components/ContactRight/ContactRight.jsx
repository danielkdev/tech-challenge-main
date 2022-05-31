import React, { useState, useEffect }  from 'react';
import './ContactRight.css';
import { Button, Space } from 'antd';
import { Typography } from 'antd';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const url = "https://api.mwi.dev/content/";      

const localUrl = "http://localhost:4000/api/contact"

const { Title } = Typography;
const { TextArea } = Input;


function ContactRight() {

  const [state, setState] = useState({})

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post(`https://api.mwi.dev/contact`, {
      email: state.email,
      first_name: state.first_name,
      last_name: state.last_name,
      text: state.text,
      title: state.title,
    })
    .then(function (response) {
      console.log(response);
    })
    console.log('evt',state)
}
  const handleInputChange = (e) => {
    setState({...state, [e.target.name]: e.target.value })
  }

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
    <div>
      <div className='contactRightMainDiv'>
        <Button type="primary" className='btnClass' onClick={() => navigate("/")}>Home</Button>
      </div>
      <div className='contentDiv'>
      <Title className='headingTwoClass' level={2}>{contactDetails[0] && contactDetails[0].page && contactDetails[0].page.name}</Title>
      
      <Space size={50} className='inputFieldsClass' direction="horizaontal">
        <Input 
          size="large" 
          placeholder="First Name" 
          type="text"
          value={state.first_name}
          name='first_name'
          onChange={handleInputChange}/>

        <Input 
          size="large" 
          placeholder="Last Name" 
          type="text"
          name='last_name'
          value={state.last_name}
          onChange={handleInputChange}/>
      </Space>

      <Space size={50} className='inputFieldsClass' direction="horizaontal">
        <Input 
          size="large" 
          placeholder="Title"
          type="text"
          name='title'
          value={state.title}
          onChange={handleInputChange} 
        />
        <Input 
         size="large" 
         placeholder="Email"
         type="email"
         name='email'
         value={state.email}
         onChange={handleInputChange}
          />
      </Space>
      
      <TextArea  
        className='textAreaClass' 
        rows={4} placeholder="Message"
        type="text"
        name='text'
        value={state.message}
        onChange={handleInputChange}  
        />
      <div className='submitBtnDiv'>
        <Button type="primary" className='btnClass2' onClick={handleSubmit} >Submit</Button>
      </div>
      
      </div>
    </div>

  )
}
export default ContactRight;


// style={{ background: "red", borderColor: "yellow" }} 