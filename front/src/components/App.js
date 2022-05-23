import './../styles/App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Main from "./../containers/Main"
import FormImc from "./FormImc"
import Register from "./../components/Register"
import Login from "./../components/Login"
import Month from "./time/Month"
import Trimester from "./time/Trimester"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/main/" element={<Main/>}></Route>
          <Route path="/main/month" element={<Month/>}></Route>
          <Route path="/main/trimester" element={<Trimester/>}></Route>
          <Route path="/main/form" element={<FormImc/>}></Route>
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
