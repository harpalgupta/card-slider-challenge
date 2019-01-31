import React, { Component } from "react";

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
  render() {
    const tmpCardInfo = {
      id: 1,
      title: 'Humans are not "resources"',
      subtitle: "And we love humans",
      text:
        "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
      image_url: "https://picsum.photos/300/150/?random",
      href: "https://mindera.com/people-and-culture/we-are-humans/",
      is_liked: true
    };
    const { title, subtitle, text, image_url, href, is_liked } = tmpCardInfo;

    return (
      <div className="card">
        {/* {Object.keys(tmpCardInfo).map(cardEntry => {
          console.log(tmpCardInfo[cardEntry]);
        })} */}
              

        <img className="cardImage" src={tmpCardInfo.image_url} />
        
        <div className="cardEntry">
        
        <div className="cardHeading">
        <img  src={require("../assets/avatar.png")} />
          <div className="cardTitle">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
        </div>
        <div className="cardText">
          <p>{text}</p>
        </div>
        <img className="heart" src={require("../assets/emptyHeart.png")}/>
      </div>
      </div>
    );
  }
}
