import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Radio, DatePicker } from 'antd'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { useDispatch } from "react-redux"
const axios = require('axios')

export default function FormImc() {
  
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [componentSize, setComponentSize] = useState('default');

  const [todayDate, setTodayDate] = useState(undefined);
  const [weight, setWeight] = useState(undefined);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  useEffect(() => {
    setTodayDate(new Date())
  },[]);

  function onValid(e){
    e.preventDefault()
    if(todayDate!==undefined&&weight!==undefined){
      axios.post('http://localhost:666/addImc', {
        weight: weight,
        todayDate: todayDate.toString(),
        id: localStorage.getItem('id')
      })
      .then(function (response) {
        if(response.data.message === "ok - the imc is add"){
          dispatch({
            type: "ADD-IMC",
            payload: response.data.imc
          })
          navigate("/main")
        }
        else{
          console.log("error / can't add imc")
        }
      })
      .catch(function (error) { console.log(error) });
    }
  }

  const dateFormat = 'YYYY/MM/DD';

  return (
    <Form style={{marginTop: "75%", width: "400px", height: "250px", border: "1px solid black",boxShadow: "0 0 5px rgba(0, 0, 0, 0.9)",borderRadius: "10px", padding: "25px"}}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
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
        <DatePicker defaultValue={moment(new Date(), dateFormat)} onChange={(date)=>setTodayDate(date)}/>
      </Form.Item>
      <Form.Item label="Button">
        <Button htmlType="submit" onClick={e=>{onValid(e)}} type="primary">Submit</Button>
      </Form.Item>
    </Form>
  )
}