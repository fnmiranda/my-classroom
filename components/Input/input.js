import styles from './input.module.css'

export default function Input({ text, ...props }) {

  return (
    <div className={styles.inputField} >
      <input className={styles.input} placeholder=' ' {...props} />
      <label className={styles.label} >{text}</label>
    </div>
  )
}
