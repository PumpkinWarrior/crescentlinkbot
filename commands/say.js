module.exports = {
    name: 'say',
    description: "this is a say command!",
    execute(message,args){
        const channel = message.guild.channels.cache.find(
            (c) => c.name === args[0]
           );
         
           if (!channel)
            return message.channel.send(`There is no channel with the name ${args[0]}`);
         
           // join all args besides the first by a space and send it => returns a string
           channel.send(args.slice(1).join(' '));
    }
}