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
    val = val + ''
    let val0 = val.split(",");
    if (val0[1]) {
      if (val0[0] > 1) {
        var url = '/api/Blog/wiki/listAll/' + val0[0] + '?mark=' + val0[1]
      } else {
        url = '/api/Blog/wiki/listAll/1' + '?mark=' + val0[1];
      }
    } else {
      if (val0[0] > 1) {
        var url = '/api/Blog/wiki/listAll/' + val0[0];
      } else {
        url = '/api/Blog/wiki/listAll/1';
      }
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
      return axios.get('/api/Blog/wiki/listHot').then(res => {
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
