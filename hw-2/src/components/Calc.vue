<template>
  <div class="calc">
    <div class="main">
        <input v-model="op1" type="number"/>
        <input v-model="op2" type="number"/>
        = {{ result }}
    </div>
    <div class="error" v-if="error">
      Ошибка: {{ error }}
    </div>
   <div class="keyboard">
      <button v-for="operand in operands"
              :key="operand"
              :title="operand"
              @click="calculate(operand)"
              class="operators">
        {{ operand }}
      </button>
    </div>
    <div class="buttonCheckbox">
      <input type="checkbox" id="checkbox" v-model="show" v-on:click="show=!show">
      Отобразить экранную клавиатуру
    </div>
    <div class="showElements"  v-show="show">
      <div class="buttonNumber">
        <button v-for="operand1 in operands1"
                :key="operand1"
                :title="operand1"
                @click="addChar(operand1)"
                class="numbers">
          {{ operand1 }}
        </button>
        <button @click="removeChar()">
          &#8592;
        </button>
      </div>
      <div class="operands">
        <input type="radio" id="op1" value="op1" v-model="selectedOperand">
        <label for="op1">Operand 1</label>
        <input type="radio" id="op2" value="op2" v-model="selectedOperand">
        <label for="op2">Operand 2</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      op1: 0,
      op2: 0,
      error: '',
      operands: ['+', '-', '/', '*', '^', 'Целочисленное деление'],
      operands1: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      checked: 'Отобразить экранную клавиатуру',
      result: 0,
      logs: {},
      selectedOperand: 'op1',
      show: false
    }
  },
  methods: {
    calculate (operation = '+') {
      this.error = ''
      switch (operation) {
        case '+':
          this.sum()
          break
        case '-':
          this.sub()
          break
        case '/':
          this.div()
          break
        case '*':
          this.multi()
          break
        case '^':
          this.exponentiation()
          break
        case 'Целочисленное деление':
          this.integerDivision()
          break
      }
    },
    sum () {
      const { op1, op2 } = this
      this.result = Number(op1) + Number(op2)
    },
    sub () {
      const { op1, op2 } = this
      this.result = op1 - op2
    },
    div () {
      const { op1, op2 } = this
      if (Number(op2) === 0) {
        this.error = 'Нельзя делить на 0'
        return
      }
      this.result = (op1 / op2).toFixed(2)
    },
    multi () {
      const { op1, op2 } = this
      this.result = op1 * op2
    },
    exponentiation () {
      const { op1, op2 } = this
      this.result = Math.pow(op1, op2)
    },
    integerDivision () {
      const { op1, op2 } = this
      if (Number(op2) === 0) {
        this.error = 'Нельзя делить на 0'
        return
      }
      this.result = Math.floor(op1 / op2)
    },
    addChar (char) {
      switch (this.selectedOperand) {
        case 'op1':
          this.op1 += char
          break
        case 'op2':
          this.op2 += char
      }
    },
    removeChar () {
      switch (this.selectedOperand) {
        case 'op1': {
          const str1 = this.op1 + ''
          this.op1 = str1.substring(0, str1.length - 1)
          break
        }
        case 'op2': {
          const str2 = this.op2 + ''
          this.op2 = str2.substring(0, str2.length - 1)
          break
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.keyboard {
  display: flex;
  justify-content: center;
  margin: 10px 0 0;

  .operators {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
}
.buttonCheckbox {
  margin: 60px 0 10px 0;
}
.buttonNumber {
  display: flex;
  justify-content: center;

  .numbers {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
}
.operands {
  margin: 10px 0 0;
}
</style>
