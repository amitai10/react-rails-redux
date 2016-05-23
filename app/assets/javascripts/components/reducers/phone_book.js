//import { FETCH_CONTACTS } from '../actions/phone_book';

export default function phone_book(state = [], action) {
  switch (action.type) {
  case 'FETCH_CONTACTS':
    return [];
    case 'RECIEVE_CONTACTS':
      debugger
      return  action.phone_book;
  default:
    return state;
  }
}
