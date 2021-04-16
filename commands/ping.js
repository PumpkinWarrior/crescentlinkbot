module.exports = {
    name: 'ping',
    aliases: ['pinging','connect','test'],
    description: "this is a ping command!",
    async execute(client, message, args){
        message.channel.send('pong');
    }
}