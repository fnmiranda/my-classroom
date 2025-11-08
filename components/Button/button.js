import styles from './button.module.css'

export default function Button({ children, icon = '→', style, ...props }) {
  return (
    <button className={styles.button} style={style} {...props}>
      <div className={styles.buttonContent}>
        <label className={styles.text}>{children}</label>
        <span className={styles.buttonIcon}>
          {icon}
        </span>
      </div>
    </button>
  )
}
