import { Form,Button,Input,Row,Col } from "antd"
import "./../styles/Login.css"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Login() {

  const onFinish = (values) => {
    console.log('Success:', values);
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  const [name,setName] = useState(undefined)
  const [password,setPassword] = useState(undefined)

  return (
    <div class="espace">

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
          <Button type="primary" htmlType="submit">
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