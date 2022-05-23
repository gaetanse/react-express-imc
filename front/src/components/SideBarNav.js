import { BulbOutlined, CoffeeOutlined, UserOutlined, ChromeOutlined, WindowsOutlined, AndroidOutlined, ToolOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd'
import { DemoGauge }  from "./charts/ChartImcNow"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import './../styles/Menu.css'
const axios = require('axios');

export default function SideBarNav(props) {

  const [imcFound, setImcFound] = useState(0)

  const navigate = useNavigate();

  function goToForm(e){
    e.preventDefault()
    navigate("/main/form")
  }

  function goToHome(e){
    e.preventDefault()
    localStorage.clear()
    navigate("/")
  }
  useEffect(() => {
    axios.post('http://localhost:666/getImcLastImc', {
      id: localStorage.getItem('id')
    })
    .then(function (response) {
      if(response.data.message === "imc found"){
        console.log("-------------------------------")
        console.log(response.data.imc)
        console.log("-------------------------------")
        setImcFound(response.data.imc)
      }
    })
    .catch(function (error) { console.log(error) });
  });

  return (
    <div id="mySidenav" >
      <Menu theme={props.theme} mode="inline" className="Menu">

      <Menu.Item><h1 style={{fontSize: "25px",color:"white"}}>React IMC</h1></Menu.Item>
        
      <Menu.Item><p style={{fontSize: "20px",backgroundColor: "grey",color:"black", borderRadius: "5px", marginTop: "20px"}}>{localStorage.getItem("name")}</p></Menu.Item>

      <Menu.Item>Period of entries</Menu.Item>
      
      <Menu.Item className="Timeline">
        <Link to="/main">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1664 1792"><path fill="currentColor" d="M128 1664h288v-288H128v288zm352 0h320v-288H480v288zm-352-352h288V992H128v320zm352 0h320V992H480v320zM128 928h288V640H128v288zm736 736h320v-288H864v288zM480 928h320V640H480v288zm768 736h288v-288h-288v288zm-384-352h320V992H864v320zM512 448V160q0-13-9.5-22.5T480 128h-64q-13 0-22.5 9.5T384 160v288q0 13 9.5 22.5T416 480h64q13 0 22.5-9.5T512 448zm736 864h288V992h-288v320zM864 928h320V640H864v288zm384 0h288V640h-288v288zm32-480V160q0-13-9.5-22.5T1248 128h-64q-13 0-22.5 9.5T1152 160v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V384q0-52 38-90t90-38h128v-96q0-66 47-113T416 0h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"/></svg> Semaine
        </Link>
      </Menu.Item>
      <Menu.Item className="Timeline">
        <Link to="/main/month">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1664 1792"><path fill="currentColor" d="m1303 964l-512 512q-10 9-23 9t-23-9l-288-288q-9-10-9-23t9-22l46-46q9-9 22-9t23 9l220 220l444-444q10-9 23-9t22 9l46 46q9 9 9 22t-9 23zM128 1664h1408V640H128v1024zM512 448V160q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zm768 0V160q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zm384-64v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V384q0-52 38-90t90-38h128v-96q0-66 47-113T416 0h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"/></svg> Mois
        </Link>
      </Menu.Item>
      <Menu.Item className="Timeline">
        <Link to="/main/trimester">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1664 1792"><path fill="currentColor" d="M1536 256q52 0 90 38t38 90v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V384q0-52 38-90t90-38h128v-96q0-66 47-113T416 0h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128zm-384-96v288q0 14 9 23t23 9h64q14 0 23-9t9-23V160q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zm-768 0v288q0 14 9 23t23 9h64q14 0 23-9t9-23V160q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zm1152 1504V640H128v1024h1408zm-640-576h224q14 0 23 9t9 23v64q0 14-9 23t-23 9H896v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224H544q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224V864q0-14 9-23t23-9h64q14 0 23 9t9 23v224z"/></svg> Trimestre
        </Link>
      </Menu.Item>

      <Menu.Item><Button style={{width: "125px",textAlign: "center"}} onClick={(e)=>{ goToForm(e) }} type="primary">Enter weight</Button></Menu.Item>
      <Menu.Item><Button style={{width: "125px",textAlign: "center"}} onClick={(e)=>{ goToHome(e) }} type="primary">Logout</Button></Menu.Item>

      <DemoGauge imc={imcFound}/>

      </Menu>
  
  </div>

  )
}