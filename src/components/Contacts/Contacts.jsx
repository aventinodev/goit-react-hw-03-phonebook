import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './Contacts.styled';

export const Contacts = ({ contacts, onChange }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onChange={onChange}
        ></ContactItem>
      ))}
    </List>
  );
};

Contacts.propTypes = {
  onChange: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default Contacts;
