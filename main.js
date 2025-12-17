const yo = {
    ver: "v1.2-flt",
    name: "puhlinkuh"
}

function print(msg) {
  console.log(`[${yo.name}] > ${msg}`);
}
console.clear();
console.log("Initialising...");
const owner = "furtuna";

//init down bellow
const punycode = require('punycode/');
const colors = require("colors");
const mineflayer = require('mineflayer');

colors.setTheme({
  silly: 'rainbow',
  verbose: 'cyan',
  info: 'grey',
  good: 'green',
  yay: 'green',
  warn: 'yellow',
  error: 'red',
  purple: 'magenta',
  pink: 'brightMagenta'
  
});

//bot init


var bot_options = {
  host: 'imiplacsclavele.aternos.me',
  port: 25565,
  username: 'puhlinkuhh',
  version: "1.21.4"
}

console.log(`\n>>> ${yo.name} - ${yo.ver} <<<\n\n`.purple);
print(`> Bot owner: ${owner}`.pink);
print("Loaded console and colors...\n".info);


//bot down below from now

print(`Loading bot: \'${bot_options.username}\'`.info);

//creating and connecting bot
const bot = mineflayer.createBot(bot_options); //connect
 //load plugin
print(`Loaded pathfinder...`.info);

//modules

bot.once('spawn', ()=>{
  print("Bot Spawned!\n".yay);
  bot.chat("yo wdup i spawned");
})  

  //respawn
bot.on('respawn', ()=>{
  print("Bot respawned".info);
})
bot.on('chat', async (username, message)=> {
  if (message == "!follow") {
    print(`Recieved follow command from '${username}'`);
    if (username == owner) {
      print(`> Validated ownership`.info);
      const followPlayer = require('./modules/followPlayer.js');
      followPlayer.follow(username, bot);
    } else {
      print(`> Not the owner. Command not vaildated.\n`);
      bot.chat('Cannot follow. You are not my owner!');
    }
  }
})

//leave
bot.on('chat', async (username, message)=> {
  if (message=="!leave") {
    print(`Recieved leave command from ${username}`);
    if (username==owner) {
      print("Validated owner. Leaving.\n");
      bot.chat("aight imma leave");
      bot.end("ended");
      print("Bot terminated.");
      print("Terminating sesh...".red);
      process.exit();
    } else {
      print('> Not the owner. Command dropped.\n');
      bot.chat(`${username}, you are not my owner!`);
    }
  }
})

//to do:
// > fix the print inside the followPlayer module.
// > clean up code

// [] admin interface (adica from cli)
// [] add multiple bot support
// [] ^^^ add individual bot control maybe
module.exports = {print, owner};
