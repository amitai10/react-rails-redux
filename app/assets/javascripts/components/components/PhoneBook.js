import React, { Component, PropTypes } from 'react';

class PhoneBook extends Component {
  render() {
    const { phone_book, fetchContacts } = this.props;
    return (
      <div>
        <ul>
          {phone_book.map((contact, i) =>
            <li key={i}>{contact.name} | {contact.email} | {contact.email}</li>
          )}
        </ul>
        <p>
          <button onClick={fetchContacts}>+</button>
        </p>
      </div>

    );
  }
}

PhoneBook.propTypes = {
  phone_book: PropTypes.array.isRequired
};

export default PhoneBook;
