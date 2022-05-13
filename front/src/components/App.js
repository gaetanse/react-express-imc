import './../styles/App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Main from "./../containers/Main"
import Register from "./../components/Register"
import Login from "./../components/Login"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/main/" element={<Main/>}></Route>
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
