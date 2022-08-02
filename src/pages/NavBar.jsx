import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div> 
    <br />
    <div className={styles.maindiv}>
    <Link className={styles.comp} to='/register'>Register</Link>
    <Link className={styles.comp} to='/'>Login</Link>
    <Link className={styles.comp} to='input'>InputTodo</Link>
    <Link className={styles.comp} to='list'>TodoList</Link>
    </div>
    </div>
  )
}

export default NavBar