import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const itemsPerPage = 10

let data = [
  {
    id: 1,
    date: '28.03.2020',
    category: 'Food',
    value: 500
  },
  {
    id: 2,
    date: '24.03.2020',
    category: 'Sport',
    value: 280
  },
  {
    id: 3,
    date: '24.03.2020',
    category: 'Transport',
    value: 156
  },
  {
    id: 4,
    date: '28.03.2020',
    category: 'Food',
    value: 605
  },
  {
    id: 5,
    date: '24.03.2020',
    category: 'Sport',
    value: 539
  },
  {
    id: 6,
    date: '24.03.2020',
    category: 'Education',
    value: 304
  },
  {
    id: 7,
    date: '28.03.2020',
    category: 'Education',
    value: 1069
  },
  {
    id: 8,
    date: '24.03.2020',
    category: 'Sport',
    value: 100
  },
  {
    id: 9,
    date: '24.03.2020',
    category: 'Transport',
    value: 40
  },
  {
    id: 10,
    date: '24.03.2020',
    category: 'Education',
    value: 1500
  },
  {
    id: 11,
    date: '28.03.2020',
    category: 'Food',
    value: 810
  },
  {
    id: 12,
    date: '24.03.2020',
    category: 'Transport',
    value: 98
  },
  {
    id: 13,
    date: '24.03.2020',
    category: 'Food',
    value: 650
  }
]

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
    currentPage: 1,
    totalCount: 0
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    setCategoryList (state, payload) {
      state.categoryList = payload
    },
    setTotalCount (state, payload) {
      state.totalCount = payload
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    },
    editPayment (state, payload) {
      const index = state.paymentsList.findIndex(a => a.id === payload.id)
      if (index >= 0) {
        state.paymentsList = [
          ...state.paymentsList.slice(0, index),
          payload,
          ...state.paymentsList.slice(index + 1)
        ]
      }
    },
    setCurrentPage (state, payload) {
      state.currentPage = payload
    }
  },
  actions: {
    fetchData ({ commit, state }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(data.slice((state.currentPage - 1) * itemsPerPage, state.currentPage * itemsPerPage))
        }, 1000)
      }).then(res => {
        commit('setTotalCount', data.length)
        commit('setPaymentsListData', res)
      })
    },
    fetchCategoryList ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            'Food', 'Transport', 'Education', 'Sport', 'Entertainment'
          ])
        }, 1000)
      }).then(res => {
        commit('setCategoryList', res)
      })
    },
    addPayment ({ commit, dispatch }, { payment }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const id = Math.max(...data.map(a => a.id), 0) + 1
          data.push({
            ...payment,
            id
          })
          resolve()
        }, 250)
      }).then(res => {
        return dispatch('fetchData')
      })
    },
    editPayment ({ commit }, { payment }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const index = data.findIndex(a => a.id === payment.id)
          if (index >= 0) {
            data = [
              ...data.slice(0, index),
              payment,
              ...data.slice(index + 1)
            ]
          }
          resolve(payment)
        })
      }).then(res => commit('editPayment', res))
    },
    deletePayment ({ dispatch }, { id }) {
      return new Promise(resolve => {
        setTimeout(() => {
          data = data.filter(a => a.id !== id)
          resolve()
        }, 250)
      }).then(res => {
        return dispatch('fetchData')
      })
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListFullPrice: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
    },
    getCategoryList: state => state.categoryList,
    getCurrentPage: state => state.currentPage,
    getTotalPages: state => Math.ceil(state.totalCount / itemsPerPage)
  }
})
