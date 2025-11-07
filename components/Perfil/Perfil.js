import React from 'react'
import styles from './perfil.module.css'
import Input from '../Input/input.js'
import { FaUserEdit, FaSave } from "react-icons/fa";
import Button from '../Button/button.js';

export default function Perfil() {
  return (
    <div className={styles.container}>
      <div className={styles.titlePage}>
        User Perfil
      </div>
      <div>
        <div className={styles.icons}>
          <FaUserEdit />
        </div>
        <div className={styles.infoEdit}>
          <span className={styles.text}> Name: </span>
          <Input />
          <span className={styles.text}> Email</span>
          <Input />
          <span className={styles.text}> Senha: </span>
          <Input type='password' />
          <div>
            <Button>
              <div className={styles.buttonContainer}>
                <span className={styles.text}>Confirm Changes</span>
                <FaSave />
              </div>
            </Button>
          </div>
        </div>

      </div>
      <div>

      </div>
    </div>
  )
}
