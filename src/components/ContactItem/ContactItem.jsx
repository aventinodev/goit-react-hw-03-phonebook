import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onChange }) => {
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onChange(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactItem;
