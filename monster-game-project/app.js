new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame() {
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
      this.turns= []
    },
    attack() {
      const damage = this.calcDamage(3, 10)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits monster with ${damage} damage`
      })
      if (this.checkWinner()) return
      this.monsterAttack()
    },
    specialAttack() {
      const damage = this.calcDamage(1, 20)
      this.monsterHealth -= damage
      if (this.checkWinner()) return
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits monster with ${damage} damage`
      })
      this.monsterAttack()
    },
    heal() {
      if (this.playerHealth <= 90) this.playerHealth += 10
      else this.playerHealth = 100
      this.turns.unshift({
        isPlayer: true,
        text: `Player heals with 10 health`
      })
      this.monsterAttack()
    },
    monsterAttack() {
      const damage = this.calcDamage(5, 10)
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits player with ${damage} damage`
      })
      this.checkWinner()
    },
    giveUp() {
      this.gameIsRunning = false
    },
    calcDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWinner() {
      if (this.playerHealth <= 0) {
        if (confirm('You Lose! Play Again?')) this.startGame()
        else this.gameIsRunning = false
        return true
      }
      if (this.monsterHealth <= 0) {
        if (confirm('You Won! Play Again?')) this.startGame()
        else this.gameIsRunning = false
        return true
      }
      return false
    }
  }
});
