/*

收起来：https://apps.apple.com/app/id1669206548

[rewrite_local]
^https?:\/\/api\.shouqilai\.cn\/m\/receive\/account\/getAccountByToken url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/shouqilai.js

[MITM]
hostname = api.shouqilai.cn

*/
var guding = JSON.parse($response.body);
guding.data.avatarUrl = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
guding.data.vip = true;
guding.data.foreverVip = true;
guding.data.nickName = "骨钉";
guding.data.code = "https:\/\/t\.me\/Guding88";
$done({ body: JSON.stringify(guding) });
