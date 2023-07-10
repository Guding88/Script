/*

冥想星球：https://apps.apple.com/app/id1472457967
解锁冥想模块，声音模块可在冥想的背景音乐中使用，计划模块不可用。

[rewrite_local]
^https:\/\/kc\.xinli001\.com\/lingxikc\/(?!.*plan).* url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/mxxq.js

[MITM]
hostname = kc.xinli001.com

*/
var guding = $response.body;
guding  = guding.replace(/"isJoin":\w+/g， '"isJoin":true');
guding = guding.replace(/"isJoin":\d+/g， '"isJoin":1');
guding = guding.replace(/"expiredTime":".*?"/g， '"expiredTime":"6666-06-06 06:06:06"');
guding = guding.replace(/"activityStatus":\d+/g， '"activityStatus":1');
$done({ body:guding});
