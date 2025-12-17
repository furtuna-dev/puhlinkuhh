 # puhlinkuhh
### A simple, open source minecraft bot, based on NodeJS, made for learning and experiment with the MineFlayer API.
> ## About the project
The name comes from the traditional Romanian drink called ***Pălincă*** (pronounced \[*puh-link-uhh*\] ), all starting from an inside joke made in a voice call. 

The scope of the project was for me to sucesfully make a minecraft bot that would join our server, say *"Pălincă!"* and leave. This was quite easy to do, and so I started playing arround with the MineFlayer library and developing the bot to do more advanced things. 

The bot also uses _ranks_ for determening what level of command execution a player has. For now only `bot_owner` is implemented.

### Future additions I wish to develop and impement later on:
> Systems
- Full rank system with customisable permisions.
- Multiple bot instances, with global or individual bot management.
- Targeting system
> Modules
- Follow with \<args>
- Kill-aura 
- Tools and armour auto-equip

## At this stage of development, the bot can do the following:

### !say `<args>` 
> Types in chat \<args\>

###### *not done yet. <br> I forgot to save the code to `/modules/say.js` before deleting the it from `main.js` and now i have to re-write it*

### !follow
> Follows the player that executes the command.<br>
> \> Requires `Ownership` status to execute.

### !stop
>Stops following the player if active. <br>
> \> Requires `Ownership` status to execute.

### pleaca bai 
>Makes the bot leave the server.<br>
> \> Requires `Ownership` status to execute.

_("Pleacă, băi" is romanian for "leave, dude")_

