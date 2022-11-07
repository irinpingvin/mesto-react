import Footer from "./Footer.js";

function Main(props) {
  return (
    <main className="content">
      <section className="profile section">
        <div className="profile__avatar-container">
          <img className="profile__avatar"/>
          <div className="profile__avatar-overlay">
            <button className="profile__avatar-edit-button" type="button" onClick={props.onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__personal-data">
          <div className="profile__name-editor">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__description"></p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="places section">
        <ul className="places__list"></ul>
      </section>
      <Footer />
    </main>
  );
}

export default Main;