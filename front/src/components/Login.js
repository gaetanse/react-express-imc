import { Form,Button,Input,Row,Col } from "antd"
import "./../styles/Login.css"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import LoginNotOk from "./modals/LoginNotOk"
import LoginOk from "./modals/LoginOk"

const axios = require('axios');

export default function Login() {

  const onFinish = (values) => {
    console.log('Success:', values);
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  const [name,setName] = useState(undefined)
  const [password,setPassword] = useState(undefined)

  const [showNotOk,setShowNotOk] = useState(false)
  function openShowNotOkClose(){ setShowNotOk(false) }

  const [showOk,setShowOk] = useState(false)
  function openShowOkClose(){ setShowOk(false) }

  function onValid(e){
    e.preventDefault()
    if(name!=undefined&&password!=undefined){
      axios.post('http://localhost:666/getUsers', {
        name: name,
        password: password
      })
      .then(function (response) {
        if(response.data.message === "user found"){
          localStorage.setItem('id', response.data.id)
          localStorage.setItem('name', name)
          setShowOk(true)
        }
        else{
          console.log("user not found")
          setShowNotOk(true)
        }
      })
      .catch(function (error) { console.log(error) });
    }
  }

  return (
    <div class="espace" style={{marginTop:"15%", border: "1px solid black", width: "50%", marginLeft: "25%"}}>

    <LoginNotOk show={openShowNotOkClose} var={showNotOk}/>
    <LoginOk show={openShowOkClose} var={showOk}/>

    <h1>LOGIN</h1>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{required: true,message: 'Please input your name!',},]}
      ><Input value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Item>

        <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
        >
          <Button type="primary" htmlType="submit" onClick={e=>{onValid(e)}}>
            Submit
          </Button>
        </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        If you don't have a account? <Link to="/register">Register</Link>
      </Form.Item>

      
    </Form>

    </div>
  )
}