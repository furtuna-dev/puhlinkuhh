const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');
const GoalFollow = goals.GoalFollow;
const main = require('../main');

//main.print('> Loaded module followPlayer'.info);


function follow(username, bot) {
    bot.loadPlugin(pathfinder);
    const playerCI = bot.players[username];
    const mcData = require('minecraft-data')(bot.version);
    const movements = new Movements(bot, mcData);
    bot.pathfinder.setMovements(movements); 

    if (!playerCI || !playerCI.entity) {
      //print(`> Couldn't find '${username}' (command was dropped)\n`.info);
      bot.chat(`Can't see you, ${username}`);
      return;
    }

    //print('> Following'.info);
    bot.chat('aight. im omw');

    const goal = new GoalFollow(playerCI.entity, 0);
    bot.pathfinder.setGoal(goal, true); 

    const stopHandler = (username, message) => {
      if (message == "!stop") {
        if (username == main.owner) {
          //print("> Stopping..\n".info);
          bot.pathfinder.stop();
          bot.chat("Aight, I stopped.");
          bot.removeListener('chat', stopHandler);
          return;
        } else {
          bot.chat(`Can't do! You are not my owner, ${username}`);
        }
      }
    }
    bot.on('chat', stopHandler);  
}

module.exports = {follow};
