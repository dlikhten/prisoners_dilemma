"use strict"

module.exports = class ButCanYouBeatRandom {

  // will you cooperate with the given player? (return boolean)
  willCooperateWithPlayer(playerId) {
    return Math.floor(Math.random() * 100) % 2 == 0;
  }

  // here are the results
  results(playerId, yourVote, theirVote) {

  }

  // my own id is set
  idSet(myId) {

  }
}
