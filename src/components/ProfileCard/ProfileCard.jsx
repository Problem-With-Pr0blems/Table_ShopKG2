import { Box } from "@mui/material"
import styles from './Profile.module.css'
import { Translate } from "../Translate/Translate"


const ProfileCard = ({Icon,title, subTitle,Button , onClick }) => {
  return (
    <Box className={styles.card} sx={{cursor: onClick ? 'pointer' : ''}} onClick={onClick}>
      <Box className={styles.card_content}>
        {Icon} <Translate>{title}</Translate>
      </Box>
      { subTitle &&
        <Box className={styles.sub_title}>
        <Translate>
          {subTitle}
        </Translate>
      </Box>
      }
      {Button}
    </Box>
  )
}

export default ProfileCard