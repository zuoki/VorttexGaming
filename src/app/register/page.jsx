'use client';
import React, { useState } from 'react';
import './register.css';
import validation from './validation';
import Link from 'next/link';

const Register = () => {

  const [msjToRender, setMsjToRender] = useState('');
  const [err, setErr] = useState('');

  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const handleUser = (e) => {
    setUser((prevUser) => {
      const updatedUser = {
        ...prevUser,
        [e.target.name]: e.target.value
      };
      setErr(validation(updatedUser));
      return updatedUser;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsjToRender('Usuario creado con éxito')
  }

  const handleDisabled = () => {
    if (err.length > 0 || user.userName.length === 0 || user.email.length === 0 || user.password.length === 0 || user.repeatPassword.length === 0) return true;
    return false;
  }

  return (
    <div className='formRegister'>
      <form onSubmit={handleSubmit}>
        <p>Registrarse</p>
        <div className='campos'>
          <input autoComplete='off' onChange={handleUser} value={user.userName} name='userName' placeholder='Username' /><br />
          <input autoComplete='off' onChange={handleUser} value={user.email} name='email' placeholder='email' /><br />
          <input type='password' autoComplete='off' onChange={handleUser} value={user.password} name='password' placeholder='password' /><br />
          <input type='password' autoComplete='off' onChange={handleUser} value={user.repeatPassword} name='repeatPassword' placeholder='Repeat password' /><br />
        </div>
        <Link href={'/'}><button disabled={handleDisabled()} >Submit</button></Link>
        <p className='msjToRender'>{err.length > 0 && err}</p>
        {msjToRender.length > 0 && <p className='msjToRender'>{msjToRender}</p>}
      </form>
    </div>
  )
}

export default Register
