function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="place">
      <img className="place__pic" style={{backgroundImage: `url(${card.link})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} onClick={handleClick}/>
      <button className="place__remove-button" type="button"></button>
      <div className="place__sign">
        <h2 className="place__title">{card.title}</h2>
        <div className="place__like-area">
          <button className="place__like-button" type="button"></button>
          <p className="place__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;