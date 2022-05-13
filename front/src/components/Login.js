import { Form,Button,Input,Row,Col } from "antd"
import "./../styles/Login.css"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import LoginNotOk from "./modals/LoginNotOk"
import LoginOk from "./modals/LoginOk"

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
    //mettre le code pour le back
    setShowNotOk(true)
  }

  return (
    <div class="espace">

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
      ><Input />
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
        <Input.Password />
      </Form.Item>

      <Row>
        <Col>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={e=>{onValid(e)}}>
            Submit
          </Button>
        </Form.Item>
        </Col>
        <Col>
      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        If you don't have a account? <Link to="/register">Register</Link>
      </Form.Item>
        </Col>
      </Row>
      
    </Form>

    </div>
  )
}