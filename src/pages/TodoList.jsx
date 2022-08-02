import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext'

const TodoList = () => {

    const {arr,auth}=useContext(AuthContext);
    
    if(!auth){
      return <div>
     <Link to='/'>Please Login</Link>
      </div>
    }
  return (
    <div>
    {
        arr.map((item)=>(
            <div key={item.id}>
            <h5>{item.id}</h5>
            <h3>{item.Task}</h3>
            <hr />
            </div>
        ))
    }
    
    </div>
  )
}

export default TodoList