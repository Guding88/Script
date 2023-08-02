/*

小习惯：https://apps.apple.com/app/id1455083310

[rewrite_local]
^https?:\/\/xianbeikeji\.com\/daily\/app\/user\/query$ url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/xiaoxiguan.js

[MITM]
hostname = xianbeikeji.com

*/
var guding = JSON.parse($response.body);
guding.data.userInfo.avatar = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
guding.data.userInfo.vipFlag = 4;
guding.data.userInfo.nickName = "骨钉 https://t.me/Guding88";
$done({ body: JSON.stringify(guding) });
