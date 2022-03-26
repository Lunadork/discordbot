const client = require(`../index`);
const Discord = require(`discord.js`);

async function newMessage(msg)
{
    if(msg.author.bot)
    {
        console.log("I was the author - ignoring")
    }
    else
    {
        let content = msg.content;
        content = content.toLowerCase();

    
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


module.exports = { newMessage };