import { Button, Col, Divider, Input, Layout, Row, message } from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import { useState } from 'react';
import React from 'react'
import { addUser, getAllUser } from '../../../Service/Login';

export const Login = () => {

    const [list, setList] = useState([{}]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);

    } 

  const designOfBox = {
    background : "black",
  }

  const printAllUsers = () => {
    getAllUser().then(message => {
        
        console.log(message.data); 
        setList(message.data)
    
    });

  }

  return (

    <>

        <Layout style={{}}>

            <Row align={"center"} style={{
                padding : 5,
                background : "#313131",
                borderRadius : 10,

            }} >

                <Col>
                    
                    <Input 
                        onChange={handleChangeEmail} 
                        prefix={<UserOutlined/>} 
                        placeholder='email'
                        value={email}
                    />
                    
                    <Input 
                        type='password'
                        onChange={handleChangePassword} 
                        prefix={<LockOutlined/>} 
                        placeholder='password'
                        value={password}
                    />

                    <Button onClick={() => {
                    
                        printAllUsers()
                        
                    }}>Login</Button>

                    {
                    
                        list.map(item => <> <h4>{item.firstName}</h4> <p>{item.email}</p></>)
                        
                    }

                </Col>
            </Row>
  

        </Layout>

    </>


  )
}
