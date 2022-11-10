function Card({id, link, title, likes}) {
  return (
    <li className="place" key={id}>
      <img className="place__pic" style={{backgroundImage: `url(${link})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/>
      <button className="place__remove-button" type="button"></button>
      <div className="place__sign">
        <h2 className="place__title">{title}</h2>
        <div className="place__like-area">
          <button className="place__like-button" type="button"></button>
          <p className="place__like-counter">{likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;