import { Form, Button, Input, Col, Row } from "antd";
import "./../styles/Register.css";
import {Link} from "react-router-dom";
import { useState } from "react";
const axios = require('axios');

export default function Register() {

  const onFinish = (values) => {
    console.log('Success:', values);
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

const [name,setName] = useState(undefined)
const [password,setPassword] = useState(undefined)
const [age,setAge] = useState(undefined)
const [height,setHeight] = useState(undefined)
const [weight,setWeight] = useState(undefined)

  function onValid(e){
    e.preventDefault()
    console.log("go to axios qzdqz")
    console.log(name)
    if(name!=undefined&&password!=undefined&&age!=undefined&&height!=undefined&&weight!=undefined){
      console.log("go to axios in")
      axios.post('http://localhost:666/user', {
        name: name,
        password: password,
        age: age,
        height: height,
        weight: weight
      })
      .then(function (response) {
        console.log(response)
        if(response.message){
          //go vers /main
        }
        else{
          //erreur d'ajout
        }
      })
      .catch(function (error) {
        //error
        console.log(error);
      });
    }
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
          <Input value={name} onChange={(e)=>setName(e.target.value)}/>
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
          <Input.Password value={password} onChange={(e)=>setPassword(e.target.value)}/>
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
          <Input value={age} onChange={(e)=>setAge(e.target.value)}/>
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
          <Input value={height} onChange={(e)=>setHeight(e.target.value)}/>
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
          <Input value={weight} onChange={(e)=>setWeight(e.target.value)}/>
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
