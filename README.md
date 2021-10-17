
# Twitch Apex Chat Bot 

![image](https://www.dexerto.com/wp-content/uploads/2021/09/06/Apex-Legends-Twitch-Top-10.jpg)

### Please "Star" this repo to help it gain momentum!

This is an open-source (free code) project for Twitch streamers! 
It will be updated regularly so keep your eyes peeled for new features.

While this project is open source and free to use, if you find that it's improving your streaming experience, please consider donating to keep this project improving! My paypal email is gchacka@gmail.com :)

Please keep in mind this bot is still in development and may not function perfectly *yet*. Your feedback could really help!

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
  
## Upcoming Features
 - Ability to give Twitch Subscribers or Followers more than 1 vote per voting process
 - Letting chat vote on gamemode, which weapons you should run, and which legends your teammates should play as
 - More general customization like progress bars, announcements, etc.
 - Making it so that chat votes using numbers instead of Legend names as that can lead to missed votes on typos or abbreviations
   - EX: Valkyrie vs Valk vs Valkree
   - New feature will look something more like (and allow the streamer to exclude certain legends):
     - 1 - Bloodhound
     - 2 - Lifeline
     - 3 - Pathfinder
     - ...

## Deployment

1. Go to (the project's deployment page on [Glitch](https://glitch.com/edit/#!/apex-legends-c?path=bot.js%3A1%3A0)
  - Create a Glitch account and "remix" the project. 
2. Gather your API Credentials
 - [Get your Twitch OAuth Token](https://twitchapps.com/tmi/)
 - [Get your Apex API Credentials](https://apexlegendsapi.com/documentation.php)
   - located at the top of the page, enter [this repo's URL](https://github.com/gavinceldridge/ApexTwitchBot) as the project URL and explain your use case (EX: "I want a twitch bot!")
        - Submit and copy your Apex API credentials.
        - Add these credentials to the respective .env file variables in the cloned repo.
        - Also be sure to enter your Twitch channel name, preferred bot username, apex username, and a list of your Twitch mods usernames with a space in between each of the mods usernames (all in lowercase).
3. Save the .env file!
4. Run the bot
   - On the bottom left of the Glitch website, click "Tools" -> "Terminal" and wait for the server's terminal to load.
   - Enter the following commands:
```bash
  //this line installs all the necessary dependencies 
  //you only need to run it the first time you configure the project.
  npm i 

  //this line starts the chat bot.
  //you need to run it at the beginning of each stream
  node bot.js
```
5. *Assuming you configured everything properly*, it should now be running!


## APIs and Tooling
 - [Apex API Docs](https://apexlegendsapi.com/)
 - [Twitch Chat Bot Docs](https://dev.twitch.tv/docs/)
 - [Glitch Servers](https://glitch.com/)

## Contributing

Contributions are always welcome!

Message me on discord for more info about this bot :)
Shaka#6502

  
