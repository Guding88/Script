/*

旅途随身听：https://apps.apple.com/app/id1622788638

[rewrite_local]
^https?:\/\/www\.1314zhilv\.com\/ltsstnew\/user\/getInfo url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/lvtusuishenting.js
^https?:\/\/www\.1314zhilv\.com\/ltsstnew\/guideScenic\/getScenicAllMarkerList url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/lvtusuishenting.js

[MITM]
hostname = www.1314zhilv.com

*/
var guding = $response.body;
guding = guding.replace(/"isAudition":\d+/g, '"isAudition":1');
guding = guding.replace(/"identityType":\d+/g, '"identityType":1');
guding = guding.replace(/"isActivate":\d+/g, '"isActivate":1');
guding.content["levDesc"] = "无耻的破解会员"; 
guding.content["userName"] = "骨钉https://t.me/Guding88"; 
$done({ body:guding});
