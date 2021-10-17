
# Twitch Apex Chat Bot 

### Please "Star" this repo to help it gain momentum!

This is an open-source (free code) project for Twitch streamers! 
It will be updated regularly so keep your eyes peeled for new features.

While this project is open source and free to use, if you find that it's improving your streaming, please consider donating whatever you can afford to keep this project improving! My paypal email is gchacka@gmail.com :)

Please keep in mind this bot is still in development and may not function perfectly *yet*. Your feedback could really help!

Likewise, while it's in development, it will probably be a bit complex for non-devs. It will also require you install [Node.js](https://nodejs.org/en/) and be comfortable with using the command line. 

If you need further assistance in deploying, feel free to reach out to me on Discord (Shaka#6502).

## Authors

- [@gavineldridge](https://github.com/gavinceldridge)

  
## Features

### Mod Commands (chatter must be in the mods list to use these commands):
 - !startvote
   - Manually begins a voting process 
 - !endvote
   - Manually ends a voting process
 - !startauto
   - Automatically creates a vote at the start of each round once you join the lobby and ends it as you are joining the match
 - !endauto
   - Ends the auto voting at the start of the match

### Chat Commands (anyone can use these commands):
 - !vote [legend]
   - votes for a legend to be picked next round
   - only works when a vote is currently underway
 - !dice
   - rolls dice from 1-6
  
## Deployment

1. Ensure you have [Node.js](https://nodejs.org/), [Git](https://git-scm.com/), and [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) installed on your machine.
2. Clone this repository on GitHub
 - [guide for GitHub newbs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
 - Navigate to where you cloned this repo on your computer and type the following in the terminal:
   ```bash
    npm i
   ```
3. Gather your API Credentials
 - [Get your Twitch OAuth Token](https://twitchapps.com/tmi/)
 - [Get your Apex API Credentials](https://apexlegendsapi.com/documentation.php)
   - located at the top of the page, enter [this repo's URL](https://github.com/gavinceldridge/ApexTwitchBot) as the project URL and explain your use case (EX: "I want a twitch bot!")
        - Submit and copy your Apex API credentials.
        - Add these credentials to the config.js file in the cloned repo. There are further comments in the config file explaining how and what to add.
        - Also be sure to enter your Twitch channel name, preferred bot username, apex username, and a list of your Twitch mods usernames.
4. Save the config.js file!
5. Run the bot.js file by navigating to the project folder in your command line and typing in the following command:
```bash
  node bot.js
```
6. *Assuming you configured everything properly*, it should now be running!


## APIs
 - [Apex API Docs](https://apexlegendsapi.com/)
 - [Twitch Chat Bot Docs](https://dev.twitch.tv/docs/)

## Contributing

Contributions are always welcome!

Message me on discord for more info about this bot :)
Shaka#6502

  
