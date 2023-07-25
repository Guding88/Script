/*

77进度：https://apps.apple.com/app/id1660947434

[rewrite_local]
^https?:\/\/19700\.com\/(todo|computer|clock)\/api\/v1\/o\/member\/getProfile url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/77.js

[MITM]
hostname = 19700.com

*/
var guding = JSON.parse($response.body);
guding.data.vipEndDate = "6666-06-06 06:06:06";
guding.data.nickName = "骨钉";
guding.data.email = "https://t.me/Guding88";
guding.data.vipFlag = true;
$done({ body: JSON.stringify(guding) });
