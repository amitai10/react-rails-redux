import fetch from 'isomorphic-fetch'
export const FETCH_CONTACTS = 'FETCH_CONTACTS';


export function fetch_contacts() {
  return {
    type: FETCH_CONTACTS
  };
}

export function receive_contacts(json) {
  return {
    type: 'RECIEVE_CONTACTS',
    phone_book: json
  };
}

export function fetchContacts(subreddit) {
  return dispatch => {
    dispatch(fetch_contacts())
    return fetch(`http://localhost:3000/contacts.json`)
      .then(response => response.json())
      .then(json => dispatch(receive_contacts(json)))
  }
}
