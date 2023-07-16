/*

ChatBOT：https://apps.apple.com/app/id6448030649

[rewrite_local]
^https?:\/\/greatios\.xitengtech\.cn\/api\/visitors\/sign-in url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/ChatBOT.js

[MITM]
hostname = reatios.xitengtech.cn

*/
var guding = $response.body;
guding = guding.replace(/"vip":\d+/g, '"vip":1');
guding = guding.replace(/"vip_expire_time":\d+/g, '"vip_expire_time":"148204937166000"');
$done({ body:guding});
