/*

冷知识酱：https://apps.apple.com/app/id6443612500

[rewrite_local]
^https?:\/\/lengapp\.com\/api\/v1\/mine url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/lengzhishijiang.js

[MITM]
hostname = lengapp.com

*/
var guding = JSON.parse($response.body);
guding.is_year_member = true;
guding.avatar_url = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
guding.member_expired_at = 148204937166;
guding.is_member = true;
guding.nickname = "骨钉";
$done({ body: JSON.stringify(guding) });
