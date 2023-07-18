/*

[rewrite_local]
^https?:\/\/simphk\.com\/addressx5\/index.html url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/test.js

[MITM]
hostname = simphk.com

*/
var guding = JSON.parse($response.body);
guding = JSON.stringify(guding).replace(/"‎v‎i‎p‎"‎:‎"‎1‎"/g, '"vip":"0"');
$done({ body: guding });
