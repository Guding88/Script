/*

指尖时光：https://apps.apple.com/app/id1392166974

[rewrite_local]
^https?:\/\/integral2\.dasyibalang\.com/v2\/User url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/zhijianshiguang.js

[MITM]
hostname = integral2.dasyibalang.com

*/
var guding = $response.body;
guding  = guding.replace(/"VIP":\d+/g， '"VIP":1');
$done({ body:guding});
