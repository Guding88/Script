/*

Agenda：https://apps.apple.com/app/id1370289240

[rewrite_local]
^https?:\/\/accounts\.agenda\.com\/users url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/Agenda.js

[MITM]
hostname = accounts.agenda.com

*/
var guding = $response.body;
guding = JSON.parse(guding);
guding.unlockExpiryMobile = 148204937166;
guding.licenseStatusMobile = 2;
guding.licenseStatus = 2;
guding.informUserOfPendingBonus = false;
guding.hasLifetimeUnlock = false;
guding.freeTrialStatus = 1;
guding.isSubscribed = true;
guding.unlockExpiry = 148204937166;
guding.isSubscribedMobile = true;
guding.error = 0;
guding.universalPurchaseAvailable = false;
guding = JSON.stringify(guding);
$done({ body: guding });