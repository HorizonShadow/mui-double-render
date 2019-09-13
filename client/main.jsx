import React from 'react';
import { hydrate, render, unmountComponentAtNode } from 'react-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { onPageLoad } from 'meteor/server-render';
import { CssBaseline } from '@material-ui/core';
import theme from '../imports/theme';
import App from '../imports/ui/App';

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

onPageLoad(() => {
  const tmp = document.createElement('div');
  render(<Main />, tmp);
  unmountComponentAtNode(tmp);
  hydrate(<Main />, document.getElementById('react-target'));
});
