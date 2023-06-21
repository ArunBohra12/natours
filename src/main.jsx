import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// imported like so to avoid name conflicts with new version
// All imports from v1 will be removed later on
import { BrowserRouter as BrowserRouterV5, Switch, Route as RouteV5 } from 'react-router-dom-v5';
let AppV1 = null;
if (!window.location.href.includes('/v2')) {
  AppV1 = React.lazy(() => import('./v1/App'));
}

import { UserProvider } from './v1/context/userContext';

// Imports for new version
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {AppV1 && (
      <UserProvider>
        <BrowserRouterV5>
          <Switch>
            <RouteV5 exact path='/'>
              <Suspense fallback={<div>Loading...</div>}>
                <AppV1 />
              </Suspense>
            </RouteV5>
          </Switch>
        </BrowserRouterV5>
      </UserProvider>
    )}

    <BrowserRouter>
      <Routes>
        <Route path='/v2' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
