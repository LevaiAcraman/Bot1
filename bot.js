const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("674344875977867264")
setInterval(function() {
channel.send(`السلام عليكم ورحمة الله وبركاته`);
}, 30)
})

client.login(process.env.BOT_TOKEN);