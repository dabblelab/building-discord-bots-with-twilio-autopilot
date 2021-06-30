
[![Run on Replit.com](https://repl.it/badge/github/dabblelab/building-discord-bots-with-twilio-autopilot)](https://repl.it/github/dabblelab/building-discord-bots-with-twilio-autopilot)

![Cover Image](1408937-building-discord-bots-with-twilio-autopilot.png)

# Building Discord Bots with Twilio Autopiot

This repository contains the source code for the course [Building Discord Bots with Twilio Autopiot](https://learn.dabblelab.com/courses/building-discord-bots-with-twilio-autopilot). The course walks through creating a [Discord](https://discord.com) bot that uses [Twilio Autopilot](https://twilio.com/autopilot) to answer frequently asked questions. 

## Prerequisites

To follow along, you'll need at least a free account with the following services:

- [GitHub](https://github.com/signup)
- [Twilio](https://www.twilio.com/try-twilio?promo=0ziFtf)
- [Discord](https://discord.com/register)
- [Replit](https://replit.com/signup)

## Course Outline

The course walks through building a **Discord** bot that lets users get answers to frequently asked questions. **Twilio Autopilot** provides the AI for answering the questions, and **Replit.com** is used to host the bot code and for proxying requests between Discord and Autopilot. 

At high level, there are five topics that are covered.

1. Creating a Twilio Autopilot FAQ bot
2. Setting up a Discord server
3. Configuring a Discord bot application and bot user
4. Authorization bot accesss to a Discord server
5. Creating a bot handler service using replit.com

### Creating a Twilio Autopilot FAQ bot
- Login at [twilio.com](https://twilio.com)
- [Create a new bot](https://www.twilio.com/console/autopilot/build) from the FAQs pre-trained template
- Create tasks to handel questions
- Test the bot using the autopilot simulator
- Note the `ACCOUNT SID`, `AUTH TOKEN`, and `ASSISTANT SID`

### Setting up a Discord server
- Login at [discord.com](https://discord.com)
- Create a new Discord server

### Configuring a Discord bot application and bot user
- Login at [discord.com](https://discord.com)
- [Create a new discord application](https://discord.com/developers/applications)
- Create a Discord bot user
- Setup OAuth2 
- Note the Discord bot `TOKEN`

### Authorization bot accesss to a Discord server
- Copy the Discord OAuth2 authorization URL
- Authorize access to the Discord server

### Creating a bot handler service using replit.com
- Login to [replit.com](https://replit.com)
- Visit the [GitHub repo with the handler code](https://github.com/dabblelab/building-discord-bots-with-twilio-autopilot)
- Click the run on replit button to copy the code to replit.com
- Setup the following secrets/environment variable in Replit
    - `TWILIO_ACCOUNT_SID`
    - `TWILIO_AUTH_TOKEN`
    - `TWILIO_BOT_SID`
    - `DISCORD_BOT_TOKEN`
- Run the bot handler service

## Testing the Discord bot

To test the Discord bot access the Discird server and ask a question in the following format.

`!support {question}` - for example, `!support Can i move my service?`

You should see a response from the bot.

Done!