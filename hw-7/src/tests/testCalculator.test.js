import { mount } from '@vue/test-utils'
import Calc from '../components/Calc.vue'

describe('Test Calc', () => {
  // Тест ввода данных в поля
  it('Test first operand input value', () => {
    const wrapper = mount(Calc)
    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('1')
    expect(wrapper.vm.op1).toBe('1')
  })

  it('Test second operand input value', () => {
    const wrapper = mount(Calc)
    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')
    expect(wrapper.vm.op2).toBe('2')
  })

  // Тест кнопки '+'
  it('Test method sum', () => {
    const wrapper = mount(Calc)

    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('1')

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const methodSum = wrapper.find('button[name="+"]')
    methodSum.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  // Тест кнопки "-"
  it('Test method sub', () => {
    const wrapper = mount(Calc)

    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('4')

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const methodSub = wrapper.find('button[name="-"]')
    methodSub.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })

  // Тест кнопки "/"
  it('Test method div', () => {
    const wrapper = mount(Calc)

    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('6')

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const methodDiv = wrapper.find('button[name="/"]')
    methodDiv.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  // Тест кнопки "*"
  it('Test method multi', () => {
    const wrapper = mount(Calc)

    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('2')

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const methodMulti = wrapper.find('button[name="*"]')
    methodMulti.trigger('click')

    expect(wrapper.vm.result).toBe(4)
  })

  // Тест кнопки "^"
  it('Test method exponentiation', () => {
    const wrapper = mount(Calc)

    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('6')

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('3')

    const methodExponentiation = wrapper.find('button[name="^"]')
    methodExponentiation.trigger('click')

    expect(wrapper.vm.result).toBe(216)
  })

  // Тест кнопки "Целочисленное деление"
  it('Test method integerDivision', () => {
    const wrapper = mount(Calc)

    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('5')

    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const integerDivision = wrapper.find('button[name="Целочисленное деление"]')
    integerDivision.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })

  // Тесты кнопок для операнда 1
  // Кнопка 0
  it("Test keyboard button '0' for operand 1", () => {
    testKeyboardButtonOp1(0)
  })

  // Кнопка 1
  it("Test keyboard button '1' for operand 1", () => {
    testKeyboardButtonOp1(1)
  })

  // Кнопка 2
  it("Test keyboard button '2' for operand 1", () => {
    testKeyboardButtonOp1(2)
  })

  // Кнопка 3
  it("Test keyboard button '3' for operand 1", () => {
    testKeyboardButtonOp1(3)
  })

  // Кнопка 4
  it("Test keyboard button '4' for operand 1", () => {
    testKeyboardButtonOp1(4)
  })

  // Кнопка 5
  it("Test keyboard button '5' for operand 1", () => {
    testKeyboardButtonOp1(5)
  })

  // Кнопка 6
  it("Test keyboard button '6' for operand 1", () => {
    testKeyboardButtonOp1(6)
  })

  // Кнопка 7
  it("Test keyboard button '7' for operand 1", () => {
    testKeyboardButtonOp1(7)
  })

  // Кнопка 8
  it("Test keyboard button '8' for operand 1", () => {
    testKeyboardButtonOp1(8)
  })

  // Кнопка 9
  it("Test keyboard button '9' for operand 1", () => {
    testKeyboardButtonOp1(9)
  })

  // Кнопка удаления
  it("Test keyboard button 'backspace' for operand 1", () => {
    const wrapper = mount(Calc)

    const checkbox = wrapper.find('#checkbox')
    checkbox.trigger('click')

    const operandSelector1 = wrapper.find('input#op1')
    operandSelector1.setChecked(true)

    const keyboardOperand0 = wrapper.find('button[name="keyboard-backspace"]')
    keyboardOperand0.trigger('click')

    expect(wrapper.vm.op1).toBe('')
  })

  // Тесты кнопок для операнда 2
  // Кнопка 0
  it("Test keyboard button '0' for operand 2", () => {
    testKeyboardButtonOp2(0)
  })

  // Кнопка 1
  it("Test keyboard button '1' for operand 2", () => {
    testKeyboardButtonOp2(1)
  })

  // Кнопка 2
  it("Test keyboard button '2' for operand 2", () => {
    testKeyboardButtonOp2(2)
  })

  // Кнопка 3
  it("Test keyboard button '3' for operand 2", () => {
    testKeyboardButtonOp2(3)
  })

  // Кнопка 4
  it("Test keyboard button '4' for operand 2", () => {
    testKeyboardButtonOp2(4)
  })

  // Кнопка 5
  it("Test keyboard button '5' for operand 2", () => {
    testKeyboardButtonOp2(5)
  })

  // Кнопка 6
  it("Test keyboard button '6' for operand 2", () => {
    testKeyboardButtonOp2(6)
  })

  // Кнопка 7
  it("Test keyboard button '7' for operand 2", () => {
    testKeyboardButtonOp2(7)
  })

  // Кнопка 8
  it("Test keyboard button '8' for operand 2", () => {
    testKeyboardButtonOp2(8)
  })

  // Кнопка 9
  it("Test keyboard button '9' for operand 2", () => {
    testKeyboardButtonOp2(9)
  })

  // Кнопка удаления
  it("Test keyboard button 'backspace' for operand 2", () => {
    const wrapper = mount(Calc)

    const checkbox = wrapper.find('#checkbox')
    checkbox.trigger('click')

    const operandSelector1 = wrapper.find('input#op2')
    operandSelector1.setChecked(true)

    const keyboardOperand0 = wrapper.find('button[name="keyboard-backspace"]')
    keyboardOperand0.trigger('click')

    expect(wrapper.vm.op2).toBe('')
  })
})

// Тест переключения операндов
function testKeyboardButtonOp1 (button) {
  const wrapper = mount(Calc)

  const checkbox = wrapper.find('#checkbox')
  checkbox.trigger('click')

  const operandSelector1 = wrapper.find('input#op1')
  operandSelector1.setChecked(true)

  const keyboardOperand0 = wrapper.find(`button[name="keyboard${button}"]`)
  keyboardOperand0.trigger('click')

  expect(wrapper.vm.op1).toBe(`0${button}`)
}

function testKeyboardButtonOp2 (button) {
  const wrapper = mount(Calc)

  const checkbox = wrapper.find('#checkbox')
  checkbox.trigger('click')

  const operandSelector1 = wrapper.find('input#op2')
  operandSelector1.setChecked(true)

  const keyboardOperand0 = wrapper.find(`button[name="keyboard${button}"]`)
  keyboardOperand0.trigger('click')

  expect(wrapper.vm.op2).toBe(`0${button}`)
}
