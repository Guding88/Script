/*

PhotoGrid：https://apps.apple.com/app/id543577420

[rewrite_local]
^https?:\/\/pgapi\.ksmobile\.com\/v1\/ios\/auth url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/PhotoGrid.js

[MITM]
hostname = pgapi.ksmobile.com

*/
var guding = $response.body;
guding = guding.replace(/"expires_date":\d+/g, '"expires_date":148204937166');
guding  = guding.replace(/"is_trial_period":\w+/g, '"is_trial_period":false');
guding = guding.replace(/"expires_date_ms":\d+/g, '"expires_date_ms":148204937166000');
$done({ body:guding});
