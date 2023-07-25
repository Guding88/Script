/*

给未来写封信：https://apps.apple.com/app/id1330852849

[rewrite_local]
^https?:\/\/api\.to-future\.net\/user\/get_user_info url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/geiweilaixiefengxin.js

[MITM]
hostname = api.to-future.net

*/
var guding = JSON.parse($response.body);
guding.data.memberVip.expire_time = 148204937166;
guding.data.memberVip.level = 1;
guding.data.nickname = "骨钉";
guding.data.code_id = "https://t.me/Guding88";
guding.data.headimgurl = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
$done({ body: JSON.stringify(guding) });
