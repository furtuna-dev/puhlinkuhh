 # puhlinkuhh
### A simple, open source Minecraft bot, based on NodeJS, made for learning and experiment with the MineFlayer API.
> ## About the project
The name comes from the traditional Romanian drink called ***Pălincă*** (pronounced \[*puh-link-uhh*\] ), all starting from an inside joke made in a voice call. 

The scope of the project was for me to successfully make a Minecraft bot that would join our server, say *"Pălincă!"* and leave. This was quite easy to do, and so I started playing around with the MineFlayer library and developing the bot to do more advanced things. 

The bot also uses _ranks_ for determening what level of command execution a player has. For now only `bot_owner` is implemented.

> ## Installation
! THIS PROJECTS DOES NOT HAVE COMPILED RELEASES. If you want a compiled version, you have to build it yourself.
First of all, make sure you have NodeJS installed (together with NPM, of course) and all the required dependencies.
> Windows
If you are running Windows, you have a file called `requirements.bat` that will automatically install all of it's dependencies.
> Linux
If you are on Linux, you can look for the required dependencies in the `requirements.bat` file, and install them yourself. I'll add a script soon for automatic dependencies installation soon.

> ## Configuring puhlinkuhh
Go inside the `bot_config.json` folder and make your own configuration from there.
It is as straight forward as it could get.

> ## Functions:

### !say `<args>` 
> Types in chat \<args\>
###### *not done yet.* <br> I forgot to save the code to `/modules/say.js` before deleting the it from `main.js` and now i have to re-write it

### !follow
> Follows the player that executes the command.<br>
> \> Requires `Ownership` status to execute.

### !stop
> Stops following the player, if `following` is running. <br>
> \> Requires `Ownership` status to execute.

### pleaca bai 
>Makes the bot leave the server.<br>
> \> Requires `Ownership` status to execute.

_("Pleacă, băi" is romanian for "leave, dude")_

> ## Other

### Future additions I wish to develop and impement later on:
> Systems
- Full rank system with customisable permisions.
- Multiple bot instances, with global or individual bot management.
- Targeting system
> Modules
- Follow with \<args>
- Kill-aura 
- Tools and armour auto-equip
> Accounts
- Add Microsoft authentication to support conections to "premium" Minecraft servers
- Implement with Systems (multiple bots)
