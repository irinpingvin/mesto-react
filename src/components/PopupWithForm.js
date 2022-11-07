function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container popup__container_type_user-input">
        <button className="popup__close-button" type="button"></button>
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" name={`${props.name}-form`} noValidate>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;