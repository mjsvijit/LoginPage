import React,{useState} from 'react'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dataRegister=()=>{

        
        fetch('https://login-vijit.herokuapp.com/Register',{
          method:"POST",
          headers:{
              'Content-Type':"application/json"
          } ,
          body:JSON.stringify(
              {
                "Name":name,
                "Email":email,
                "password":password
              }
          ) 
        }).then(()=>{
            
           console.log(name);
        })
        setEmail("");
        setName("");
        setPassword("")
       
    }

  return (
    <div>
       <input placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
       <br />
       <input placeholder='Enter Mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <br />
       <input placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
       <br />
       <button onClick={dataRegister} >Register</button>
    
    </div>
  )
}

export default Register