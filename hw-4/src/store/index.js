import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const data = {
  page1: [
    {
      id: 1,
      date: '28.03.2020',
      category: 'Food',
      value: 169
    },
    {
      id: 2,
      date: '24.03.2020',
      category: 'Transport',
      value: 360
    },
    {
      id: 3,
      date: '24.03.2020',
      category: 'Food',
      value: 532
    }
  ]
}

export default new Vuex.Store({
  state: {
    paymentsList: {},
    categoryList: [],
    currentPage: 1
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = {
        ...state.paymentsList,
        ...payload
      }
    },
    setCategoryList (state, payload) {
      state.categoryList = payload
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    },
    setCurrentPage (state, payload) {
      state.currentPage = payload
    }
  },
  actions: {
    fetchData ({ commit, state }, { page }) {
      const pageKey = `page${page}`
      if (state.paymentsList[pageKey]) {
        return
      }

      return new Promise(resolve => {
        setTimeout(() => {
          const res = {}
          res[pageKey] = data[`page${page}`]
          resolve(res)
        }, 1000)
      }).then(res => {
        commit('setPaymentsListData', res)
      })
    },
    fetchCategoryList ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            'Food', 'Transport', 'Education', 'Sport'
          ])
        }, 1000)
      }).then(res => {
        commit('setCategoryList', res)
      })
    },
    addPayment ({ commit }, { payment }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const pages = Object.keys(data)
            .map(key => Number(key.replace('page', '')))
          let maxPage = Math.max(...pages)
          const list = data[`page${maxPage}`] || []
          const maxId = Math.max(...list.map(a => a.id), 0)
          const newPayment = {
            ...payment,
            id: maxId + 1
          }
          if (list.length < 3) {
            list.push(newPayment)
            const res = {}
            res[`page${maxPage}`] = data[`page${maxPage}`]
            resolve(res)
          } else {
            maxPage++
            const res = {}
            data[`page${maxPage}`] = [newPayment]
            res[`page${maxPage}`] = [newPayment]
            resolve(res)
          }
        }, 250)
      }).then(res => {
        commit('setPaymentsListData', res)
      })
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList[`page${state.currentPage}`],
    getPaymentsListFullPrice: state => {
      const list = state.paymentsList[`page${state.currentPage}`] || []
      return list.reduce((res, cur) => res + cur.value, 0)
    },
    getCategoryList: state => state.categoryList,
    getCurrentPage: state => state.currentPage
  }
})
