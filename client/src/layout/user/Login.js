import React, { useState } from 'react'
import Logo from '../../images/logo.png'
import './Login.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/loading/loading'
import {useDispatch} from 'react-redux'
import { Authorization } from '../../features/userSlice'

function Login() {
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate()
    const [user,setUser] = useState({
        email:'',
        password:'',
      })
    
      const onChangeInput = e =>{
        const {name,value}= e.target
        setUser({...user,[name]:value})
      }

      const submitData = async (e)=>{
        e.preventDefault();
        setLoading(true)
        try{
            const response = await axios.post('http://localhost:5000/users/login',user);
            if(response.data.success === 'false'){
                console.log(response.data.msg);
            }
            else{
                console.log(response.data)
                const token = response.data.token;
                localStorage.setItem("token",token);
                const userData = {
                    email:response.data.email,
                    name:response.data.name,
                    login:true,
                }
                dispatch(Authorization(userData))
                navigate('/')
            }
            setLoading(false)
        }catch(e){
            setLoading(false)
            console.log(e);
        }   
      }
    
      return (
        <>
        <div className='login'>

        
            <div className="logo__container">
                <img src={Logo} alt="" className="logo" />
                <p>Music Cart</p>
            </div>
            <div className="login__container">
                <p>Sign in</p>
                <form className='login__form' onSubmit={submitData}>
                    <label htmlFor="email">Enter your email or phone number</label>
                    <input type="text" name='email' onChange={onChangeInput}/>
                    <label htmlFor="password">Enter your password</label>
                    <input type="password" name='password' onChange={onChangeInput}/>
                    <button style={{textAlign:'center'}}>{(loading) ? <Loading/> : 'Continue'}</button>
                </form>
                <artice>By continuing you agree to Musiccart policy notice and conditions of use.</artice>
            </div>
            <div className="new__to__us">
                <hr />
                <p>New to Musiccart ? </p>
                <hr />
            </div>
            <button className="create__account">
                <Link to='/signup' className="create">
                    Create your Musiccart Account
                </Link>
            </button>
            <Footer />
            </div>
        </>
    )
}

export default Login