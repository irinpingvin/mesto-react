import React from "react";
import {CurrentUserContext} from "../contexts/currentUser/CurrentUserContext";

function Card({card, onCardClick}) {
  const userInfo = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === userInfo._id;
  const isLiked = card.likes.some(element => element._id === userInfo._id);

  const cardDeleteButtonClassName = (
    `place__remove-button ${isOwn ? 'place__remove-button_visible' : ''}`
  );
  const cardLikeButtonClassName = `place__like-button ${isLiked ? 'place__like-button_visible' : ''}`;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="place">
      <div className="place__pic" style={{backgroundImage: `url(${card.link})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} onClick={handleClick}/>
      <button className={cardDeleteButtonClassName} type="button"/>
      <div className="place__sign">
        <h2 className="place__title">{card.title}</h2>
        <div className="place__like-area">
          <button className={cardLikeButtonClassName} type="button"/>
          <p className="place__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;