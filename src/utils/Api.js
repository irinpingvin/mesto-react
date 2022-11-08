import {API_CONFIG} from "./constants.js";

class Api {
  #userUrl;
  #cardsUrl;
  #headers;

  constructor({userUrl, cardsUrl, headers}) {
    this.#userUrl = userUrl;
    this.#cardsUrl = cardsUrl;
    this.#headers = headers;
  }

  #handleServerResponse(promise) {
    return promise.then(response => {
      if (response.ok)
        return response.json();
      return Promise.reject(`Ошибка: ${response.status}`);
    })
  }

  getUserInfo() {
    return this.#handleServerResponse(fetch(this.#userUrl, {headers: this.#headers}));
  }

  editUserInfo(userInfo) {
    return this.#handleServerResponse(fetch(this.#userUrl, {
      method: 'PATCH',
      headers: this.#headers,
      body: JSON.stringify(userInfo)
    }));
  }

  editUserAvatar(avatarInfo) {
    return this.#handleServerResponse(fetch(`${this.#userUrl}/avatar`, {
      method: 'PATCH',
      headers: this.#headers,
      body: JSON.stringify(avatarInfo)
    }));
  }

  getCards() {
    return this.#handleServerResponse(fetch(this.#cardsUrl, {headers: this.#headers}));
  }

  addCard(cardInfo) {
    return this.#handleServerResponse(fetch(this.#cardsUrl, {
      method: 'POST',
      headers: this.#headers,
      body: JSON.stringify(cardInfo)
    }));
  }

  removeCard(id) {
    return this.#handleServerResponse(fetch(`${this.#cardsUrl}/${id}`, {
      method: 'DELETE',
      headers: this.#headers
    }));
  }

  likeCard(id) {
    return this.#handleServerResponse(fetch(`${this.#cardsUrl}/${id}/likes`, {
      method: 'PUT',
      headers: this.#headers
    }));
  }

  dislikeCard(id) {
    return this.#handleServerResponse(fetch(`${this.#cardsUrl}/${id}/likes`, {
      method: 'DELETE',
      headers: this.#headers
    }));
  }
}

export const api = new Api(API_CONFIG);