import React, { Component } from 'react';
import * as api from '../api';


export default class Card extends Component {
  state={
    liked: false,


  }

  componentDidMount() {
    const { card } = this.props;

    this.setState({ liked: card.is_liked });
  }


  setLike= (id, is_liked) => {
    this.setState({ liked: is_liked }, () => { api.likeCard(id, is_liked); });
  }

  addDefaultSrc(ev) {
    ev.target.src = '../assets/temp.png';
  }


  render() {
    const { card, index } = this.props;
    const { liked } = this.state;
    const {
      id, title, subtitle, text, image_url, href,
    } = card;


    return (
      <div className={index === 0 ? 'card firstCard' : 'card'}>

        <a href={href} target="_blank" rel="noopener noreferrer">
          <img alt="card header" className="cardImage" src={`${image_url}&${id}`} onError={this.addDefaultSrc} />
        </a>

        <div className="cardEntry">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="cardHeading">
              <img alt="avatar" src={require('../assets/avatar.png')} />
              <div className="cardTitle">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
              </div>
            </div>
            <div className="cardText">
              <p>{text}</p>
            </div>
          </a>

          {liked
            ? (
              <button type="button" onClick={() => { this.setLike(id, false); }}>
                <img alt="liked heart" className="heart" src={require('../assets/heart.png')} />
              </button>
            )
            : (
              <button type="button" onClick={() => { this.setLike(id, true); }}>
                <img alt="unliked heart" className="heart" src={require('../assets/emptyHeart.png')} />
              </button>
            )
        }

        </div>
      </div>
    );
  }
}
