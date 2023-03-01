import React, { useEffect, useState } from "react";
import classes from "./css/catalog.module.css"
import Star from "./Star";
import zamok from './img/zamok.svg'

export default function Catalog() {
  const [cardArray, setCardArray] = useState([]);
  const [open, setOpen] = useState({ pageIndex: -1, isOpen: false }); // изменяем состояние open
  const handleOpen = (pageIndex) => () => {
    setOpen((prevState) => ({
      pageIndex,
      isOpen: !prevState.isOpen || prevState.pageIndex !== pageIndex, // обновляем только для текущей страницы
    }));
  };

  function createCardHtml(cards) {
    return cards.map((card, index) => (
      <React.Fragment key={card.id}>
        <div className={classes.cards}>
          <Star />
          <h4>{card.title}</h4>
          <p>{card.description}</p>
          <div className={classes.start}>Cтарт</div>
        </div>
        {(index + 1) % 6 === 0 && <div className={classes.horizanalLine}></div>}
      </React.Fragment>
    ));
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${process.env.PUBLIC_URL}/easy.json`);
      const data = await response.json();
      setCardArray(data);
    }
    fetchData();
  }, []);

  function render() {
    const cardsPerPage = 6;
    const numOfPages = Math.ceil(cardArray.length / cardsPerPage);

    let pages = [];
    for (let i = 0; i < numOfPages; i++) {
      const startIndex = i * cardsPerPage;
      const endIndex = startIndex + cardsPerPage;
      const pageCards = cardArray.slice(startIndex, endIndex);
      const cardHtml = createCardHtml(pageCards);
      const isPageOpen = open.pageIndex === i && open.isOpen; // проверяем, открыта ли страница
      pages.push(
        <div className={classes.wrapper} key={i}>
          {isPageOpen ? null : (
            <div className={classes.hiden}>
              <div className={classes.block}>
                <img src={zamok} alt="something" />
                <button
                  onClick={handleOpen(i)}
                  className={classes.buy}
                >
                  Получить доступ
                </button>
              </div>
            </div>
          )}
          <div className={classes.container}>{cardHtml}</div>
        </div>
      );
    }
    return pages;
  }

  return <div className="card-container">{render()}</div>;
}