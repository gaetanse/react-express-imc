import SideBarNav from "./../components/SideBarNav"
import { useState,useEffect } from "react"
import etatJson from "./../data/etat.json"
import CardImc from "./../components/Card"
import FormImc from "../components/FormImc";
import { Layout,Row,Empty  } from 'antd'
import { BrowserRouter,Routes,Route } from "react-router-dom"
const axios = require('axios');
const { Footer, Sider, Content } = Layout

export default function Main() {

  const [imcs,setImcs] = useState(undefined)
  const fileEtat = "data/etat.json"

  useEffect(() => {
    console.log("qzdqzd")
    axios.post('http://localhost:666/getImcs', {
      id: localStorage.getItem('id')
    })
    .then(function (response) {
      if(response.data.message === "imc found"){
        setImcs(response.data.imcs)
        console.log(imcs)
      }
    })
    .catch(function (error) { console.log(error) });
  },[]);

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
        backgroundColor: '#F3D3ED'
      }
    }>
      <Content
        style={{
          margin: '2% auto',
          textAlign: 'center'
        }}
      >    

        <div>
          <Row gutter={16}>
            {
              imcs !== undefined ?
              imcs.map((e,i)=>{

                let calculWithLast = 0

                if(i!=0){
                  calculWithLast = imcs[i].weight - imcs[i-1].weight
                }

                return(
                  <CardImc calculWithLast={calculWithLast} etat={etatJson[e.numero].etat} todayDate={e.date} description={etatJson[e.numero].description} color={etatJson[e.numero].color} infos={e}/>
                )
              }):
              <div>
                <Empty style={{fontSize: "100px",margin: "15% auto"}}
                  imageStyle={{
                    height: 200,
                  }}
                />
                <h1 style={{fontSize: "50px",fontWeight: "bold", margin: "0 auto"}}>You need to add a imc !</h1>
              </div>
            }
          </Row>
        </div>

      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#F3D3ED'
        }}
      >
      </Footer>
    </Layout>
  </Layout>
    
  </div>

    </div>
  )
}