<template>
  <div class="calc">
      <div class="main">
          <input v-model="op1" type="number"/>
          <input v-model="op2" type="number"/>
          = {{ result }}
      </div>
      <div class="keyboard">
          <button @click="sum">+</button>
          <button @click="sub">-</button>
          <button @click="div">/</button>
          <button @click="multi">*</button>
          <button @click="exponentiation">^</button>
          <button @click="integerDivision">Целочисленное деление </button>
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
      result: 0,
      user: {
        role: 'Admin',
        grant: {
          isAdmin: true
        }
      }
    }
  },
  methods: {
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
      if (op2 === 0) {
        alert('Нельзя делить на ноль')
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
        alert('Нельзя делить на ноль')
        return
      }
      this.result = Math.floor(op1 / op2)
    }
  }
}
</script>
