/*

青柠设计：https://apps.apple.com/app/id1584730935

[rewrite_local]
^https?:\/\/api\.qingning6\.com\/api\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/qingningsheji.js

[MITM]
hostname = api.qingning6.com

*/
var guding = JSON.parse($response.body);
guding.result.isTeamUserVip = 1;
guding.result.userImg = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
guding.result.vipExpireTime = 148204937166000;
guding.result.userDesc = "https://t.me/Guding88";
guding.result.isVip = 1;
guding.result.companyVipExpireTime = 148204937166000;
guding.result.userName = "骨钉";
$done({ body: JSON.stringify(guding) });
