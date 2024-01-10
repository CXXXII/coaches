import { createStore } from 'vuex';
import authModule from './modules/auth/index.js';
import coachesModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestModule,
    auth: authModule,
  },
});

export default store;
