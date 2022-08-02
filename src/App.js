import './App.css';
import TodoInput from './pages/TodoInput';
import TodoList from './pages/TodoList';
import { Route,Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
       <Route path='/list' element={<TodoList />} />
       <Route path='/input' element={<TodoInput />}/>
       <Route path='/' element={<Login />} />
       <Route path='/register' element={<Register />} />
       </Routes>
    </div>
  );
}

export default App;
