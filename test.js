/*

[rewrite_local]
^https?:\/\/(simphk|xsserve)\.com\/addressx5\/index.html|^https?\/\/198.18.13.*\/addressx5\/index.html url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/test.js

[MITM]
hostname = simphk.com,xsserve.com,198.18.13.*

*/
var guding = JSON.parse($response.body);
guding = JSON.stringify(guding).replace(/"‎v‎i‎p‎"‎:‎"‎1‎"/g, '"vip":"0"');
$done({ body: guding });
