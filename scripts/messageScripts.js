const client = require(`../index`);
const Discord = require(`discord.js`);
const fetch = require('node-fetch');

let giphykey = "plyhLse5MeEGhzbbKjkGgEHPwyOfS5Qh";

async function newMessage(msg)
{

    let content = msg.content;
    content = content.toLowerCase()

    if(msg.author.bot)
    {
        console.log("I was the author - ignoring")
    }
    else if (content.includes("!meme"))
    {
        let workingArr = content.split(" ");
        let searchTerm = workingArr[1];
        if(!searchTerm)
        {
            msg.reply("I didn't get a search term, format is !meme [searchterm].  The request was: "+msg.content);
        }
        else
        {
            await getMeme(searchTerm, msg);
        }
    }
    else
    {    
        switch (content)
        {
            case "!ping":
    
                msg.reply("pong");
                
            break;
    
            case "!help":
    
                msg.reply("~Commands~");
                msg.reply(`1 - !ping : Bot will reply with pong 
2 - !league : bot will add you to the leaguenoobers group
3 - !meme [searchterm] :  Bot will fetch a meme based on the entered search term.  Only takes the first word entered after the !meme command`);
            break;
    
            case "!league":
            try
            {
            let role = msg.member.guild.roles.cache.find(role => role.name === "League of Noobers");
            if (role) msg.guild.members.cache.get(msg.author.id).roles.add(role);
            msg.reply("Added!")
            }
            catch (err)
            {
                msg.reply("Failed to add, reason: " +err);
            }

            break;
    
            case "uwu":
                msg.reply("OwO");
            break;
    
            case "owo":
                    msg.reply("UwU");
            break;
    
            case "hello":
            case "hi":
            case "hey":
            case "heya":
            case "hewwo":
                msg.reply("hewwo");
            break;
            
            case "fox":
            case ":fox:":
            case "foxxo":
            case "awoo":
                msg.reply("Awooo :fox:")
            break;
        }




    }
}


async function getMeme(searchTerm, msg)
{
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${giphykey}&limit=16&q=`;
    url = url.concat(searchTerm.trim());
    await fetch(url)
        .then(response => response.json())
        .then (data =>
            {
                msg.reply(data.data[0].images.original.url);
            })
}


module.exports = { newMessage };