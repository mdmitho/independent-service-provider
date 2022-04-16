
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Service from './Components/Service/Service'
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/service' element={<Service></Service>}></Route>
       <Route path='/login'element={<Login></Login>}></Route>
       <Route path='/checkoutPage' element={<CheckoutPage></CheckoutPage>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
