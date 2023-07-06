/*

旅途随身听：https://apps.apple.com/app/id1622788638

[rewrite_local]
^https?:\/\/www\.1314zhilv\.com\/ltsstnew\/user\/getInfo url script-response-body https://raw.githubusercontent.com/Guding88/Scritp/main/ltsst.js


[MITM]
hostname = www.1314zhilv.com

*/

var guding = JSON.parse($response.body); 
guding.content["userId"] = "1"; 
guding.content["identityType"] = 1; 
guding.content["headUrl"] = "https://raw.githubusercontent.com/Guding88/iCon/main/Guding.png"; 
guding.content["isActivate"] = 1; 
guding.content["levDesc"] = "无耻的破解会员"; 
guding.content["userName"] = "骨钉"; 
$done({ body: JSON.stringify(guding) });
