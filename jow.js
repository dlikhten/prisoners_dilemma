"use strict"

module.exports = class Jow {
  constructor(){
    this.id = 0
    this.badActors = []
  }
  // will you cooperate with the given player? (return boolean)
  willCooperateWithPlayer(playerId) {
    return this.badActors.indexOf(playerId) < 0
  }

  // here are the results
  results(playerId, yourVote, theirVote) {
    if (!theirVote) {
      this.badActors.push(playerId)
    }
  }

  // my own id is set
  idSet(myId) {
    this.id = myId
  }
}
