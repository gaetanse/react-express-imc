import SideBarNav from "./../components/SideBarNav"
import { useState,useEffect } from "react"
import etatJson from "./../data/etat.json"
import CardImc from "./../components/Card"
import FormImc from "../components/FormImc";
import { Layout,Row,Empty  } from 'antd'
import { BrowserRouter,Routes,Route } from "react-router-dom"
const axios = require('axios');
const { Footer, Sider, Content } = Layout

export default function Main(props) {


  const [collapsed,setCollapsed] = useState(false)

  return (
    <div>
    
    <div className='App'><Layout
    style={{
      minHeight: '100vh',
    }}
  >
    <Sider collapsible collapsed={collapsed} onCollapse={()=>setCollapsed(!collapsed)}>
      <SideBarNav theme={"dark"}/>
    </Sider>
    <Layout className="site-layout" style={
      {
        backgroundColor: '#FFFFFF'
      }
    }>
      <Content
        style={{
          margin: 'auto auto',
          textAlign: 'center'
        }}
      >    

      {
        props.htmldiv
      }

      </Content>
    </Layout>
  </Layout>
    
  </div>

    </div>
  )
}