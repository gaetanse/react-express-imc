import './../styles/App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Main from "./../containers/Main"
import FormImc from "./FormImc"
import Register from "./../components/Register"
import Login from "./../components/Login"
import Month from "./time/Month"
import Trimester from "./time/Trimester"
import { useEffect } from "react"
import etatJson from "./../data/etat.json"
import CardImc from "./../components/Card"
import { Row,Empty  } from 'antd'
import { useDispatch, useSelector } from "react-redux"
const axios = require('axios');

function App() {

  const dispatch = useDispatch()
  const imcs = useSelector(state=>state.imcs)

  const fileEtat = "data/etat.json"

  useEffect(() => {
    console.log("qzdqzd")
    axios.post('http://localhost:666/getImcs', {
      id: localStorage.getItem('id')
    })
    .then(function (response) {
      if(response.data.message === "imc found"){
        response.data.imcs.map((e)=>{
          dispatch({
            type: "ADD-IMC",
            payload: e
          })
        })
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
            <div className="site-card-wrapper">
              <Row gutter={8}>
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
                  <Empty style={{fontSize: "100px",margin: "15% auto"}} imageStyle={{ height: 200 }}/>
                  <h1 style={{fontSize: "50px",fontWeight: "bold", margin: "0 auto"}}>You need to add a imc !</h1>
                </div>
              }
              </Row>
            </div>
          }/>}></Route>

          <Route path="/main/month" element={
            <Main htmldiv={
              <Month/>
            }/>
          }></Route>

          <Route path="/main/trimester" element={
            <Main htmldiv={
              <Trimester/>
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
