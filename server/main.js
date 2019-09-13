import { onPageLoad } from 'meteor/server-render';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import theme from '../imports/theme';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { CssBaseline } from '@material-ui/core';
import App from '../imports/ui/App';

onPageLoad(sink => {
  const sheets = new ServerStyleSheets();
  // Render the component to a string.
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App/>
      </ThemeProvider>
    ),
  );

  // Grab the CSS from our sheets.
  const css = sheets.toString();

  sink.appendToHead(`<style id="jss-server-side">${css}</style>`);
  sink.renderIntoElementById("react-target", html);
});