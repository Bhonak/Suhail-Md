const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233547980068";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_50_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc3LFxuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDQyLFxuICAgICAgICA4NixcbiAgICAgICAgNDQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MixcbiAgICAgICAgMTM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDU1LFxuICAgICAgICA3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDg1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY0LFxuICAgICAgICA1NixcbiAgICAgICAgMjMzLFxuICAgICAgICAzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDksXG4gICAgICAgIDkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNDd2V2c2tjaDNnTnVYUncydU9xbm5xbWJBeGpvL2FwV252ZmMwL0RQekU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVSYjNCM18zUkRDcllWODY2bnNMcVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTY2Y2UyYjktMTYyMC00NzY2LWFmMGItZGZlM2RkZWVkNjRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDE3OCxcbiAgICAgIDIzNCxcbiAgICAgIDU5LFxuICAgICAgMTUwLFxuICAgICAgMTY0LFxuICAgICAgODUsXG4gICAgICAxMDIsXG4gICAgICAxNDUsXG4gICAgICAyMDksXG4gICAgICAyNDUsXG4gICAgICAxOCxcbiAgICAgIDc2LFxuICAgICAgMTIyLFxuICAgICAgNzUsXG4gICAgICAyMTQsXG4gICAgICAxNyxcbiAgICAgIDEyMCxcbiAgICAgIDIzMyxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAxMDEsXG4gICAgICAxODYsXG4gICAgICAxNDEsXG4gICAgICAyMjksXG4gICAgICAxMTAsXG4gICAgICAxMjMsXG4gICAgICAxMDcsXG4gICAgICAyMixcbiAgICAgIDkxLFxuICAgICAgODUsXG4gICAgICA4OCxcbiAgICAgIDgsXG4gICAgICAxNzksXG4gICAgICAxNjEsXG4gICAgICAzNixcbiAgICAgIDk4LFxuICAgICAgMjYsXG4gICAgICAxMjcsXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVlaUjgxTFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU0Nzk4MDA2ODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktpbmcgQmhvbmFrXCIsXG4gICAgXCJsaWRcIjogXCI2ODU3NzgwOTk4NTc0OToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKWHBsNlVDRU9TOWxMUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZTTHNlSi9vZXhWN2s3eXlCZTZhT1RwRUk1cUJDRGpvVlBmU0JuRjBUWEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibUtDMlVJNlN6S2dFcjQyUWY1U3I3OW1YbVdaRmV4V3pZS2tubXNTdjgrWGZkMHl4Ui8yYUY2TjlSVXZ4SmdHS2Y0dnlxU3FOdVNsc1ZDVXdVSEJCQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidDNVaUxXL2Rrc3pYZG5pQnYxSUFkVzdqVWV4T3F4N1VSbERvZHV3U1lXQXE2WkdwcVpBY2J2WDlZbmJibUp5S1Q0QzZCWVlyUUZCNUxDVEJiZGdjRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTQ3OTgwMDY4OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMDAyMzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGT2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZPai5qc29uIjogIntcImtleURhdGFcIjpcInVYSlUyVHMwNnhKbFI5OEhQVFRkWm4ybjNmNVZSRGNkd3hQdU1EbVR3eFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjE0ODU1ODI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwODY2Njc3OTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
