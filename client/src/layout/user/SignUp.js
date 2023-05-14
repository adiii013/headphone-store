import React, { useState } from 'react'
import Logo from '../../images/logo.png'
import './Login.css'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../components/loading/loading'

function SignUp() {
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate()
    const [user,setUser] = useState({
        email:'',
        name:'',
        phoneno:'',
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
            const response = await axios.post('http://localhost:5000/users/register',user);
            if(response.data.success === 'false'){
                console.log(response.data.msg);
            }
            else{
                navigate('/login',{replace:true})
            }
            setLoading(false)
        }catch(e){
            setLoading(false)
            console.log(e);
        }   
      }
    return (
        <>
            <div className="logo__container">
                <img src={Logo} alt="" className="logo" />
                <p>Music Cart</p>
            </div>
            <div className="login__container">
                <p>Create Account</p>
                <form className='login__form' action="" onSubmit={submitData}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' onChange={onChangeInput}/>
                    <label htmlFor="email">Phone Number</label>
                    <input type="text" name='phoneno' onChange={onChangeInput}/>
                    <label htmlFor="email">Email id</label>
                    <input type="text" name='email' onChange={onChangeInput}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' onChange={onChangeInput}/>
                    <artice>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.
                    </artice>
                    <button style={{textAlign:'center'}}>{(loading) ? <Loading/> : 'Continue'}</button>
                </form>
                <artice>By continuing, you agree to Musicart privacy notice and conditions of use.
                </artice>
            </div>
            <div className="already__account">
                <p>Already have an account ? <Link  className='create' to='/login'>Login</Link></p>
            </div>
            <Footer />
        </>
    )
}

export default SignUp