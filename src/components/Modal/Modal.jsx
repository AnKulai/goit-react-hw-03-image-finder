import React from 'react';
import PropTypes from 'prop-types';
import { Popup, PopupBody } from './Modal.styled';

const Modal = ({ url }) => {
  return (
    <Popup>
      <PopupBody>
        <img width="100%" src={url} alt="" />
      </PopupBody>
    </Popup>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Modal;
