'use strict';


const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAABqg0qlvU0BAPoptxIhuYZANwBjQ2e9YvZCwVkELRXZBtqBbpgO4Ol046dLunZCJdoJ4dYRT6jOXNupEDu1TuqsnOv5gUe7VJ9Wm2ZAYKE2b9hCO2iR2pgx5m2XZBNbD89ZA4LjaJJWEpbdeZB2nORixsjZBR7vL1pqB2jO5ZCkUPoHZBH9YhvZBA7w',
  verifyToken: '<YOUR_VERIFY_TOKEN>',
  appSecret: '363f02fde9996332fd95a5859babf05d'
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});

bot.start();
