import React, { Component } from "react";
import * as api from '../api'



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
   
    const { id,title, subtitle, text, image_url, href } = card;
    return (
      <div className="card">
    
        <a href={href}>
          <img alt="card header" className="cardImage" src={`${image_url}&${id}`} onerror={require("../assets/temp.png") } />
        </a>

        <div className="cardEntry">
          <a href={href}>
            <div className="cardHeading">
              <img alt="avatar" src={require("../assets/avatar.png")} />
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
        <img alt="liked heart" className="heart" src={require("../assets/heart.png")} />
        </button>:  
        <button type="button" onClick={()=>{this.setLike(id,true)}}>
        <img alt="unliked heart" className="heart" src={require("../assets/emptyHeart.png")} />
        </button>
        }
        
        </div>
      </div>
    );
  }
}
