import React, { Component } from 'react';
import * as api from '../api';
import Card from './Card';

// configurable amount of cards to display
const numberofCards = 3;


export default class CardDeck extends Component {
  state = {
    start: 0,
    cards: [],
    reachedEnd: false,
  };

  componentDidMount() {
    this.getCards();
    this.checkReachedEnd();
  }

  componentDidUpdate(prevProps, prevState) {
    const { start } = this.state;
    if (prevState.start !== start) {
      this.getCards();
      this.checkReachedEnd();
    }
  }


  getCards = async () => {
    const { start } = this.state;
    const end = start + numberofCards;

    const cards = await api.fetchCards(start, end);
    this.setState({ cards });
  };


  checkReachedEnd=async () => {
    const { start } = this.state;
    const end = start + numberofCards;


    const nextStart = start + numberofCards;
    const nextEnd = end + numberofCards;

    const cards = await api.fetchCards(nextStart, nextEnd);
    if (cards.length === 0) this.setState({ reachedEnd: true });
    else this.setState({ reachedEnd: false });
  }

    changePage = (direction) => {
      const { start, end, reachedEnd } = this.state;
      if (direction === 'left' && start !== 0) {
        this.setState({ start: start - numberofCards, end: end - numberofCards });
      } else if (direction === 'right' && !reachedEnd) {
        this.setState({ start: start + numberofCards, end: end + numberofCards });
      }
      return null;
    };


    render() {
      const { cards, reachedEnd, start } = this.state;

      return (
        <div className="canvas">
          <div className="deck">
            {cards.map((card, index) => (
              // <div className="firstCard">
              //   {' '}
              //   <Card key={card.id} card={card} />
              // </div>
            // ) : (
              <Card key={card.id} card={card} index={index} />
            // )))}
            ))}
          </div>
          <div className="navigation">
            <div className="direction-buttons">
              <button className={start === 0 ? 'hiddenButton' : 'visibleNavButton'} type="button" onClick={() => this.changePage('left')}>
                <img alt="left button" src={require('../assets/left.png')} />
              </button>
              <button className={reachedEnd ? 'hiddenButton' : 'visibleNavButton'} type="button" onClick={() => this.changePage('right')} disabled={reachedEnd}>
                <img alt="right button" src={require('../assets/right.png')} />
              </button>

            </div>
          </div>
        </div>
      );
    }
}
