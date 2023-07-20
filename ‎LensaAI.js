/*

Lensa AI：https://apps.apple.com/app/id1436732536

[rewrite_local]
^https?:\/\/appapi\.neuralprisma\.com\/receipt\/ios\/status\/lensa url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/LensaAI.js

[MITM]
hostname = appapi.neuralprisma.com

*/
var guding = JSON.parse($response.body);
guding.is_valid = true;
guding.expiration_date_unix = 148204937166;
guding.expiration_date = "6666-06-06T06:06:06Z";
$done({ body: JSON.stringify(guding) });
