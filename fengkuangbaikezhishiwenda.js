/*

疯狂百科知识问答：https://apps.apple.com/app/id1225435117

[rewrite_local]
^https?:\/\/newos\.glassmarket\.cn\/index\.php url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/fengkuangbaikezhishiwenda.js

[MITM]
hostname = newos.glassmarket.cn

*/
var guding = $response.body;
guding = guding.replace(/"ismember":"\d+"/g, '"ismember":"5"');
guding = guding.replace(/"membertime":".*?"/g, '"membertime":"6666-06-06 06:06:06"');
$done({ body:guding});
