'use client';
import React, { useState } from 'react';
import Button from '../Button/button';
import Input from '../Input/input';
import styles from './login.module.css'
import { useRouter } from 'next/navigation';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [err_msg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log('Email:', email);
    // console.log('Senha:', password);
    try {
      let ok = false;
      if (email && password) {
        ok = true;
      }
      if (ok) {
        router.push('/dashboard')
        setErrMsg('')
      }
    } catch (err) {
      console.log(err)
      setErrMsg(err.message)
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.title}>
          Welcome to the best Notes BR
        </div>
        <div className={styles.inputBox}>
          <span>Name: </span>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

        </div>
        <div className={styles.inputBox}>
          <span>Password:</span>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: 1 }}
          />

        </div>

        <Button id='submit' style={{ width: '100%' }} type='submit' onClick={handleSubmit}>
          Sign-In
        </Button>
        {err_msg != '' &&
          <div className={`${styles.error_msg}`}>
            {err_msg}
          </div>}
      </div>

    </div>
  )
}

export default Login;
