const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs');

client.command = new Discord.Collection();

[`command_handler`, `event_handler`].forEach(handler =>{

        require(`./handlers/${handler}`)(client, Discord);
}) 


client.login(process.env.token);



