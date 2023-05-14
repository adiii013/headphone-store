import React from 'react'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { Authorization } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';

function HeaderDesktop() {
  const isLogin = useSelector((state)=>state.user.login);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logOut = ()=>{
    localStorage.setItem('token','');
    const data = {
      login:false,
      email:'',
      name:''
    }
    dispatch(Authorization(data))
    navigate('/login')
  }

  const login =()=>{
    navigate('/login')
  }


  return (
    <div className="header__container">
        <div className="header__components">
            <p>9579093541</p>
        </div>
        <div className="header__components">
            <p>Get 50% off on selected items | Shop Now</p>
        </div>
        <div className="header__components">
        {
          (isLogin) ? <button onClick={logOut}>Logout</button>  : <button onClick={login}>Login</button>
        }
        </div>
    </div>
  )
}

export default HeaderDesktop