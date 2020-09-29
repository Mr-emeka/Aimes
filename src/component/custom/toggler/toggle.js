// Toggle.js
import React from 'react'
import { func, string } from 'prop-types';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from '../../../assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '../../../assets/icons/sun.svg';
import ToggleContainer from './toggle.styled'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;