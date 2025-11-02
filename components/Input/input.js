import styles from './input.module.css'

export default function Input(props, text) {
  return (
    <input className={styles.input} {...props} />

  )
}
