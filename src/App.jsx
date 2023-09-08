import React from 'react'
import { Auth } from './Layouts/Auth/Auth'
import { Login } from './Layouts/Auth/login/Login'
import { Typography } from 'antd'
import Title from 'antd/es/skeleton/Title'
import Paragraph from 'antd/es/skeleton/Paragraph'
import { Signup } from './Layouts/Auth/Signup/Signup'

export const App = () => {
  return (
    <>
        <h1>Login</h1>
        <Login/>

        <h1>Signup</h1>
        <Signup/>
    
    </>
  )
}
