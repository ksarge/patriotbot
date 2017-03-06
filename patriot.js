const Discord = require("discord.js");
const client = new Discord.Client();
const sqlite3 = require('sqlite3').verbose();

const prefix = "!";
const auth = require("./auth.json");

var db = new sqlite3.Database("./surveilance.sqlite");

client.login(auth.token);

client.on("ready", () => {
    console.log("Ready to surveil.");
});