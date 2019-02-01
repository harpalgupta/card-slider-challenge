import React, { Component } from "react";
import * as api from '../api'

/*
  {
    "id": 1,
    "title": "We are Humans",
    "subtitle": "And we love humans",
    "text": "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
    "image_url": "https://picsum.photos/300/150/?random",
    "href": "https://mindera.com/people-and-culture/we-are-humans/",
    "is_liked": true
  }
*/

export default class Card extends Component {

npm

  

  state={
    liked:false
    

  }
componentDidMount(){
  const {card} =this.props;

  this.setState({liked:card.is_liked})
}


  setLike=  (id,is_liked)=>{
   this.setState({liked:is_liked},()=>{api.likeCard(id,is_liked)})

    }

    

  render() {
    const {card} =this.props;
    const tmpCardInfo =card;
    // const tmpCardInfo = {
    //   id: 1,
    //   title: 'Humans are not "resources"',
    //   subtitle: "And we love humans",
    //   text:
    //     "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
    //   image_url: "https://picsum.photos/300/150/?random",
    //   href: "https://mindera.com/people-and-culture/we-are-humans/",
    //   is_liked: true
    // };
    const { id,title, subtitle, text, image_url, href, is_liked } = tmpCardInfo;
    //this.setState({liked:is_liked})
    return (
      <div className="card">
        {/* {Object.keys(tmpCardInfo).map(cardEntry => {
          console.log(tmpCardInfo[cardEntry]);
        })} */}

        <a href={href}>
          <img className="cardImage" src={`${tmpCardInfo.image_url}&${id}`} onerror={require("../assets/emptyHeart.png") } />
        </a>

        <div className="cardEntry">
          <a href={href}>
            <div className="cardHeading">
              <img src={require("../assets/avatar.png")} />
              <div className="cardTitle">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
              </div>
            </div>
            <div className="cardText">
              <p>{text}</p>
            </div>
          </a>

          {this.state.liked?
        <button type="button" onClick={()=>{this.setLike(id,false)}}>
        <img className="heart" src={require("../assets/heart.png")} />
        </button>:  
        <button type="button" onClick={()=>{this.setLike(id,true)}}>
        <img className="heart" src={require("../assets/emptyHeart.png")} />
        </button>
        }
          {/* <button type="button" onClick={()=>{this.setLike(id,!is_liked)}}>
           <img className="heart" src={require("../assets/emptyHeart.png")} />
           </button> */}
        </div>
      </div>
    );
  }
}
