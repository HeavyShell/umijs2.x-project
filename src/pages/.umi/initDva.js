import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  ...((require('E:/work/webRTC/aaa/umijs-project/src/dva.js').config || (() => ({})))()),
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'app', ...(require('E:/work/webRTC/aaa/umijs-project/src/models/app.js').default) });
app.model({ namespace: 'home', ...(require('E:/work/webRTC/aaa/umijs-project/src/models/home.js').default) });
app.model({ namespace: 'login', ...(require('E:/work/webRTC/aaa/umijs-project/src/pages/login/models/login.js').default) });
app.model({ namespace: 'about', ...(require('E:/work/webRTC/aaa/umijs-project/src/pages/about/models/about.js').default) });
app.model({ namespace: 'film', ...(require('E:/work/webRTC/aaa/umijs-project/src/pages/film/models/film.js').default) });
app.model({ namespace: 'music', ...(require('E:/work/webRTC/aaa/umijs-project/src/pages/music/models/music.js').default) });
app.model({ namespace: 'user', ...(require('E:/work/webRTC/aaa/umijs-project/src/pages/user/models/user.js').default) });
