import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditProfilePopup(props) {
  return (
    <PopupWithForm title='Редактировать профиль' name='profile' isOpen={props.isOpen} onClose={props.onClose}
                   buttonText='Сохранить'>
      <input type="text" name="name" required className="popup__input popup__input_text_name" id="name-input"
             minLength="2" maxLength="40"/>
      <span className="popup__input-error name-input-error"/>
      <input type="text" name="info" required className="popup__input popup__input_text_info" id="info-input"
             minLength="2" maxLength="200"/>
      <span className="popup__input-error info-input-error"/>
    </PopupWithForm>
  );
}

export default EditProfilePopup;