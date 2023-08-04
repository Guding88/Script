/*

句读：https://apps.apple.com/app/id1073431872

[rewrite_local]
^https?:\/\/judouapp\.com\/api\/v2\/mine\/profile url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/judou.js

[MITM]
hostname = judouapp.com

*/
var guding = JSON.parse($response.body);
guding.is_member = true;
guding.nickname = "骨钉";
guding.member_expired_at = 148204937166;
guding.avatar = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
$done({ body: JSON.stringify(guding) });
