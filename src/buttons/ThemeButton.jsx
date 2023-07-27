import * as React from 'react';

import IconButton  from '@mui/material/IconButton';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeButton = (props) => {

  let theme = props.label;

  return (
    <IconButton variant="outlined"
      onClick={() => {
        props.setTheme(theme === "light" ? "dark" : "light");
      }}>
      {theme === "light" ? <Brightness4Icon/> : <Brightness7Icon/>}
    </IconButton>
  );
}

export default ThemeButton;