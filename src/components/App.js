import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <PopupWithForm title='Редактировать профиль' name='profile' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input type="text" name="name" required className="popup__input popup__input_text_name" id="name-input"
                 minLength="2" maxLength="40"/>
          <span className="popup__input-error name-input-error"></span>
          <input type="text" name="info" required className="popup__input popup__input_text_info" id="info-input"
                 minLength="2" maxLength="200"/>
          <span className="popup__input-error info-input-error"></span>
          <button type="submit" className="popup__submit-button">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm title='Новое место' name='card' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input type="text" name="title" required className="popup__input popup__input_text_name"
                 id="card-name-input" placeholder="Название" minLength="2" maxLength="30"/>
          <span className="popup__input-error name-input-error card-name-input-error"></span>
          <input type="url" name="link" required className="popup__input popup__input_text_info"
                 id="card-link-input" placeholder="Ссылка на картинку"/>
          <span className="popup__input-error info-input-error card-link-input-error"></span>
          <button type="submit" className="popup__submit-button">Создать</button>
        </PopupWithForm>

        <ImagePopup/>

        <PopupWithForm title='Вы уверены?' name='confirm'>
          <button type="submit" className="popup__submit-button">Да</button>
        </PopupWithForm>

        <PopupWithForm title='Обновить аватар' name='avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input type="url" name="avatar" required className="popup__input popup__input_text_info"
                 id="avatar-url-input" placeholder="Ссылка на картинку"/>
          <span className="popup__input-error info-input-error avatar-url-input-error"></span>
          <button type="submit" className="popup__submit-button">Сохранить</button>
        </PopupWithForm>
      </div>

      <template className="template">
        <li className="place">
          <img className="place__pic"/>
          <button className="place__remove-button" type="button"></button>
          <div className="place__sign">
            <h2 className="place__title"></h2>
            <div className="place__like-area">
              <button className="place__like-button" type="button"></button>
              <p className="place__like-counter"></p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
