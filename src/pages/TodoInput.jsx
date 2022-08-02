import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';
const TodoInput = () => {
    const {addInput,auth}=useContext(AuthContext)
    const [item, setItem] = React.useState("");
    const [count,setCount]=React.useState(1);
   
    let getAdd=()=>{
        setCount(count+1);
        let payload={
            "Task":item,
            "id":count,
             
        }
       addInput(payload);
       alert('!Task added')
       setItem("")

    }

    if(!auth){
      return <div>
      <Link to="/" >Please Login</Link>
      </div>
    }
    
  return (
    <div>
        <input placeholder='Enter Task' value={item} onChange={(e)=> setItem(e.target.value)}/>
        <button onClick={getAdd}>Add</button>
       
    </div>
  )
}

export default TodoInput