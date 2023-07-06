/*

旅途随身听：https://apps.apple.com/app/id1622788638

*/

var guding = JSON.parse($response.body); 
guding.content["userId"] = "1"; 
guding.content["identityType"] = 1; 
guding.content["headUrl"] = "https://raw.githubusercontent.com/Guding88/iCon/main/Guding.png"; 
guding.content["isActivate"] = 1; 
guding.content["levDesc"] = "无耻的破解会员"; 
guding.content["userName"] = "骨钉"; 
$done({ body: JSON.stringify(guding) });
