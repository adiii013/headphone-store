import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './layout/user/Login';
import SignUp from './layout/user/SignUp';
import Home from './layout/home/Home';
import ViewProduct from './layout/product/ViewProduct';
import { useEffect } from 'react';
import { Authorization } from './features/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { AddProducts } from './features/productSlice';
import Cart from './layout/cart/Cart';
import { SetCart } from './features/cartSlice';


function App() {
  const dispatch = useDispatch();
  const auth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.get('http://localhost:5000/users/verify', {
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
    const productdata = await axios.get('http://localhost:5000/product');
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
      const response = await axios.get('http://localhost:5000/users/verify', {
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
    auth();
    loadProducts();
    loadCart();
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='login/' element={<Login />}></Route>
          <Route path='signup/' element={<SignUp />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product/:id' element={<ViewProduct />}></Route>
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;