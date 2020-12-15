const Discord = require("discord.js");
const prefix = ['!']; 
const client = new Discord.Client();
client.login(process.env.TOKEN);
client.user.setGame(setGame[i],`gtcrpg.ml | !help`);
