import './../styles/App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Main from "./../containers/Main"
import FormImc from "./FormImc"
import Register from "./../components/Register"
import Login from "./../components/Login"
import Month from "./time/Month"
import Trimester from "./time/Trimester"
import SideBarNav from "./../components/SideBarNav"
import { useState,useEffect } from "react"
import etatJson from "./../data/etat.json"
import CardImc from "./../components/Card"
import { Layout,Row,Empty  } from 'antd'
const axios = require('axios');

function App() {

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
      }
    })
    .catch(function (error) { console.log(error) });
  },[]);

  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>

          <Route path="/main/" element={<Main htmldiv={
            <div>
            <Row gutter={16}>
              {
                imcs !== undefined ?
                imcs.map((e,i)=>{
  
                  let calculWithLast = 0
  
                  if(i!=0){
                    calculWithLast = imcs[i].weight - imcs[i-1].weight
                  }
  
                  console.log(i)
  
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
          }/>}></Route>

          <Route path="/main/month" element={
            <Main htmldiv={
              <Month imcs={imcs}/>
            }/>
          }></Route>

          <Route path="/main/trimester" element={
            <Main htmldiv={
              <Trimester imcs={imcs}/>
            }/>
        }></Route>

          <Route path="/main/form" element={
            <Main htmldiv={
              <FormImc/>
            }/>
        }></Route>

        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
