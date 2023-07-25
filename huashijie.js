/*

画世界：https://apps.apple.com/app/id1450111327

[rewrite_local]
^https?:\/\/app\.huashijie\.art\/api\/(user\/getPerson|level\/info) url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/huashijie.js

[MITM]
hostname = app.huashijie.art

*/
var guding = JSON.parse($response.body);
if ($request.url.includes("/user/getPerson")) {
  guding.nick = "骨钉";
  guding.level = 999;
  guding.vipLevel = 2;
  guding.instruction = "https:\/\/t\.me\/Guding88";
  guding.addr = "https:\/\/t\.me\/Guding88";
  guding.vipExpireTime = "6666-06-06 06:06:06";
  guding.avatar = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
  guding.vipId = 3;
  guding.backgroundUrl = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/HollowKnight\.png";
} else if ($request.url.includes("/level/info")) {
  guding.data.exp = 28800;
  guding.data.levelInfo = {
    "commentLevelLimit": true,
    "sendTim": true,
    "submitIdea": true,
    "comment": true,
    "factionLevelLimit": true,
    "maxExp": 99,
    "recommendLimit": 99,
    "createTim": true,
    "minExp": 99,
    "dealFaction": true,
    "applyFactionAdmin": true,
    "level": 9,
    "score": true
  };
}
$done({ body: JSON.stringify(guding) });
