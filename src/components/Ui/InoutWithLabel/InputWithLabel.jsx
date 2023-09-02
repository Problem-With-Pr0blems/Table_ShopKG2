import { Translate, useTranslate } from '../../Translate/Translate'
import styles from './InputWithLabel.module.css'


const InputWithLabel = ({ label, placeholder, ...otherProps }) => {
  const translatedPlaceholder = useTranslate(placeholder)
  return (
    <label className={styles.root}>
      {
        label && (
          <span>
            <Translate>{label}</Translate>
          </span>
        )
      }
      <input placeholder={translatedPlaceholder} {...otherProps} />
    </label>
  )
}

export default InputWithLabel