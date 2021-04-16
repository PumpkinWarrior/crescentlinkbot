const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'cl> ';

const fs = require('fs');

client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
        const command = require(`./commands/${file}`);

        client.command.set(command.name, command);
}

client.once('ready', () => {
        console.log('CrescentLink Bot was now Online!');
});

client.on('message', message =>{
        if(!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if(command == 'ping'){
                client.command.get('ping').execute(message, args);
        } else if (command == 'nekopao'){
                client.command.get('nekopao').execute(message, args);
        } else if (command == 'say'){ 
                client.command.get('say').execute(message, args);
        }
        
 }); 




client.login(process.env.token);

