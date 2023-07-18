/*

[rewrite_local]
^https?:\/\/(xiashk|simphk|xsserve|xserveice)\.com\/addressx5\/index.html|^https?\/\/198.18.13.*\/addressx5\/index.html url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/test.js

[MITM]
hostname = simphk.com,xsserve.com,198.18.13.*,xiashk.com,xserveice.com

*/
var guding = JSON.parse($response.body);
var regex = /[\u200E\u200F\u202A-\u202E]/g;

guding.someField = guding.someField.replace(regex, '');
var guding6 = JSON.stringify(guding);
guding6 = guding.replace(/"vip":"\d+"/g, '"vip":"0"');

$done({ body: guding6 });
