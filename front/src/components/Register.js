import { Form, Button, Input, Col, Row } from "antd";
import "./../styles/Register.css";
import {Link} from "react-router-dom"

export default function Register() {

  const onFinish = (values) => {
    console.log('Success:', values);
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  return (
    <div>
      
      <h1>REGISTER</h1>


      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: "Please input your age!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Height"
          name="height"
          rules={[
            {
              required: true,
              message: "Please input your height!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Weight"
          name="weight"
          rules={[
            {
              required: true,
              message: "Please input your weight!",
            },
          ]}
        >
          <Input />
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
          <Col><Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          You already have an account ? <Link to="/">Login</Link>
        </Form.Item></Col>
        </Row>

        
        
      </Form>
    </div>
  );
}
