import headerLogoPath from './images/logo.svg';

function App() {
  return (
    <body className="page">
    <div className="page__container">
      <header className="header">
        <img src={headerLogoPath} alt="Логотип сайта - слово Mesto" className="header__logo"/>
      </header>
      <main className="content">
        <section className="profile section">
          <div className="profile__avatar-container">
            <img className="profile__avatar"/>
            <div className="profile__avatar-overlay">
              <button className="profile__avatar-edit-button" type="button"></button>
            </div>
          </div>
          <div className="profile__personal-data">
            <div className="profile__name-editor">
              <h1 className="profile__name"></h1>
              <button className="profile__edit-button" type="button"></button>
            </div>
            <p className="profile__description"></p>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>
        <section className="places section">
          <ul className="places__list"></ul>
        </section>
        <footer className="footer section">
          <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
        </footer>
      </main>

      <div className="popup popup_type_profile">
        <div className="popup__container popup__container_type_user-input">
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form" name="popup-submit-form" noValidate>
            <input type="text" name="name" required className="popup__input popup__input_text_name" id="name-input"
                   minLength="2" maxLength="40"/>
              <span className="popup__input-error name-input-error"></span>
              <input type="text" name="info" required className="popup__input popup__input_text_info" id="info-input"
                     minLength="2" maxLength="200"/>
                <span className="popup__input-error info-input-error"></span>
                <button type="submit" className="popup__submit-button">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_card">
        <div className="popup__container popup__container_type_user-input">
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form" name="popup-submit-form" noValidate>
            <input type="text" name="title" required className="popup__input popup__input_text_name"
                   id="card-name-input" placeholder="Название" minLength="2" maxLength="30"/>
              <span className="popup__input-error name-input-error card-name-input-error"></span>
              <input type="url" name="link" required className="popup__input popup__input_text_info"
                     id="card-link-input" placeholder="Ссылка на картинку"/>
                <span className="popup__input-error info-input-error card-link-input-error"></span>
                <button type="submit" className="popup__submit-button">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="popup__container">
          <button className="popup__close-button"></button>
          <figure className="popup__figure">
            <img className="popup__picture"/>
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </div>

      <div className="popup popup_type_confirm">
        <div className="popup__container popup__container_type_confirm">
          <button className="popup__close-button"></button>
          <p className="popup__confirm-question">Вы уверены?</p>
          <button type="submit" className="popup__submit-button">Да</button>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container popup__container_type_user-input">
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form" name="popup-submit-form" noValidate>
            <input type="url" name="avatar" required className="popup__input popup__input_text_info"
                   id="avatar-url-input" placeholder="Ссылка на картинку"/>
              <span className="popup__input-error info-input-error avatar-url-input-error"></span>
              <button type="submit" className="popup__submit-button">Сохранить</button>
          </form>
        </div>
      </div>
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
    </body>
);
}

export default App;
