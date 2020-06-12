import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { LoginPage } from './pages/login';
import "./i18n";

// 1. hello 你好
const theme = createMuiTheme({ // 风格化
  typography: {
    useNextVariants: true
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={LoginPage} />
      </Switch>
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
)
