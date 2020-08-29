new Vue({
  el:'#app',
  data: {
    rate: '',
    amount:'',
    sumTemplate: ''
  },
  methods: {
    calc: function(t){
      let targetDom = document.querySelector(`[name=${t}]`)
      let result = function() {
        return new Function('return ' + targetDom.value)()
      }
      this[t] = result()
    },calc_reverse: function(t){
      let targetValue = document.querySelector(`[name=${t}]`).value
      return this[t] = Math.floor(10000/targetValue)/10000
    },
    clear_all: function(){
      let tableBody = document.querySelector('tbody')
      tableBody.innerHTML = ''
      this.ping_all = [0]
    },
    add_sum_to_compare: function(){
      let compareDom = document.createElement('tr')
      let tableBody = document.querySelector('tbody')
      compareDom.innerHTML = '<td class="amount"></td><td class="rate"></td></td><td class="sum"></td>'
      compareDom.querySelector('.amount').textContent = this.amount
      compareDom.querySelector('.rate').textContent = this.rate
      compareDom.querySelector('.sum').textContent = this.sum
      tableBody.insertAdjacentElement('beforeend', compareDom)
      this.amount = ''
      this.rate = ''
    }
  },
  computed: {
    sum: function(){
      return Math.floor(this.rate * this.amount * 100)/100
    }
  }
})