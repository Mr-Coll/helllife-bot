const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require("./config");
const Gamedig = require('gamedig');
const { report, send } = require('process');
const { REPLServer } = require('repl');
const { realpathSync } = require('fs');
const prefix = '-';

function getPlayers() {
    Gamedig.query({
        type: cfg.config.game,
        host: cfg.config.serverIP,
        port: cfg.config.port
    }).then((data) => {
        client.user.setActivity(`${data.raw.numplayers}/${data.maxplayers}`)
        let channel = client.channels.cache.get(cfg.config.channelID)
        if(channel) {
            channel.setName(cfg.config.channelText + data.raw.numplayers)
        }
    }).catch((error) => {
        console.log("ERROR: SERVER NOT FOUND");
    });
}

client.on('ready', () => {
    console.log(`Ready!`);
    setInterval(function(){
        getPlayers();
    }, cfg.config.refreshInteval)
});
client.once('ready', () =>{
    console.log('Bot jest online!');
});
 
client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    
    if (command === "pomoc") {
      const botName = "𝗣𝗼𝗺𝗼𝗰"
      const botDescription = `
      -𝗶𝗽 pokazuje ip serwera

      -𝗽𝗿𝗮𝗰𝗲 spis wszystkich dostepnych prac na serwerze

      -𝘀𝗮𝗹𝗼𝗻𝘆 spis wszystkich dostepnych samachodow wraz z ich cenami oraz miejscami zakupu`
    
      const embed = new Discord.MessageEmbed()
        // Set the title of the field
        .setTitle(botName)
        // Set the color of the embed
        .setColor(0xBB0606)
        // Set the main content of the embed
        .setDescription(botDescription)
    
      message.author.send(embed)
      message.react('✅');


    }
  if (command === "ip") {
    const botName = "𝗜𝗣"
    const botDescription = `
    𝗜𝗣: mtasa://51.83.166.48:20948
  `
  
    const embed = new Discord.MessageEmbed()
      // Set the title of the field
      .setTitle(botName)
      // Set the color of the embed
      .setColor(0xBB0606)
      // Set the main content of the embed
      .setDescription(botDescription)
  
    message.author.send(embed)
    message.react('✅');


  }
if (command === "prace") {
  const botName = "𝗣𝗿𝗮𝗰𝗲"
  const botDescription = `
  𝗢𝗱 𝟬𝘀𝗿𝗽
:small_orange_diamond:Sweapery
:small_orange_diamond:Lodziarnia

𝗢𝗱 𝟮𝟬𝟬𝘀𝗿𝗽
:small_orange_diamond:Kelner
:small_orange_diamond:Streetview

𝗢𝗱 𝟲𝟬𝟬𝘀𝗿𝗽
:small_orange_diamond:Gornik
:small_orange_diamond:Spawacz

𝗢𝗱 𝟭𝟮𝟬𝟬𝘀𝗿𝗽
:small_orange_diamond:Kurier
:small_orange_diamond:Rybak

𝗢𝗱 𝟮𝟬𝟬𝟬𝘀𝗿𝗽
:small_orange_diamond:Listonosz
:small_orange_diamond:Oprowadzka`

  const embed = new Discord.MessageEmbed()
    // Set the title of the field
    .setTitle(botName)
    // Set the color of the embed
    .setColor(0xBB0606)
    // Set the main content of the embed
    .setDescription(botDescription)

    message.author.send(embed)
    message.react('✅');


  }
 if (command === "salony") {
  const botName = "𝗦𝗮𝗹𝗼𝗻𝘆"
  const botDescription = `
  𝗜𝗡𝗙𝗢: 𝗖𝗲𝗻𝘆 𝘀𝗮 𝘇𝗮𝗼𝗸𝗿𝗮𝗴𝗹𝗼𝗻𝗲

  𝗖𝘆𝗴𝗮𝗻:
:pickup_truck:Walton 3kk 
:pickup_truck:Perennial 4kk 
:pickup_truck:Tampa 7kk
:pickup_truck:Bobcat 9kk
:pickup_truck:Blista Compact 10kk
:pickup_truck:Chevrolet Kadett SL v2.0 12kk
:pickup_truck:Volkswagen Golf 4 GTI 15kk

𝗦𝗮𝗹𝗼𝗻 𝟭(𝗟𝗩):
:pickup_truck:Regina 19kk
:pickup_truck:Washington 20kk
:pickup_truck:Glendale 23kk
:pickup_truck:Buccaneer 26kk
:pickup_truck:Sentinel 30kk
:pickup_truck:Blade 31kk

𝗦𝗮𝗹𝗼𝗻 𝟮 (𝗟𝗦):
:blue_car:Slamvan 34kk
:blue_car:Admiral 35kk
:blue_car:Tahoma 37kk
:blue_car:Sabre 38kk
:blue_car:Emperor 40kk
:blue_car:Feltzer 41kk

𝗦𝗮𝗹𝗼𝗻 𝟯 (𝗟𝗩):
:blue_car:Willard 50kk
:blue_car:Sunrise 52kk
:blue_car:Premier 65kk
:blue_car:Toyota Century 2018 130kk
:blue_car:Dodge Charger 230kk
:blue_car:Mercedes-Benz 400 SE W140 340kk

𝗦𝗮𝗹𝗼𝗻 𝟰 (𝗟𝗦):
:red_car:Volvo XC90 T8 2017 370kk
:red_car:Chevrolet Camaro SS 1968 400kk
:red_car:Jeep Wrangler 430kk
:red_car:Obey Tailgater 470kk
:red_car:udi RS6 500kk
:red_car:Subaru Impreza (Drift) 600kk

𝗦𝗮𝗹𝗼𝗻 𝟱 (𝗟𝗦):
:red_car:Aston Martin DB11 17 690kk
:red_car:Audi Q7 730kk
:red_car:BMW M5 F10 800kk
:red_car:Mercedes-AMG C63 870kk
:red_car:Acura NSX 940kk
:red_car:Chevrolet Corvette ZR1 C6 2009 1kkk
:red_car:Limuzyna 1kkk

𝗦𝗮𝗹𝗼𝗻 𝟲 (𝗦𝗙):
:race_car:Mercedes-AMG G63 2kkk
:race_car:Porsche 911 2kkk
:race_car:Nissan GT-R 3kkk
:race_car:Dodge Challenger SRT 3kkk
:race_car:BMW M2 3kkk
:race_car:BMW M3 (Drift) 5kkk

𝗦𝗮𝗹𝗼𝗻 𝟳 (𝗦𝗙):
:race_car:Ferrari F430 5kkk
:race_car:Audi R8 6kkk
:race_car:Peggasi Vacca 6kkk
:race_car:Tesla Roadster 2011 7kkk
:race_car:Chevrolet Camaro ZL1 v2.0 9kkk
:race_car:Mercedes-Benz AMG GT 10kkk

𝗦𝗮𝗹𝗼𝗻 𝟴 (𝗟𝗩):
:race_car:Pagani Zonda Cinque 2008 15kkk
:race_car:Koenigsegg One 2014 16kkk
:race_car:Mazda RX-7 (Drift) 18kkk
:race_car:Ferrari 458 20kkk`

  const embed = new Discord.MessageEmbed()
    // Set the title of the field
    .setTitle(botName)
    // Set the color of the embed
    .setColor(0xBB0606)
    // Set the main content of the embed
    .setDescription(botDescription)

    message.author.send(embed)
    message.react('✅');
} 
});


client.login(cfg.config.token);
