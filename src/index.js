import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/index";


ReactDOM.render(
<ThemeProvider theme={theme}>
	<App />
</ThemeProvider>

, document.getElementById('root'));
