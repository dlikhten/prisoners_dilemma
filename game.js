"use strict"

const numberOfRounds = 5
const numberOfPlayersPerTeam = 3

function generateId() {
  return Math.floor(Math.random() * 100) + 1
}

function game(players) {
  const teams = { }
  const allPlayers = []
  const scores = { }

  players.forEach( (teamConstructor) => {
    let playerName = teamConstructor.name
    println("Name: " + playerName)

    teams[playerName] = []
    for (let i = 0; i < numberOfPlayersPerTeam; i++) {
      teams[playerName].push(new teamConstructor())
    }

    scores[playerName] = 0

    Array.prototype.push.apply(allPlayers, teams[playerName])

    teams[playerName].forEach( (player) => {
      player.id = generateId() + ''
      player.idSet(player.id)
    })
  })

  for (let i = 0; i < allPlayers.length; i++) {
    let player1 = allPlayers[i]
    let player1Name = player1.constructor.name

    for (let roundNumber = 0; roundNumber < numberOfRounds; roundNumber++) {

      for (let k = 0; k < allPlayers.length; k++) {
        if (k !== i) {
          let player2 = allPlayers[k]
          let player2Name = player2.constructor.name

          // play the round
          let p1Result = player1.willCooperateWithPlayer(player2.id)
          let p2Result = player2.willCooperateWithPlayer(player1.id)

          // tell each player the other's results
          player1.results(player2.id, p1Result, p2Result)
          player2.results(player1.id, p2Result, p1Result)

          // calculate points
          if (p1Result === true && p2Result === true) {
            scores[player1Name] += 1
            scores[player2Name] += 1

            println("player "+player1Name+" and "+player2Name+" cooperated, both got 1 year in prison")
          }
          else if (p1Result === true && p2Result === false) {
            scores[player1Name] += 3
            println("player "+player1Name+" cooperated and "+player2Name+" did not, player "+player1Name+" went to prison for 3 years")
          }
          else if (p1Result === false && p2Result === true) {
            scores[player2Name] += 3
            println("player "+player2Name+" cooperated and "+player1Name+" did not, player "+player2Name+" went to prison for 3 years")
          }
          else {
            scores[player1Name] += 2
            scores[player2Name] += 2
            println("player "+player1Name+" and "+player2Name+" did not cooperate, both got 2 years in prison")
          }
        }
      }
    }
  }

  let lowestScore = 999999999
  let lowestTeam

  for (let key in scores) {
    if (scores.hasOwnProperty(key)) {
      let value = scores[key]
      if (value < lowestScore) {
        lowestScore = value
        lowestTeam = key
      }
      println("team " + key + " scored " + value)
    }
  }

  println("team " + lowestTeam + " served the least prison time with " + lowestScore + " years served")
}

function println(string) {
  process.stdout.write(string + "\n")
}

module.exports = game