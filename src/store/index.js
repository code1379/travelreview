import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let defaultCity = '上海';

try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (err) {
  console.log(err);
}

export default new Vuex.Store({
  state: {
    currentCity: defaultCity,
  },
  mutations: {
    changeCity(state, city) {
      state.currentCity = city;
      try {
        localStorage.city = city;
      } catch (err) {
        console.log('mutations err on save to localstorage');
      }
    },
  },
  actions: {
    asyncChangeCity(context, city) {
      context.commit('changeCity', city);
    },
  },
  getters: {
    currentCity(state) {
      return state.currentCity;
    },
  },
  modules: {},
});
