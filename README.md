🤖 # Base-Of-Bot
This a command handler based off of Dashcuft's tutorial, download and it is ready to go!

# ⚡Installation

__Step 1:__

Go to **settings.json** and fill out the following info:
```JS

{
    "token": "TOKEN_HERE", //required
    "MongoDB": "MONGODB_URL_HERE", //this is optional
    "defPrefix": "?" //required
}

```
❗ # Some more info

This is how you make a command:

Step 1:

Create a new file in the _commands_ folder.

Step 2:

copy and paste this code: 

```JS

const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

//Put here what is going to happen when the command is ran

}

module.exports.config = {
    name: "hi",  //this is the name of a command, NO PREFIX
    aliases: ['h']  //this is the nickname for a command
}

```
