/*

博树：https://apps.apple.com/app/id379968583

[rewrite_local]
^https?:\/\/api\.busuu\.com\/users\/me url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/boshu.js

[MITM]
hostname = api.busuu.com

*/
var guding = JSON.parse($response.body);
guding.data.access = {"tier": "plus"};
$done({ body: JSON.stringify(guding) });
