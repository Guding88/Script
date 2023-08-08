/*

一念便签：https://apps.apple.com/app/id1473578864

[rewrite_local]
^https?:\/\/yinian\.pro\/api\/user url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/yinianbianqian.js

[MITM]
hostname = yinian.pro

*/
var guding = JSON.parse($response.body);
guding.data.is_vip = 1;
guding.data.vip_end_time = "6666-06-06 06:06:06";
$done({ body: JSON.stringify(guding) });
