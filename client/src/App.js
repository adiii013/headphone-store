import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './layout/user/Login';
import SignUp from './layout/user/SignUp';
import Home from './layout/home/Home';
import ViewProduct from './layout/product/ViewProduct';
import { useEffect, useState } from 'react';
import { Authorization } from './features/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { AddProducts } from './features/productSlice';
import Cart from './layout/cart/Cart';
import { SetCart } from './features/cartSlice';
import './nav.css'
import Nav from './components/nav/Nav';

function App() {
  const dispatch = useDispatch();
  const[activeNav,setActiveNav] = useState('/home')

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 650;


  const auth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.get('https://headphone-store.onrender.com/users/verify', {
        headers: {
          'Authorization': token,
        }
      });
      if (response.data.success === true) {
        const data = response.data;
        const user = {
          email: data.user.email,
          name: data.user.name,
          login: data.success
        }
        dispatch(Authorization(user));
      }
    }
  }

  const loadProducts = async () => {
    const productdata = await axios.get('https://headphone-store.onrender.com/product');
    const productsData = productdata.data
    const data = {
      productsData: productsData,
      getProducts: true
    }
    dispatch(AddProducts(data))
  }

  const loadCart = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.get('https://headphone-store.onrender.com/users/verify', {
        headers: {
          'Authorization': token,
        }
      });
      if (response.data.success === true) {
        const data = response.data.user.cart;
        dispatch(SetCart(data));
      }
    }
  }

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    auth();
    loadProducts();
    loadCart();
  }, [])


  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='login/' element={<Login />}></Route>
          <Route path='signup/' element={<SignUp />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/product/:id' element={<ViewProduct />}></Route>
          <Route path='/cart' element={<Cart />} />
        </Routes>
  {
    (width < breakpoint) ? <Nav activeNav={activeNav} setActiveNav={setActiveNav}/> : <div/>
  }
      </BrowserRouter>
    </div>
  );
}

export default App;
