import '@fake-db';
import React from 'react';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
// import history from '@history';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Auth } from './auth';
import withAppProviders from './withAppProviders';
// import axios from 'axios';

import config from '../../config.json';

/**
 * Axios HTTP Request defaults
 */
// axios.defaults.baseURL = "";
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

const App = () => {
  return (
    <Auth>
      {/* <Router history={history}> */}
      <Router basename={config.baseUrl}>
        <FuseAuthorization>
          <FuseTheme>
            <SnackbarProvider
              maxSnack={5}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              classes={{
                containerRoot:
                  'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
              }}
            >
              <FuseLayout />
            </SnackbarProvider>
          </FuseTheme>
        </FuseAuthorization>
      </Router>
    </Auth>
  );
};

export default withAppProviders(App)();
