"use strict"

let runningScore = {}

module.exports = class Parcel {


  // will you cooperate with the given player? (return boolean)
  willCooperateWithPlayer(playerId) {
    let yearsDiff = runningScore[playerId] || 0
    return yearsDiff === 0;
  }

  // here are the results
  results(playerId, yourVote, theirVote) {
    let yourScore = 0;
    let theirScore = 0;
    if (yourVote && !theirVote) {
      yourScore = 3;
      theirScore = 0;
    } else if (!yourVote && theirVote) {
      yourScore = 0;
      theirScore = 3;
    } else if (yourVote && theirVote) {
      yourScore = 1;
      theirScore = 1;
    } else {
      yourScore = 2;
      theirScore = 2;
    }

    let yearsDiff = yourScore - theirScore;
    let historyYearsDiff = runningScore[playerId] || 0;
    runningScore[playerId] = historyYearsDiff + yearsDiff;
  }

  // my own id is set
  idSet(myId) {

  }
}
