import { Button, Col, Input, Layout, Row } from 'antd'
import React, { useState } from 'react'
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import { addUser } from '../../../Service/Login';

export const Signup = () => {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    } 

    const handleChangeFisrtName = (event) => {
        setFirstName(event.target.value);
    }

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    }

  return (

    <>

            <Row align={"center"} style={{
                padding : 5,
                background : "#313131",
                borderRadius : 10,

            }} >

                <Col>
                    
                    <Input 
                        onChange={handleChangeFisrtName} 
                        prefix={<UserOutlined/>} 
                        placeholder='First name...'
                        value={firstName}
                    />
                    
                    <Input 
                        onChange={handleChangeLastName} 
                        prefix={<UserOutlined/>} 
                        placeholder='Last name...'
                        value={lastName}
                    />
                    
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

                    <Button onClick={() => {addUser(firstName, lastName, email, password)}}>AddUser</Button>
                </Col>
            </Row>
    
    
    </>


  )
}
