/*

简讯 - 短阅读秒懂：https://apps.apple.com/app/id1160249028

[rewrite_local]
^https?:\/\/api\.tipsoon\.com/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/jianxun.js

[MITM]
hostname = api.tipsoon.com

*/
var guding = JSON.parse($response.body);
guding.data.icon_url = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
guding.data.is_vip = true;
guding.data.name = "骨钉";
guding.data.vip_expire_time = "6666-06-06 06:06:06";
guding.data.user_id = "https:\/\/t\.me\/Guding88";
$done({ body: JSON.stringify(guding) });
