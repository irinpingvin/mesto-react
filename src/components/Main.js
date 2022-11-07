import Footer from "./Footer.js";

function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_card').classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile section">
        <div className="profile__avatar-container">
          <img className="profile__avatar"/>
          <div className="profile__avatar-overlay">
            <button className="profile__avatar-edit-button" type="button" onClick={handleEditAvatarClick}></button>
          </div>
        </div>
        <div className="profile__personal-data">
          <div className="profile__name-editor">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__description"></p>
        </div>
        <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="places section">
        <ul className="places__list"></ul>
      </section>
      <Footer />
    </main>
  );
}

export default Main;