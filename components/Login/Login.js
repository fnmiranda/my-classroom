'use client';
import React, { useState } from 'react';
import Button from '../Button/button';
import Input from '../Input/input';
import styles from './login.module.css'
import { useRouter } from 'next/navigation';
import { FaNoteSticky } from "react-icons/fa6";
import Link from 'next/link';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
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
        <div className={styles.iconsContent}>
          <div className={styles.icons}>
            <FaNoteSticky />
          </div>
        </div>
        <div className={styles.title}>

          Welcome to the best Notes BR
        </div>
        <div className={styles.inputBox}>
          <Input
            text="Name"
            id="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputBox}>
          <Input
            text="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputBox}>
          <Input
            text="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: 1 }}
          />
        </div>

        <div className={styles.boxBottom}>
          <Button id='submit' style={{ width: '35%', height: '100%', marginRight: 10 }} type='submit' onClick={handleSubmit}>
            Sign-In
          </Button>
          <span>New here?</span> <Link className={styles.link} href='/dashboard'> Create Account</Link>
        </div>
        {err_msg != '' &&
          <div className={`${styles.error_msg}`}>
            {err_msg}
          </div>}
      </div>

    </div>
  )
}

export default Login;
