import styles from './button.module.css'

export default function Button({ children, style, ...props }) {
  return (
    <button className={styles.button} style={style} {...props}>{children}</button>
  )
}
