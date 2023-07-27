/*

时间积木：https://apps.apple.com/app/id821381018

[rewrite_local]
^https?:\/\/box\.timeblocks\.com\/api\/inbox url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/shijianjimu.js

[MITM]
hostname = box.timeblocks.com

*/
var guding = JSON.parse($response.body);
guding.premium = 1;
$done({ body: JSON.stringify(guding) });
