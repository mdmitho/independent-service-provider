
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Service from './Components/Service/Service'

function App() {
  return (
    <div className="">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/service' element={<Service></Service>}></Route>
       <Route path='/login'element={<Login></Login>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
