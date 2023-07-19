/*

过期啦：https://apps.apple.com/app/id1470339754

[rewrite_local]
^https:\/\/api\.guoqi365\.com\/1\.1\/functions\/getUserInfo url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/guoqila.js

[MITM]
hostname = http://api.guoqi365.com

*/
body = $response.body.replace(/\"user_is_pro":\w+/g, '\"user_is_pro":true').replace(/\"group_is_pro":\w+/g, '\"group_is_pro":true')
$done({body});
