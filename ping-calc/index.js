new Vue({
  el:'#app',
  data: {
    room: '',
    length:'',
    width:'',
    ping_all:[0],
    pingTemplate: ''
  },
  methods: {
    calc: function(t){
      let targetDom = document.querySelector(`[name=${t}]`)
      let result = function() {
        return new Function('return ' + targetDom.value)()
      }
      this[t] = result()
    },
    clear_all: function(){
      let tableBody = document.querySelector('tbody')
      tableBody.innerHTML = ''
      this.ping_all = [0]
    },
    add_ping_to_ping_all: function(){
      let pingDom = document.createElement('tr')
      let tableBody = document.querySelector('tbody')
      pingDom.innerHTML = '<td class="room"></td><td class="length"></td><td class="width"></td><td class="ping"></td>'
      pingDom.querySelector('.room').textContent = this.room
      pingDom.querySelector('.length').textContent = this.length
      pingDom.querySelector('.width').textContent = this.width
      pingDom.querySelector('.ping').textContent = this.sum
      tableBody.insertAdjacentElement('beforeend', pingDom)
      this.ping_all.push(this.sum)
      this.room = ''
      this.length = ''
      this.width = ''
    }
  },
  computed: {
    sum: function(){
      return Math.floor(Math.round(this.length*this.width/10*0.3025))/1000
    },
    sum_all: function(){
      return Math.floor(this.ping_all.reduce((a, b) => a + b)*1000)/1000
    }
  }
})