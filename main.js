const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs');

client.command = new Discord.Collection();

[`command_handler`, `event_handler`].forEach(handler =>{

        require(`./handlers/${handler}`)(client, Discord);
}) 


client.login('ODE0MzcyODY4NDg5NzQwMjk5.YDc51g.TYRPM9rjfdO1w2CGFX4flvyw1CU');



