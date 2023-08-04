/*

千瓜数据：https://apps.apple.com/app/id1572934942
跳过手机号绑定，跳过用户信息认证

[rewrite_local]
^https?:\/\/openapi.qian-gua.com\/v2\/(Login\/LoginByWechat|User\/GetUserInfo) url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/qianguashuju.js

[MITM]
hostname = openapi.qian-gua.com

*/
var guding = $response.body;
guding = guding.replace(/"has_tel":\w+/g, '"has_tel":true');
guding = JSON.parse(guding);
guding.Data.AuthenticationStatus = 6;
guding.Data.NickName = "骨钉 https://t.me/Guding88";
guding.Data.LogoUrl = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
$done({ body: JSON.stringify(guding) });
