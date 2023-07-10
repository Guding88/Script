/*

MoneyWiz：https://apps.apple.com/app/id1511185140

[rewrite_local]
^https?:\/\/billing\.wiz\.money\/expire_info_v2.php url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/MoneyWiz.js

[MITM]
hostname = billing.wiz.money

*/
var guding = "666666";
$done({ body: guding });
