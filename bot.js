/**
 *
 * V 1.0, email gceldridgetech@gmail.com for bug reports
 *
 * Follow instructions in README.md to use this bot!!!
 *
 */

const tmi = require("tmi.js");
const axios = require("axios");
require("dotenv").config();

const apexApi = process.env.apexApi;
const mods = process.env.mods.split(" ");
const botUsername = process.env.botUsername;
const channelName = process.env.channelName;
const twitchOAuth = process.env.twitchOAuth;
const apexUsername = process.env.apexUsername;

// Define configuration options
const opts = {
    identity: {
        username: botUsername,
        password: twitchOAuth
    },
    channels: [channelName]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

// Connect to Twitch:
client.connect();

let votes = {};
let voting = false;
const voters = {};

let interval;
let timeout = 300;

const getPlayerStats = async target => {
    try {
        const request = await axios.get(
            `https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=${apexUsername}&auth=${apexApi}`
        );
        return request.data;
    } catch (e) {
        console.error("Error fetching player data!");
        client.say(target, "Error fetching player data!");
    }
};

const checkApexServers = async target => {
    try {
        const data = await getPlayerStats(target);
        // console.log(data.realtime);
        if (!voting && data.realtime.currentState === "inLobby") {
            startVote(target);
        } else if (
            voting &&
            ((data.realtime.currentState === "inLobby" &&
                data.realtime.currentStateSecsAgo > timeout) ||
                data.realtime.currentState === "inMatch")
        ) {
            endVote(target);
        }
    } catch (e) {
        console.error(e);
    }
};

const startVote = target => {
    client.say(
        target,
        "VOTE HAS BEGUN, CAST YOUR VOTES OR FOREVER HOLD YOUR PEACE!"
    );
    voting = true;
};

const endVote = target => {
    let keys = Object.keys(votes);
    let winner = keys[0];
    let fullVote = "";
    for (let i = 0; i < keys.length; i++) {
        if (votes[keys[i]] === votes[winner]) {
            winner = keys[i];
        }
        fullVote += `${keys[i]}: ${votes[keys[i]]} `;
    }
    client.say(target, `VOTE HAS ENDED!, WINNER: ${winner}`);
    client.say(target, `FULL VOTE: ${fullVote}`);

    votes = {};
    voting = false;
    voters = {};
};

function userIsAdmin(context) {
    return mods.includes(context.username);
}

function verifyUserIsAdmin(context, func, target) {
    if (userIsAdmin(context)) {
        func();
    } else {
        client.say(target, "YOU ARE NOT AUTHORIZED TO DO THIS!!!");
    }
}

const vote = (commandName, target, context) => {
    if (Object.keys(voters).includes(context.username)) {
        client.say(target, `${context.username}, you have already voted!`);
    } else {
        const splitted = commandName.split(" ");
        if (splitted.length === 2) {
            if (votes[splitted[1]]) {
                votes[splitted[1]]++;
            } else {
                votes[splitted[1]] = 1;
            }
            voters[context.username] = 0;
            client.say(target, `${context.username} voted for ${splitted[1]}!`);
            console.log(votes);
        } else {
            client.say(target, `voted but did not specify a legend correctly!`);
        }
    }
};

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
    if (self) {
        return;
    } // Ignore messages from the bot
    // Remove whitespace from chat message
    const commandName = msg.trim();

    // If the command is known, let's execute it
    if (commandName === "!dice") {
        const num = rollDice();
        client.say(target, `You rolled a ${num}`);
        console.log(`* Executed ${commandName} command`);
    } else if (commandName === "!startauto") {
        if (userIsAdmin(context)) {
            interval = setInterval(() => checkApexServers(target), 10000);
            client.say(target, "timer started, checking every 10 seconds");
        } else {
            client.say(target, "YOU ARE NOT AUTHORIZED TO DO THIS!!!");
        }
    } else if (commandName === "!endauto") {
        if (userIsAdmin(context)) {
            clearInterval(interval);
        } else {
            client.say(target, "YOU ARE NOT AUTHORIZED TO DO THIS!!!");
        }
    } else if (commandName === "!setvotetimeout") {
        if (userIsAdmin(context)) {
            let response;
            try {
                timeout = commandName.split(" ")[1];
                response = "success!";
            } catch (e) {
                response = "failure!";
            }
            client.say(target, response);
        } else {
            client.say(target, "YOU ARE NOT AUTHORIZED TO DO THIS!!!");
        }
    } else if (commandName.includes("!vote")) {
        if (voting) {
            vote(commandName, target, context);
        } else {
            client.say(target, "THERE'S NO VOTE HAPPENING CURRENTLY");
        }
    } else if (commandName === "!startvote") {
        if (userIsAdmin(context)) {
            startVote(target);
        } else {
            client.say(target, "YOU ARE NOT AUTHORIZED TO DO THIS!!!");
        }
    } else if (commandName === "!endvote") {
        if (userIsAdmin(context)) {
            if (!voting) {
                client.say(target, "NO VOTE HAPPENING");
            } else {
                endVote(target);
            }
        } else {
            client.say(target, "YOU ARE NOT AUTHORIZED TO DO THIS!!!");
        }
    } else {
        console.log(`${commandName}`);
    }
}

// Function called when the "dice" command is issued
function rollDice() {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}
