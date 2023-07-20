/*

指尖时光：https://apps.apple.com/app/id1392166974

[rewrite_local]
^https?:\/\/integral2\.dasyibalang\.com\/v2\/User url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/zhijianshiguang.js

[MITM]
hostname = integral2.dasyibalang.com

*/
var guding = JSON.parse($response.body);
guding.data.Photo = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
guding.data.VIP = 1;
guding.data.NickName = "骨钉 https://t.me/Guding88";
$done({ body: JSON.stringify(guding) });

