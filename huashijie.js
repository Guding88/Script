/*

画世界：https://apps.apple.com/app/id1450111327

[rewrite_local]
^https?:\/\/app\.huashijie\.art\/api\/user\/getPerson url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/huashijie.js

[MITM]
hostname = app.huashijie.art

*/
var guding = JSON.parse($response.body);
guding.nick = "骨钉";
guding.level = 999;
guding.vipLevel = 2;
guding.instruction = "https:\/\/t\.me\/Guding88";
guding.addr = "https:\/\/t\.me\/Guding88";
guding.vipExpireTime = "6666-06-06 06:06:06";
guding.avatar = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
guding.vipId = 3;
guding.backgroundUrl = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/HollowKnight\.png";
$done({ body: JSON.stringify(guding) });
