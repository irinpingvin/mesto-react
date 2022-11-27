import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from "./ImagePopup.js";
import Footer from "./Footer";
import EditProfilePopup from './EditProfilePopup';
import {api} from '../utils/Api';
import {CurrentUserContext} from '../contexts/currentUser/CurrentUserContext';
import {CardsContext} from "../contexts/cards/CardsContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    about: '',
    avatar: '',
    _id: '',
    cohort: ''
  });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(data => {
        const [userInfo, cardsInfo] = data;
        setCurrentUser(userInfo);
        setCards(cardsInfo);
      })
      .catch(error => console.log(error));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleUpdateUser(userInfo) {
    api.editUserInfo(userInfo)
      .then(data => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(error => console.log(error));
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(element => element._id === currentUser._id);

    if (isLiked) {
      api.dislikeCard(card._id)
        .then((newCard) => {
          setCards(cards.map((card) => card._id === newCard._id ? newCard : card));
        })
        .catch(error => console.log(error));

    } else {
      api.likeCard(card._id)
        .then((newCard) => {
          setCards(cards.map((card) => card._id === newCard._id ? newCard : card));
        })
        .catch(error => console.log(error));
    }
  }

  function handleCardDelete(card) {
    api.removeCard(card._id)
      .then(() => {
        setCards(cards.filter(element => element._id !== card._id))
      })
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <div className="page">
          <div className="page__container">
            <Header/>
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}
                  onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
            <Footer/>
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

            <PopupWithForm title='Новое место' name='card' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
                           buttonText='Создать'>
              <input type="text" name="title" required className="popup__input popup__input_text_name"
                     id="card-name-input" placeholder="Название" minLength="2" maxLength="30"/>
              <span className="popup__input-error name-input-error card-name-input-error"/>
              <input type="url" name="link" required className="popup__input popup__input_text_info"
                     id="card-link-input" placeholder="Ссылка на картинку"/>
              <span className="popup__input-error info-input-error card-link-input-error"/>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

            <PopupWithForm title='Вы уверены?' name='confirm' buttonText='Да'/>

            <PopupWithForm title='Обновить аватар' name='avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                           buttonText='Сохранить'>
              <input type="url" name="avatar" required className="popup__input popup__input_text_info"
                     id="avatar-url-input" placeholder="Ссылка на картинку"/>
              <span className="popup__input-error info-input-error avatar-url-input-error"/>
            </PopupWithForm>
          </div>
        </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
