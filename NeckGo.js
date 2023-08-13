/*

NeckGo：https://apps.apple.com/app/id1660505668

[rewrite_local]
^https?:\/\/neckgo\.wedea\.cn\/neok\/api\/api\/getLoginInfo url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/NeckGo.js

[MITM]
hostname = neckgo.wedea.cn

*/
var guding = JSON.parse($response.body);
guding.data.isVip = true;
guding.data.nickName = "骨钉 https://t.me/Guding88";
$done({ body: JSON.stringify(guding) });