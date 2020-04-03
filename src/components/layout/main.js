/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import './base.css';
import GlobalStyle from './global.css';
import theme from 'theme/main';

const Layout = ({ children }) => {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        {children}
      </main>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
