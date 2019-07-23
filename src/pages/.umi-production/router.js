import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/login",
        "exact": true,
        "component": require('../login/index.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/about/models/about",
        "exact": true,
        "component": require('../about/models/about.js').default
      },
      {
        "path": "/film/domestic/edit/:id?",
        "exact": true,
        "component": require('../film/domestic/edit/$id$.js').default
      },
      {
        "path": "/film/domestic",
        "exact": true,
        "component": require('../film/domestic/index.js').default
      },
      {
        "path": "/film/foreign/edit/:id?",
        "exact": true,
        "component": require('../film/foreign/edit/$id$.js').default
      },
      {
        "path": "/film/foreign",
        "exact": true,
        "component": require('../film/foreign/index.js').default
      },
      {
        "path": "/film/models/film",
        "exact": true,
        "component": require('../film/models/film.js').default
      },
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.js').default
      },
      {
        "path": "/about",
        "exact": true,
        "component": require('../about/index.js').default
      },
      {
        "path": "/login/models/login",
        "exact": true,
        "component": require('../login/models/login.js').default
      },
      {
        "path": "/music/edit/:id?",
        "exact": true,
        "component": require('../music/edit/$id$.js').default
      },
      {
        "path": "/music",
        "exact": true,
        "component": require('../music/index.js').default
      },
      {
        "path": "/music/models/music",
        "exact": true,
        "component": require('../music/models/music.js').default
      },
      {
        "path": "/user/components/InputPicture",
        "exact": true,
        "component": require('../user/components/InputPicture.js').default
      },
      {
        "path": "/user/edit/:id?",
        "exact": true,
        "component": require('../user/edit/$id$.js').default
      },
      {
        "path": "/user",
        "exact": true,
        "component": require('../user/index.js').default
      },
      {
        "path": "/user/models/user",
        "exact": true,
        "component": require('../user/models/user.js').default
      },
      {
        "component": require('../404.js').default
      }
    ]
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
