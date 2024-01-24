/*

‎Focos Live：

[rewrite_local]
^https?:\/\/focoslive\.oracle\.bendingspoonsapps\.com\/v2\/users\/setup url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/FocosLive.js

[MITM]
hostname = focoslive.oracle.bendingspoonsapps.com

*/
var guding = JSON.parse($response.body);
guding.me.active_subscriptions_ids = ["com.focoslive.1y_t130_adj"];
guding.me.unique_id = "88888888-8888-8888-8888-888888888888";
$done({ body: JSON.stringify(guding) });
