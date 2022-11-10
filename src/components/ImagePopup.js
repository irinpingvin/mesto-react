function ImagePopup({card, onClose}) {
  const isCard = !!card;

  return (
    <div className={`popup popup_type_image ${isCard ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={onClose}></button>
        <figure className="popup__figure">
          {isCard ? (
            <img className="popup__picture" src={card.link} />
          ) : (
            <img className="popup__picture"/>
          )}
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;