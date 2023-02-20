import React from 'react';
import PropTypes from 'prop-types';
import { CustomSection } from './Section.styled';

const Section = ({ children }) => {
  return <CustomSection>{children}</CustomSection>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
