import { createLocalVue, mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import AddPaymentForm from '../components/AddPaymentForm.vue'

describe('Test AddPaymentForm', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let vuetify
  let store

  beforeEach(() => {
    vuetify = new Vuetify()
    store = new Vuex.Store({
      state: {
        paymentsList: [],
        categoryList: ['Food', 'Transport', 'Education', 'Sport', 'Entertainment'],
        currentPage: 1,
        totalCount: 0
      },
      getters: {
        getPaymentsList: state => state.paymentsList,
        getPaymentsListFullPrice: state => {
          return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
        },
        getCategoryList: state => state.categoryList,
        getCurrentPage: state => state.currentPage,
        getTotalPages: state => Math.ceil(state.totalCount / 10)
      }
    })
  })

  // Тестирование формы на выбор даты
  it('Test date picker', () => {
    const wrapper = mount(AddPaymentForm, { localVue, vuetify, store })

    const inputDate = wrapper.find('#add-payment-form-date')
    inputDate.setValue('2021-06-21')
    expect(wrapper.vm.data.date).toBe('2021-06-21')
  })

  // Тестирование формы на выбор категории
  it('Test category picker', () => {
    const wrapper = mount(AddPaymentForm, { localVue, vuetify, store })

    const inputCategory = wrapper.find('#add-payment-form-category')
    inputCategory.setValue('Sport')
    expect(wrapper.vm.data.category).toBe('Sport')
  })

  // Тестирование формы на выбор суммы
  it('Test value picker', () => {
    const wrapper = mount(AddPaymentForm, { localVue, vuetify, store })

    const inputValue = wrapper.find('#add-payment-form-value')
    inputValue.setValue('1525')
    expect(wrapper.vm.data.value).toBe('1525')
  })

  // Тестирование кнопки
  it('Test invalid data saving', () => {
    const wrapper = mount(AddPaymentForm, { localVue, vuetify, store })

    const addButton = wrapper.find('#add-payment-form-button')
    addButton.trigger('click')
    expect(wrapper.emitted('addPayment')).toBeFalsy()
  })

  it('Test add data', () => {
    const wrapper = mount(AddPaymentForm, { localVue, vuetify, store })

    const inputValue = wrapper.find('#add-payment-form-value')
    inputValue.setValue('1525')

    const inputCategory = wrapper.find('#add-payment-form-category')
    inputCategory.setValue('Sport')

    const addButton = wrapper.find('#add-payment-form-button')
    addButton.trigger('click')
    expect(wrapper.emitted('addPayment')).toBeTruthy()
  })

  it('Test edit data', () => {
    const wrapper = mount(AddPaymentForm, {
      localVue,
      vuetify,
      store,
      propsData: {
        data: {
          date: '',
          category: 'Sport',
          value: '1525',
          id: '1'
        }
      }
    })

    const addButton = wrapper.find('#add-payment-form-button')
    addButton.trigger('click')
    expect(wrapper.emitted('editPayment')).toBeTruthy()
  })
})
