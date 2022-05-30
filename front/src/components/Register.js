import "./../styles/Register.css"
import { Form, Button, Input } from "antd"
import {Link} from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const axios = require('axios');

export default function Register() {

  const navigate = useNavigate();

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
    if(name!==undefined&&password!==undefined&&age!==undefined&&height!==undefined&&weight!==undefined){
      axios.post('http://localhost:666/addUser', {
        name: name,
        password: password,
        age: age,
        height: height,
        weight: weight
      })
      .then(function (response) {
        if(response.data.message === "ok - the user is add in server"){
          localStorage.setItem('id', response.data.id)
          localStorage.setItem('name', name)
          navigate("/main")
        }
        else{
          console.log("error / can't add user")
        }
      })
      .catch(function (error) { console.log(error) });
    }
  }

  return (
    <div style={{marginTop:"10%", border: "1px solid black",borderRadius: "10px",boxShadow: "0 0 5px rgba(0, 0, 0, 0.9)", width: "50%", marginLeft: "25%"}}>
      
      <h1 style={{textAlign: "left",fontSize: "70px",marginLeft: "5%"}}>REGISTER</h1>

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
          label="Height (m)"
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
          label="Weight (kg)"
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
          <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          You already have an account ? <Link to="/">Login</Link>
        </Form.Item>

        
      </Form>
    </div>
  );
}
