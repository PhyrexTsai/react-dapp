import React from 'react';
import PropTypes from 'prop-types';
import {h2d} from './lib/addressSearchHelper';

const AddressBalance = (props) => (
  <div>Balance: {h2d(props.balance)}</div>
);
export default AddressBalance;

AddressBalance.propTypes = {
  balance: PropTypes.string.isRequired
};
