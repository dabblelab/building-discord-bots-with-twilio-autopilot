const Discord = require('discord.js');
const axios = require('axios');

const axiosClient = axios.create({
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'accept': 'application/json',
    'authorization': 'Basic ' + new Buffer.from(process.env['TWILIO_ACCOUNT_SID'] + ':' + process.env['TWILIO_AUTH_TOKEN']).toString('base64')
  },
});

const endpoint = `https://channels.autopilot.twilio.com/v2/${process.env['TWILIO_ACCOUNT_SID']}/${process.env['TWILIO_BOT_SID']}/custom/discord`;

const discordClient = new Discord.Client();

discordClient.once('ready', () => {
  console.log('Ready!');
});

discordClient.on('message', message => {

  if (message.content.startsWith("!support")) {
    const user = message.author;
    console.log(message);

    const requestPayload = `UserId=${user.id}&Language=en-US&Text=${message.content.slice(9)}`;

    axiosClient
      .post(endpoint, requestPayload)
      .then((result) => {
        const responseText = result.data.response.says[0].text;

        message.channel.send(responseText)
          .then(m => {
            console.log(m);
          })
          .catch(e => {
            console.log(e)
          });
      })
      .catch((error) => {
        console.log(error.message)
      });
  }
});

discordClient.login(process.env['DISCORD_BOT_TOKEN']);