const express = require("express");
const bodyParser = require("body-parser");

const { dialogflow, Image } = require("actions-on-google");

const gapp = dialogflow();

gapp.intent("Default Welcome Intent", conv => {
  conv.add("Hi, I will help you to find weather");
});


gapp.intent("Default Fallback Intent", conv => {
  conv.add(`I didn't understand. Can you tell me something else?`);
});

const expressApp = express().use(bodyParser.json());
expressApp.post("/webhook", gapp);
expressApp.listen(3000, function() {
  console.log("app is running on 3000");
});
