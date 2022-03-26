const Discord = require ("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); 
const messageScripts = require ('./scripts/messageScripts');
require('dotenv').config();

client.on("ready",startup);

function startup()
{
    console.log(`logged in as ${client.user}`);
}


client.on("message", msg => 
    {
        messageScripts.newMessage(msg);
    });

client.login(process.env.TOKEN);

module.exports = { client, Discord };  