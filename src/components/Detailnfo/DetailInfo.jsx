import { useState } from 'react';
import { Translate, useTranslate } from '../Translate/Translate'
import styles from './DetailInfo.module.css'


const MiniTitle = ({ children, style }) => <h3 style={style} className={styles.mini_title}><Translate>{children}</Translate></h3>

function TextCutter({ children, maxWords }) {
  const [expanded, setExpanded] = useState(false);
  const textChildren = useTranslate(children)
  const words = textChildren.split(' ');
  const displayWords = expanded ? words : words.slice(0, maxWords);
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div className={styles.info}>
      <p className={styles.mini_title}>
          {displayWords.join(' ')}
      </p>
      {
        words.length > maxWords && (
          <>
          {expanded && <span  onClick={handleToggle}><Translate>Скрыть описание</Translate> </span>}
          {!expanded && <span  onClick={handleToggle}><Translate>Развернуть описание</Translate></span>} 
          </>
        )
      }
         
    </div>
  );
}

const Paragraph = ({ children, lastWord }) => (
  <p className={styles.paragraph}>
    <Translate>{children}</Translate>
    {
      lastWord && <span ><Translate>{lastWord}</Translate></span>
    }
  </p>
)
  

const maxWords = 50

const DetailInfo = () => {
  return (
    <section className={styles.root}>
        <h1 className={styles.title}>
          <Translate>КОМПАКТНЫЕ ШКОЛЬНЫЕ ПАРТЫ</Translate>
        </h1>
        <h2 className={styles.sub_title}>
          <Translate>CMP-3 COMPACT ДЛЯ РАБОТЫ В ОДНОЙ ГРУППЕ</Translate>
        </h2>
      <MiniTitle>Описание:</MiniTitle>
      <TextCutter maxWords={maxWords}>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      </TextCutter>
      <MiniTitle>О товаре:</MiniTitle>
      <MiniTitle>Дополнительная информация </MiniTitle>
      <Paragraph lastWord={'"страна"'}>Страна производства ...........</Paragraph>
      <Paragraph lastWord={'-'}>Требуется сборка ................... </Paragraph>
      <MiniTitle style={{margin: '15px 0 5px'}}>Примечание</MiniTitle>
      <p className={`${styles.paragraph} ${styles.paragraph_width}`}>
        <Translate>
          В металлических деталях используются профили Q48x1,5 мм и 20x40x1,5 мм.
        </Translate>
      </p>
      <div className={styles.more_info}>
        <div className={styles.part_info}>
          <MiniTitle>Габариты: Парта</MiniTitle>
          <Paragraph lastWord={'00 см'}>Глубина предмета ................... </Paragraph>
          <Paragraph lastWord={'00 см'}>Глубина предмета ................... </Paragraph>
          <Paragraph lastWord={'00 см'}>Глубина предмета ................... </Paragraph>
          <Paragraph lastWord={'00 см'}>Глубина предмета ................... </Paragraph>
          <Paragraph lastWord={'00 см'}>Глубина предмета ................... </Paragraph>
          <Paragraph lastWord={'00 см'}>Глубина предмета ................... </Paragraph>
        </div>
        <div className={styles.part_info}>
          <MiniTitle>Габариты: Парта</MiniTitle>
          <Paragraph lastWord={'00 см'}>Глубина предмета ................... </Paragraph>
          <Paragraph lastWord={'00 см'}>Глубина предмета ................... </Paragraph>
          <Paragraph lastWord={'00 см'}>Глубина предмета ................... </Paragraph>
          <Paragraph lastWord={'00 см'}>Глубина предмета ................... </Paragraph>
          <Paragraph lastWord={'00 см'}>Глубина предмета ................... </Paragraph>
          <Paragraph lastWord={'00 см'}>Глубина предмета ................... </Paragraph>
        </div>
      </div>
    </section>
  )
}

export default DetailInfo