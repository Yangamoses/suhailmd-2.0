const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_27_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5LFxuICAgICAgICA4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDk3LFxuICAgICAgICA1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNixcbiAgICAgICAgMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMixcbiAgICAgICAgNTEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE1LFxuICAgICAgICAzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MixcbiAgICAgICAgMTEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDM2LFxuICAgICAgICA3MyxcbiAgICAgICAgNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDg0LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicDZJQWRpeTdxVnV4T3Uyb3JlZU8zajBLNUs1STZtQUJvUnE1S3Y5eWY4bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicGM0QW5TanpSN3FSRFNfTk1kdm5EQVwiLFxuICBcInBob25lSWRcIjogXCIzMjk5OGQ4NC0zZWY5LTRmOGYtOTFkZC05MWE4OGY0NTBmZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgNDMsXG4gICAgICAyMTEsXG4gICAgICAyMDgsXG4gICAgICA3NCxcbiAgICAgIDEyOSxcbiAgICAgIDIxNCxcbiAgICAgIDMsXG4gICAgICAyMzksXG4gICAgICAxNDAsXG4gICAgICA1MixcbiAgICAgIDE0MSxcbiAgICAgIDE3NyxcbiAgICAgIDIxMCxcbiAgICAgIDE4MSxcbiAgICAgIDIzNCxcbiAgICAgIDUsXG4gICAgICA1NixcbiAgICAgIDI1MCxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICA3MyxcbiAgICAgIDksXG4gICAgICAxNTcsXG4gICAgICAxMTMsXG4gICAgICA0NCxcbiAgICAgIDg0LFxuICAgICAgMTksXG4gICAgICAyNDQsXG4gICAgICA1NixcbiAgICAgIDIyMyxcbiAgICAgIDM2LFxuICAgICAgMTgzLFxuICAgICAgMjMwLFxuICAgICAgOCxcbiAgICAgIDIxMCxcbiAgICAgIDIxMixcbiAgICAgIDk4LFxuICAgICAgMjIyLFxuICAgICAgODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkhEQkc5VlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMjg4MTk2NzU4OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzk1MDkzMTIzMTU0ODk6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0wrNnJRSEVKbUJ6N29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrSVE2dVNWN0REME5UWkZuV0tYNmJlUk4vZUJzQnJGQXdMWHVKNUtIZUdVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhZL3RIZWxRQXBXRUlnVUdKR3Zoa2pmSm1ldGRCUjJuVE5VekxTN21sRzlBS3ZKRmZyTkxNOGtob2hyYzRDTlhSeVVxREk4alovZXViTnJPajlka0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJpVU91Q3B0TUZ2bjB6aTl0UTVhSFRYWHNVNjdCK3FOU3BXT0tISmRQNVhQOU9hVEhuaFA3Y3JTeTZPWU56MTNOdXAyUGFpM1V1Z09GSW9RUHBGWkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMjg4MTk2NzU4OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTQyMDQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjBkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOMGQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBRU9Sdk5XNzF6YmhUYkN3ZzVNQU56WHptY3lmblZIWlNVL2hDQ3RocFJrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5ODk4NTI5NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM0OTgyNzIzNDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
