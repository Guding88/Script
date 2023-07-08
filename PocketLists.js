/*

PocketLists：https://apps.apple.com/app/id1272049520

[rewrite_local]
^https?:\/\/pocketlists\.com\/api\/v1\/pocketlists.me.get url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/PocketLists.js

[MITM]
hostname = pocketlists.com

*/
var guding = JSON.parse($response.body);
guding.data.subscription_expires = "6666-06-06";
guding.data.subscription_type = "family";//personal
$done({ body: JSON.stringify(guding) });
