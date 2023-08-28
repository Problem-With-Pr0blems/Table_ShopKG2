import styles from './ButtonCount.module.css'


const ButtonCount = ({children,...props}) => {
  return (
    <button  className={styles.btn}{...props}>
      {children}
    </button>
  )
}

export default ButtonCount