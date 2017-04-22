= A prisoner's dilemma competition!

Each player is asked blindly to cooperate with another player or not (cooperate with the cops)

- If both players cooperate, they both get 1 year in prison
- If player 1 cooperates and 2 does not, 1 goes to prison for 3 years, 2 goes free
- If both players do not cooperate, both go to prison for 2 years

Each player will get a team of 3.

The winning team will be the one who served the least number of years.


Here's a skeleton for your player. (you.js) (name it after your name)


    "use strict"

    module.exports = class You {

      // will you cooperate with the given player? (return boolean)
      willCooperateWithPlayer(playerId) {

      }

      // here are the results
      results(playerId, yourVote, theirVote) {

      }

      // my own id is set
      idSet(myId) {

      }
    }

And import it into the main game (run.js):

    "use strict"

    const game = require('./game')
    const You = require('./you')

    game([
        You,
    ])

Please create a pull-request to add this, I'll accumulate everything at the end and run the competition!

The only thing that would consider you as a cheater is if you add more than 1 player, or committing a change to the game rules. Anything else goes.