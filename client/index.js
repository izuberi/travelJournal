// File: Imported our React component and renders it out 

import React from 'react';
import { render } from 'react-dom';
import App from './App';

// specifically tell it where to render it out 
render (<App/>, document.querySelector("#root"));
