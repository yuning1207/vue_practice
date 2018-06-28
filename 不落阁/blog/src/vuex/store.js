import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const state = {
  datalist: [],
  pageinfo: {},
  listhot: []
}
const mutations = {
  setdata(state, params) {
    state.datalist = params.data.list;
  },
  setpage(state, params) {
    state.pageinfo = params.data.pageInfo;
  },
  sethot(state, params) {
    state.listhot = params.data;
  }
}

const getters = {}
const actions = {
  setMutation(context, val) {
    if (val > 1) {
      var url = '/api/Blog/listAll/' + val
    } else {
      url = '/api/Blog/listAll/1'
    }

    function getpage() {
      return axios.get(url)
        .then(res => {
          if (res.data.status == 0) {
            context.commit('setdata', res.data);
            context.commit('setpage', res.data);
          }
        }).catch(err => {
          console.log(err);
          alert('网络错误，不能访问');
        })
    }

    function gethot() {
      return axios.get('/api/Blog/listHot').then(res => {
        if (res.data.status == 0) {
          context.commit('sethot', res.data);
        }
      }).catch(err => {
        console.log(err);
        alert('网络错误，不能访问');
      })
    }
    Promise.all([getpage(), gethot()]).then();
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
