import React,{useEffect, useState,useContext} from 'react'
import { AuthContext } from '../Auth/AuthContext';

const Login = () => {
    const [rData, setRData] = useState([]);
    const [gmail, setGmail] = useState("");
    const [pass, setPass] = useState("");
    
    const {
      setAuth
    }=useContext(AuthContext);

    useEffect(()=>{
      fetch(`https://login-vijit.herokuapp.com/Register`)
      .then((res)=>res.json())
      .then((data)=>setRData(data))
    },[]);

    const compare=()=>{  
           rData.map((item)=>{ 
             if(item.Email === gmail && item.password=== pass ){
               setAuth(true)
               alert("!You Logged in");
               setGmail("");
               setPass("")
             }
            
            })
            }
  return (
    <div>
   
    <input placeholder='Enter Mail' value={gmail} onChange={(e)=>setGmail(e.target.value)} />
    <br />
    <input placeholder='Enter PassWord' value={pass} onChange={(e)=>setPass(e.target.value)}/>
    <br />
    <button onClick={compare}>Login</button>
      
          
    </div>
  )
}

export default Login