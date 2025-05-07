const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(2349032159245) : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || ""  //SUHAIL_06_00_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAwLFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDczLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY3LFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExLFxuICAgICAgICA5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJydi81QzluUVJaSkYybkQ3RG1qQ2pvZkVDUkptYmYzVS9PejIrcjF4SmQwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0T0FjejZzM1FDaXdvREdEX2lELWxnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1OGY5ODgyLWM2MWEtNDQ0Ny1iNTliLWNmNDg4YjBjOWJiZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICA4NCxcbiAgICAgIDE5OSxcbiAgICAgIDE5OCxcbiAgICAgIDE0NyxcbiAgICAgIDczLFxuICAgICAgNjksXG4gICAgICAxNjIsXG4gICAgICAxNDYsXG4gICAgICA3NyxcbiAgICAgIDIwNCxcbiAgICAgIDExMyxcbiAgICAgIDEzLFxuICAgICAgNjEsXG4gICAgICA3MixcbiAgICAgIDExOCxcbiAgICAgIDIzMyxcbiAgICAgIDEzOSxcbiAgICAgIDExMCxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgMTg0LFxuICAgICAgMjI1LFxuICAgICAgMTQwLFxuICAgICAgMTk1LFxuICAgICAgMTA0LFxuICAgICAgMjMyLFxuICAgICAgMTEzLFxuICAgICAgMTI5LFxuICAgICAgMTUzLFxuICAgICAgMjQ2LFxuICAgICAgMTk0LFxuICAgICAgNDAsXG4gICAgICAxODMsXG4gICAgICA5NCxcbiAgICAgIDE5MCxcbiAgICAgIDE5NyxcbiAgICAgIDIzOCxcbiAgICAgIDE1MCxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5U1g0REZKS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMjE1OTI0NTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2WgPCdlpPwnZaO8J2WlvCdlprwnZaKIPCdloXwnZaa8J2WkfCdlobwnZaO8J2WkPCdlo3wnZaGIPCdlbDwnZaT8J2WmfCdlorwnZaX8J2WlfCdlpfwnZaO8J2WmPCdlorwnZaYXCIsXG4gICAgXCJsaWRcIjogXCIxNjQ4NDk1MzU0NTk1MTQ6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKMk12cmNGRU9YdDY4QUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk43ekVmd3dyZXVCdmFTVXRMSE9KaG5GdC9PdXBIVWZCekxpS0phUGlJR2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTmFyTW1uSENCWE5RbS9UeHFzaWRNSkxsekRhcFFnVUpyUlpvSitNOTcrZGNtdUJKOSsrMHZUeC81bDNOcEpDcWk4OEZQNUdaZER0ZlhZK0dFdWpjQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYmVBRnBQVkI4aC9LQzMrbktEdW9JajQwSi9TZHR3VFZyQmQ1L095OUpOOVpLS1N2K2VLMkNNbzcxSWNZU1JCam9qSFFNdDBtRjNqNXpubC8rMi9JQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzMjE1OTI0NTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY1OTc2MDlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/to

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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
