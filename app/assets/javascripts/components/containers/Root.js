import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import PhoneBookApp from './PhoneBookApp';
import CounterApp from './CounterApp';
import configureStore from '../store/configureStore';
import { fetch_contacts } from '../actions/phone_book'

const store = configureStore();

export default class Root extends Component {
  componentWillMount() {
    store.dispatch(fetch_contacts);
  }
  render() {
    return (
      <Provider store={store}>
        <PhoneBookApp />
      </Provider>
    );
  }
}
