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

  componentDidUpdate(prevProps,prevState){
    if (prevState.start!==this.state.start){
      this.getCards();  
      this.checkReachedEnd()

    }
    

  }



  getCards = async () => {
    const { start, end } = this.state;
    const cards = await api.fetchCards(start, end);
    this.setState({ cards }, () => {
      console.log(this.state);
    });
  };



  checkReachedEnd=async()=>{
    const { start, end, reachedEnd } = this.state;

    const nextStart= start + 3
    const nextEnd= end + 3

    const cards = await api.fetchCards(nextStart, nextEnd);
    if (cards.length===0) this.setState({reachedEnd:true})
    else this.setState({reachedEnd:false})

  }

    changePage = direction => {
    const { start, end, reachedEnd } = this.state;
    if (direction === "left" && start !== 0) {
      console.log("left click")
      this.setState({ start: start - 3, end: end - 3 });
    } else if (direction === "right" && !reachedEnd) {
      console.log("right click")
      this.setState({ start: start + 3, end: end + 3 },()=>{console.log(this.state)});
    }
    return null;
  };

  render() {
    const { cards,reachedEnd,start } = this.state;

    return (
      <div className="canvas">
        <div className="deck">
          {cards.map((card, index) =>
            index === 1 ? (
              <div className="middleCard">
                {" "}
                <Card key={card.id} card={card} />
              </div>
            ) : (
              <Card key={card.id} card={card} />
            )
          )}
        </div>
        <div className="navigation">
          <div className="direction-buttons">
          <button className={start===0?"hiddenButton":"somethingElse"} type="button" onClick={()=>this.changePage("left")}>
            <img src={require("../assets/left.png")} />
            </button>
            <button className={reachedEnd?"hiddenButton":"somethingElse"} type="button" onClick={()=>this.changePage("right")}  disabled={reachedEnd}>
            <img src={require("../assets/right.png")} />
            </button>

          </div>
        </div>
      </div>
    );
  }
}
