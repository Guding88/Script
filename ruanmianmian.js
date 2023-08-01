/*

软眠眠：https://apps.apple.com/app/id1640036657

[rewrite_local]
^https?:\/\/ruanmianmian\.xinzhi\.space\/api\/v1\/getUserByToken url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/ruanmianmian.js

[MITM]
hostname = ruanmianmian.xinzhi.space

*/
var guding = JSON.parse($response.body);
guding.data.nickname = "骨钉 https://t.me/Guding88";
guding.data.is_vip = 6;
guding.data.vip_expire = "6666-06-06 06:06:06";
$done({ body: JSON.stringify(guding) });
