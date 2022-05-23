import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
const axios = require('axios');

export default function FormImc() {

  const navigate = useNavigate()

  const [componentSize, setComponentSize] = useState('default');

  const [todayDate, setTodayDate] = useState(undefined);
  const [weight, setWeight] = useState(undefined);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  function onValid(e){
    e.preventDefault()
    if(todayDate!=undefined&&weight!=undefined){
      console.log(todayDate)
      axios.post('http://localhost:666/addImc', {
        weight: weight,
        todayDate: todayDate,
        id: localStorage.getItem('id')
      })
      .then(function (response) {
        if(response.data.message === "ok - the imc is add"){
          console.log("ok / imc add")
          navigate("/main")
        }
        else{
          console.log("error / can't add imc")
        }
      })
      .catch(function (error) { console.log(error) });
    }
  }

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Field size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Weight">
        <Input value={weight} onChange={(e)=>setWeight(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Today date">
        <DatePicker value={todayDate} onChange={(date)=>setTodayDate(date)}/>
      </Form.Item>
      <Form.Item label="Button">
        <Button htmlType="submit" onClick={e=>{onValid(e)}} type="primary">Submit</Button>
      </Form.Item>
    </Form>
  )
}