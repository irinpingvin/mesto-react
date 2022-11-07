function ImagePopup() {
  return(
    <div className="popup popup_type_image">
      <div className="popup__container">
        <button className="popup__close-button"></button>
        <figure className="popup__figure">
          <img className="popup__picture"/>
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;