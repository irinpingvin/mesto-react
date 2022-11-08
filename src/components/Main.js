import React from "react";
import Footer from "./Footer.js";
import {api} from "../utils/Api.js";

function Main(props) {
  const [userInfo, setUserInfo] = React.useState({userName: '', userDescription: '', userAvatar: ''});

  React.useEffect(() => {
    api.getUserInfo().then(data => {
      setUserInfo({
        userName: data.name,
        userDescription: data.about,
        userAvatar: data.avatar
      })
    })
    .catch(error => console.log(error));
  })

  return (
    <main className="content">
      <section className="profile section">
        <div className="profile__avatar-container">
          <img className="profile__avatar" style={{ backgroundImage: `url(${userInfo.userAvatar})` }}/>
          <div className="profile__avatar-overlay">
            <button className="profile__avatar-edit-button" type="button" onClick={props.onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__personal-data">
          <div className="profile__name-editor">
            <h1 className="profile__name">{userInfo.userName}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__description">{userInfo.userDescription}</p>
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