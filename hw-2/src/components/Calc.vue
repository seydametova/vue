<template>
  <div class="calc">
    <div class="main">
        <input v-model="op1" type="number"/>
        <input v-model="op2" type="number"/>
        <br/>
        = {{ result }}
        <br/>
        = {{ fibResult }}
    </div>
    <div class="error" v-if="error">
      Ошибка: {{ error }}
    </div>
    <div class="message">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else>Просто условие</template>
    </div>
    <div class="keyboard">
      <button v-for="operand in operands"
              :key="operand"
              :title="operand"
              @click="calculate(operand)">
        {{ operand }}
      </button>
    </div>
    <div class="logs">
      <div v-for="(log, id) in logs" :key="id">
        {{ log }}
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
      result: 0,
      fibResult: 0,
      logs: {}
    }
  },
  methods: {
    fib (n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2)
    },
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
      const key = Date.now()
      const value = `${this.op1}${operation}${this.op2} = ${this.result}`

      this.$set(this.logs, key, value)
    },
    sum () {
      const { op1, op2 } = this
      this.result = Number(op1) + Number(op2)
      this.fibResult = this.fib1 + this.fib2
    },
    sub () {
      const { op1, op2 } = this
      this.result = op1 - op2
      this.fibResult = this.fib1 - this.fib2
    },
    div () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'Нельзя делить на 0'
        return
      }
      this.result = op1 / op2
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
      if (op2 === 0) {
        this.error = 'Нельзя делить на 0'
        return
      }
      this.result = Math.floor(op1 / op2)
    }
  },
  computed: {
    fib1 () {
      return this.fib(this.op1)
    },
    fib2 () {
      return this.fib(this.op2)
    },
    arrayFilter () {
      return this.myCollection.filter(i => i)
    }
  }
}
</script>
