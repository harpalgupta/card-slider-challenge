import React, { Component } from "react";
import * as api from "../api";
import Card from "./Card";

export default class CardDeck extends Component {
  state = {
    start: 0,
    end: 3,
    cards: [],
    reachedEnd: false
  };

  componentDidMount() {
    this.getCards();
  }

  getCards = async () => {
    const { start, end } = this.state;
    const cards = await api.fetchCards(start, end);
    this.setState({ cards }, () => {
      console.log(this.state);
    });
  };

  changePage = direction => {
    const { start, end, reachedEnd } = this.state;

    if (direction === "left" && start !== 0) {
      this.setState({ start: start - 3, end: end - 3 });
    } else if (direction === "right" && reachedEnd) {
      this.setState({ start: start - 3, end: end - 3 });
    }
    return null;
  };

  render() {
    const { cards } = this.state;

    return (
      <div className="canvas">

     
      <div className="deck">
      
        {cards.map((card,index) => (
          index===1?
          <div className="middleCard"> <Card key={card.id} card={card} />
          </div>:<Card key={card.id} card={card} />

        ))}
        
      </div>
      <div className="navigation">

      <div className="direction-buttons">
<img src={require("../assets/left.png")} />
<img src={require("../assets/right.png")} />
</div>
      </div>


</div>
    );
  }
}
