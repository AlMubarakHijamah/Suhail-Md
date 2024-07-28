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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348114918337";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_19_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUxLFxuICAgICAgICA2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMixcbiAgICAgICAgMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY0LFxuICAgICAgICA4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNixcbiAgICAgICAgMjIzLFxuICAgICAgICA5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTI1LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDM2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMCxcbiAgICAgICAgODMsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzksXG4gICAgICAgIDIyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwLFxuICAgICAgICAzMixcbiAgICAgICAgOCxcbiAgICAgICAgODgsXG4gICAgICAgIDMzLFxuICAgICAgICA3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM2LFxuICAgICAgICA0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICA2NixcbiAgICAgICAgODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZmoxYzFSbW9rbDFkYW9KRS9LMWN4UUkzTkpucTlEQys2ZW9zdE0wQ2V1ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ2tkOWZCWUVTbG10SVVHczZOb09uUVwiLFxuICBcInBob25lSWRcIjogXCJhZTM3YmVjYi1iMjUxLTRjOGUtYTA1Ny1kNjU2YWMyYmIwZWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDE0MixcbiAgICAgIDMyLFxuICAgICAgMTExLFxuICAgICAgNTgsXG4gICAgICAxMjUsXG4gICAgICA1MixcbiAgICAgIDczLFxuICAgICAgMTc3LFxuICAgICAgODQsXG4gICAgICA5OSxcbiAgICAgIDE4NixcbiAgICAgIDE3NyxcbiAgICAgIDI0NixcbiAgICAgIDEwNyxcbiAgICAgIDIyMSxcbiAgICAgIDE5MCxcbiAgICAgIDExOSxcbiAgICAgIDYzLFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNCxcbiAgICAgIDgsXG4gICAgICAyNDIsXG4gICAgICAxOCxcbiAgICAgIDIzNixcbiAgICAgIDE4MixcbiAgICAgIDIxMyxcbiAgICAgIDk3LFxuICAgICAgNTgsXG4gICAgICAxNjAsXG4gICAgICAxOTUsXG4gICAgICAxMTgsXG4gICAgICA4NixcbiAgICAgIDEzMSxcbiAgICAgIDIyOSxcbiAgICAgIDEsXG4gICAgICAyMTgsXG4gICAgICAxODMsXG4gICAgICAxMjAsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEFNOEtZUTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMTQ5MTgzMzc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFsLU11YmFyYWsgSGlqxIFtYWggYW5kIE5hdHVyb3BhdGhpYyBIb21lXCIsXG4gICAgXCJsaWRcIjogXCI3MDczODc4MjkwNjc2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlNlMjVvRkVNK0ttYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsNDNRTXZUNi9tVXdQNDZrRWJ4UUJwekJIbkE1ZmljeFByY2s3eG9MUG1rPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRtaWFaVjQrOFdHV3JZRUplNEUyRjBSaVRTQ2pnb0kyR0NvMXFqbUkweW9WTWJlenE3MVh1WStFYmhJUmVDdDV5dEMyK2VHNDJKcU1wU0E2cWVIaUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpKNUs3dzI0VGZ6VmhhQkxZVUxUcEFkSStVMHdzVzJYT0hkLzZmdEZJZWJOa3RUUU8vS0FZeGxSa0p4NnhiR0NGMTFuUUkrT09ueDhHWmx0RXZ4Y0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMTQ5MTgzMzc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTcyNzU2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm1DXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCbUMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuNVdIMmVWcHkxVG01NGhnWjhEZUM5aEhDTkxpMUQxeG5EYTZ0VnpaakJzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzOTgxOTgwMzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjE3Mjc2NDEyNFwifSIKfQ=="  // PUT your SESSION_ID 


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
