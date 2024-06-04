/*

[rewrite_local]
^https?:\/\/api\.everyday\.app\/users url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/everyday.js

[MITM]
hostname = api.every.day.app

*/
var guding = JSON.parse($response.body);
guding.plan = "year";
guding.premium_access = "6666-06-06T06:06:06.666Z";
guding.last_action = "2023-06-06T06:06:06.666Z";
guding.currency = "USD";
$done({ body: JSON.stringify(guding) });
